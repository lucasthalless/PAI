"use client";

import { useState } from "react";
import {
  format,
  getDaysInMonth,
  startOfMonth,
  addMonths,
  subMonths,
  isSameDay,
} from "date-fns";
import "./style.css";
import { ptBR } from "date-fns/locale";

interface CalendarProps {
  appointments: Date[];
}

export default function Calendar({ appointments }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const now = new Date();

  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = startOfMonth(currentDate);
  const firstDayIndex = firstDayOfMonth.getDay();

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div key={`empty-${i}`} className="emptyDay"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );

      // Verificar se o dia atual está no array de agendamentos
      const isHighlighted = appointments.some((appointment) =>
        isSameDay(appointment, dayDate)
      );

      const dayClass =
        (i === Number(format(now, "dd")) &&
          format(currentDate, "MMMM yyyy") === format(now, "MMMM yyyy")) ||
        isHighlighted
          ? "highlightDay"
          : "day";
      days.push(
        <div key={i} className={dayClass}>
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>{format(currentDate, "MMMM yyyy", { locale: ptBR })}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="weekDays">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="weekDay">
            {day}
          </div>
        ))}
      </div>
      <div className="daysGrid">{renderDays()}</div>
    </div>
  );
}
