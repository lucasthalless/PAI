"use client";

import { Input } from "@src/components/Input/Input";
import "./style.css";

export default function Page() {
  const handleInDevelopmentActions = () => {
    alert("Ação em desenvolvimento indisponível no momento!");
  };
  return (
    <>
      <h1>Meu cadastro</h1>
      <div className="separator"></div>
      <div className="user-data-form-container">
        <form action="">
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <Input
              id="name"
              type="text"
              value="Carolina Estevam Rodgerio"
              placeholder="Seu nome completo"
            />
          </div>
          <div className="form-row">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              value="carolina.rodgerio@fiap.com.br"
              placeholder="exemplo@email.com"
            />
          </div>
          <div className="form-row">
            <label htmlFor="tel" className="form-label">
              Telefone
            </label>
            <Input
              id="tel"
              type="tel"
              value="(11) 99999-4321"
              placeholder="(00) 9 0000-0000"
            />
          </div>
          <div className="form-row form-row-address">
            <label htmlFor="address" className="form-label">
              Endereço
            </label>
            <div className="address-inputs">
              <Input type="text" value="03330-000" placeholder="CEP" />
              <Input type="text" value="Rua dos Pais" placeholder="Rua" />
              <Input type="text" value="1" placeholder="Número" />
              <Input
                type="text"
                value="Apartamento 10"
                placeholder="Complemento"
              />
              <Input type="text" value="São Paulo" placeholder="Cidade" />
              <Input type="text" value="SP" placeholder="Estado" />
            </div>
          </div>
          <div className="form-row form-row-vehicle">
            <label htmlFor="license-plate" className="form-label">
              Placa
            </label>
            <Input
              id="license-plate"
              type="text"
              value="PAI-0000"
              placeholder="Placa"
            />
            <label htmlFor="renavam" className="form-label">
              RENAVAM
            </label>
            <Input
              id="renavam"
              type="text"
              value="00000000000"
              placeholder="Renavam"
            />
          </div>
        </form>

        <div className="button-group">
          <button
            onClick={handleInDevelopmentActions}
            className="button-alterar-dados"
          >
            Alterar dados
          </button>
          <button
            onClick={handleInDevelopmentActions}
            className="button-solicitar-exclusao"
          >
            Solicitar exclusão
          </button>
        </div>
      </div>
    </>
  );
}
