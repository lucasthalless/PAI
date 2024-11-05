import { ReactNode } from "react";
import { Calendar } from "../svgs/Calendar";
import { Trash } from "../svgs/Trash";
import "./style.css";

interface NotificationCardProps {
  index: number;
  title: string;
  message: string | ReactNode;
  time: string;
  handleRemove: (index: number) => void;
  icon?: React.ReactNode;
}

export default function NotificationCard({
  index,
  title,
  message,
  time,
  handleRemove,
  icon = <Calendar />,
}: Readonly<NotificationCardProps>) {
  return (
    <div className="notification-card">
      <div className="icon-container">{icon}</div>
      <div className="content">
        <h4 className="title">{title}</h4>
        <div className="message">{message}</div>
        <span className="time">{time}</span>
      </div>
      <button onClick={() => handleRemove(index)} className="action-container">
        <Trash />
      </button>
    </div>
  );
}
