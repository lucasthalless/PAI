import { Input } from "@src/components/Input/Input";
import { InDevelopmentButton } from "@src/components/InDevelopmentButton/InDevelopmentButton";
import "./style.css";

export default function Page() {
  return (
    <>
      {/* MOCK */}
      <h1>Minha assinatura</h1>
      <div className="separator"></div>
      <div className="plan-form-container">
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
              <Input
                id="payment-method"
                className="payment-text"
                placeholder="Final 6473"
              />
            </div>
          </div>
        </form>

        <div className="button-group">
          <InDevelopmentButton className="button-alterar-plano">
            Alterar plano
          </InDevelopmentButton>
          <InDevelopmentButton className="button-alterar-pagamento">
            Alterar forma de pagamento
          </InDevelopmentButton>
          <InDevelopmentButton className="button-solicitar-cancelamento">
            Solicitar cancelamento
          </InDevelopmentButton>
        </div>
      </div>
    </>
  );
}
