import { ReactNode } from "react";
import { Calendar } from "../svgs/Calendar";
import { Trash } from "../svgs/Trash";
import "./style.css";

interface NotificationCardProps {
  title: string;
  message: string | ReactNode;
  time: string;
  icon?: React.ReactNode;
}

export default function NotificationCard({
  title,
  message,
  time,
  icon = <Calendar />,
}: Readonly<NotificationCardProps>) {
  return (
    <div className="notification-card">
      <div className="icon-container">{icon}</div>
      <div className="content">
        <h4 className="title">{title}</h4>
        <p className="message">{message}</p>
        <span className="time">{time}</span>
      </div>
      <div className="action-container">
        <Trash />
      </div>
    </div>
  );
}
