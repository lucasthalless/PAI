"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "../svgs/ArrowRight";
import { Check } from "../svgs/Check";
import "./style.css";

interface PlanCardProps {
  name: string;
  price: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  favorite?: boolean;
}

export function PlanCard({
  name,
  price,
  benefit1,
  benefit2,
  benefit3,
  favorite,
}: PlanCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <div className="plan-card">
      {favorite ? <div className="favorite">O predileto!</div> : null}
      <div className="plan-card-heading">
        <h4>{name}</h4>
        <p>
          {price} <span>/ usuário</span>
        </p>
      </div>
      <div className="plan-card-benefits">
        <p>
          <Check /> {benefit1}
        </p>
        <p>
          <Check position={2} /> {benefit2}
        </p>
        <p>
          <Check position={3} /> {benefit3}
        </p>
      </div>
      <button onClick={() => handleClick()}>
        Quero esse plano <ArrowRight width={18} height={18} />
      </button>
    </div>
  );
}
