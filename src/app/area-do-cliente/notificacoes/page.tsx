"use client";

import NotificationCard from "@src/components/NotificationCard/NotificationCard";
import { useState } from "react";

export default function Page() {
  const [notifications, setNotifications] = useState<
    { title: string; message: JSX.Element; time: string }[]
  >([
    {
      title: "AGENDAMENTO",
      message: (
        <>
          <p className="topic">
            Você tem um atendimento agendado para a próxima semana!
          </p>
          <p>Esperamos você dia 02/12 às 11h no Centro Automotivo Otosan.</p>
        </>
      ),
      time: "30 minutos atrás",
    },
  ]);

  const removeNotification = (index: number) => {
    setNotifications(notifications.splice(index + 1, 1));
  };

  if (notifications.length == 0)
    return (
      <>
        <h1>Sem notificações por enquanto!</h1>
      </>
    );

  return (
    <>
      <h1>Notificações</h1>
      <div className="separator"></div>
      {notifications.map((notification, index) => (
        <NotificationCard
          index={index}
          key={index}
          title={notification.title}
          message={notification.message}
          time={notification.time}
          handleRemove={removeNotification}
        />
      ))}
    </>
  );
}
