"use client";

import { Input } from "@src/components/Input/Input";
import "./style.css";

export default function Page() {
  const handleInDevelopmentActions = () => {
    alert("Ação em desenvolvimento indisponível no momento!");
  };
  return (
    <>
      <h1>Minha assinatura</h1>
      <div className="separator"></div>
      <div className="plano-form-container">
        <form>
          <div className="form-row">
            <label htmlFor="plan" className="form-label">
              PLANO
            </label>
            <Input
              id="plan"
              type="text"
              className="form-input"
              placeholder="Plano A"
              readOnly
            />
          </div>

          <div className="form-row">
            <label htmlFor="subscription-date" className="form-label">
              DATA DE ASSINATURA
            </label>
            <Input
              id="subscription-date"
              type="text"
              className="form-input"
              placeholder="24/09/2024"
              readOnly
            />
          </div>

          <div className="form-row">
            <label htmlFor="renovation-date" className="form-label">
              DATA DE RENOVAÇÃO
            </label>
            <Input
              id="renovation-date"
              type="text"
              className="form-input"
              placeholder="24/10/2024"
              readOnly
            />
          </div>

          <div className="form-row">
            <label htmlFor="payment-method" className="form-label">
              FORMA DE PAGAMENTO
            </label>
            <div className="payment-method">
              {/* <Image src="" alt="Ícone Mastercard" width={24} height={24} /> */}
              <Input
                id="payment-method"
                className="payment-text"
                placeholder="Final 6473"
              />
            </div>
          </div>
        </form>

        <div className="button-group">
          <button
            onClick={handleInDevelopmentActions}
            className="button-alterar-plano"
          >
            Alterar plano
          </button>
          <button
            onClick={handleInDevelopmentActions}
            className="button-alterar-pagamento"
          >
            Alterar forma de pagamento
          </button>
          <button
            onClick={handleInDevelopmentActions}
            className="button-solicitar-cancelamento"
          >
            Solicitar cancelamento
          </button>
        </div>
      </div>
    </>
  );
}
