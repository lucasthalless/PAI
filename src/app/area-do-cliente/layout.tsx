"use client";

import { AlienShip } from "@src/components/svgs/AlienShip";
import { CalendarCheck } from "@src/components/svgs/CalendarCheck";
import { Mail } from "@src/components/svgs/Mail";
import { PinLocation } from "@src/components/svgs/PinLocation";
import { Puzzle } from "@src/components/svgs/Puzzle";
import { UserCircle } from "@src/components/svgs/UserCircle";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import ArrowLeft from "@src/components/svgs/ArrowLeft";
import { useState } from "react";
import { ArrowRight } from "@src/components/svgs/ArrowRight";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="customer-dashboard">
      <aside
        className={`customer-dashboard-aside ${isSidebarOpen ? "open" : null}`}
      >
        <button
          className="close-mobile-sidebar-button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <ArrowLeft width={20} height={20} />
        </button>
        <nav>
          <Link href="/area-do-cliente/meu-cadastro">
            <UserCircle />
            Meu cadastro
          </Link>
          <Link href="/area-do-cliente/minha-assinatura">
            <Puzzle />
            Minha assinatura
          </Link>
          <Link href="/area-do-cliente/meus-agendamentos">
            <CalendarCheck />
            Meus agendamentos
          </Link>
          <Link href="/area-do-cliente/chatbot">
            <AlienShip />
            Chatbot PAI
          </Link>
          <Link href="/area-do-cliente/parceiros">
            <PinLocation />
            Centro de Parceiros
          </Link>
          <Link href="/area-do-cliente/notificacoes">
            <Mail />
            Notificações
          </Link>
        </nav>
        <Link href="/home">
          <Image
            src="/white-logo.svg"
            alt="Logo PAI."
            width={112}
            height={112}
          />
        </Link>
      </aside>
      <section className="dashboard-content-section">
        <button
          className="open-mobile-sidebar-button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <ArrowRight width={20} height={20} color="#fff" />
        </button>
        {children}
      </section>
    </main>
  );
}
