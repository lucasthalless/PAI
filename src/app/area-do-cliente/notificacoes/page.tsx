import NotificationCard from "@src/components/NotificationCard/NotificationCard";
import Image from "next/image";

export default function Page() {
  const notifications = [
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
  ];

  if (notifications.length == 0)
    return (
      <>
        <Image alt="Notification" src="" width={284} height={284} />
        <h1>Sem notificações por enquanto!</h1>
      </>
    );

  return (
    <>
      <h1>Notificações</h1>
      <div className="separator"></div>
      {notifications.map((notification, index) => (
        <NotificationCard
          key={index}
          title={notification.title}
          message={notification.message}
          time={notification.time}
        />
      ))}
    </>
  );
}
