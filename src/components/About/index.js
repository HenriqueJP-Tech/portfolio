import "./styles.css";
import { FaSmile, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="about-section">
      <h2 className="title">Sobre mim</h2>

      <p className="description">
        Meu nome é Henrique J. Pereira. Sou desenvolvedor Web e Mobile, focado em 
        criar soluções modernas, rápidas e funcionais. Trabalho com dedicação para 
        entregar interfaces atraentes, experiências fluidas e projetos de alta 
        qualidade, sempre priorizando desempenho, responsividade e boas práticas.
      </p>

      <div className="info-grid">

        <div className="info-item">
          <div className="icon-circle">
            <FaSmile />
          </div>
          <h4>Nome</h4>
          <p>Henrique J. Pereira</p>
        </div>

        <div className="info-item">
          <div className="icon-circle">
            <FaEnvelope />
          </div>
          <h4>E-mail</h4>
          <p>henriquepereiraemp@gmail.com</p>
        </div>

        <div className="info-item">
          <div className="icon-circle">
            <FaInstagram />
          </div>
          <h4>Instagram</h4>
          <p>@tech_rique</p>
        </div>

        <div className="info-item">
          <div className="icon-circle">
            <FaLinkedin />
          </div>
          <h4>Linkedin</h4>
          <p>www.linkedin.com/in/henrique-jose-pereira</p>
        </div>
      </div>
    </section>
  );
}
