"use client"

import Link from "next/link";
import { ReactNode, SVGAttributes } from "react";
import './style.css';

interface LinkCardProps extends SVGAttributes<LinkCardProps> {
  color?: string;
  children: ReactNode;
  href: string;
}

export function LinkCard({ color = 'var(--blue)', children, href }:LinkCardProps)  {
  return (
    // TODO: fix hover
    <Link href={href} className="link-card">
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="224" viewBox="0 0 300 224" fill="none" onMouseOver={(e) => (e.currentTarget.children[0] as HTMLElement).style.fill='var(--green)'} onMouseOut={(e) => (e.currentTarget.children[0] as HTMLElement).style.fill='var(--blue)'}>
        <rect x="0" y="0" width="300" height="224" rx="16" fill={color} />
        <g style={{mixBlendMode: 'multiply'}} filter="url(#filter0_f_73_6150)">
          <ellipse cx="129.744" cy="97.677" rx="71.744" ry="107.677" fill="#6082AE"/>
          <ellipse cx="210.824" cy="107" rx="74.176" ry="117" fill="#DFD0FF"/>
        </g>
        <defs>
          <filter id="filter0_f_73_6150" x="0.037323" y="0.037323" width="487.925" height="493.925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="64.9813" result="effect1_foregroundBlur_73_6150"/>
        </filter>
        </defs>
      </svg>
      <div className="link-card-text">
        {children}
      </div>
    </Link>
  );
};
