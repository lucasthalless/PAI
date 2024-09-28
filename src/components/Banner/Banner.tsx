import { ReactNode } from "react";
import "./style.css";

interface BannerProps {
  bgImg: string;
  title: string | ReactNode;
  subtitle: string | ReactNode;
}

export default function Banner({ bgImg, title, subtitle }: BannerProps) {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className="banner-section"
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>

      <div className="arrow-down-banner">↓</div>
    </section>
  );
}
