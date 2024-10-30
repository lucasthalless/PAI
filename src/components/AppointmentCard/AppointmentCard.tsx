"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import "./style.css";

interface AppointmentCardProps {
  appointmentDate: Date;
  location: string;
  time: string;
  vehicle: string;
}

export default function AppointmentCard({
  appointmentDate,
  location,
  time,
  vehicle,
}: AppointmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`appointmentCard ${isExpanded ? "expanded" : "compressed"}`}
      onClick={toggleExpand}
    >
      <div className="appointmentHeader">
        <span>
          {format(appointmentDate, "dd/MM/yyyy", { locale: ptBR })}: Atendimento
          agendado
        </span>
        <button className="expandButton">{isExpanded ? "-" : "+"}</button>
      </div>

      {isExpanded && (
        <div className="appointmentDetails">
          <p>
            <strong>Local:</strong> {location}
          </p>
          <p>
            <strong>Data:</strong>{" "}
            {format(appointmentDate, "dd/MM/yyyy", { locale: ptBR })}
          </p>
          <p>
            <strong>Horário:</strong> {time}
          </p>
          <p>
            <strong>Veículo (placa):</strong> {vehicle}
          </p>
        </div>
      )}
    </div>
  );
}
