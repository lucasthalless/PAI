import "./style.css";

export default function Page() {
  return (
    <>
      <h1>Centro de Parceiros Porto Seguro®</h1>
      <div className="separator"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23717.35651137369!2d-46.665993712237835!3d-23.53403765863198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59be3a9b8583%3A0xb83c9363ffcceda6!2sMatriz%20Porto!5e0!3m2!1spt-BR!2sbr!4v1729869702494!5m2!1spt-BR!2sbr"
        height="550"
        loading="lazy"
        title="Oficinas"
        className="iframe-partners"
      ></iframe>
    </>
  );
}
