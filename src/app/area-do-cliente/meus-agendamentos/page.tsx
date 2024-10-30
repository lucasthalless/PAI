import AppointmentCard from "@src/components/AppointmentCard/AppointmentCard";
import Calendar from "@src/components/Calendar/Calendar";
import "./style.css";

export default function Page() {
  const appointments = [
    {
      appointmentDate: new Date(2024, 11, 2),
      location: "Centro Automotivo Otosan",
      time: "11h",
      vehicle: "PAI-0000",
    },
  ];

  const appointmentsDates = appointments.map(
    (appointment) => appointment.appointmentDate
  );
  return (
    <>
      <h1>Meus agendamentos</h1>
      <div className="separator"></div>
      <div className="appointments-wrapper">
        <Calendar appointments={appointmentsDates} />
        {appointments.map((appointment, index) => (
          <AppointmentCard
            key={index}
            appointmentDate={appointment.appointmentDate}
            location={appointment.location}
            time={appointment.time}
            vehicle={appointment.vehicle}
          />
        ))}
      </div>
    </>
  );
}
