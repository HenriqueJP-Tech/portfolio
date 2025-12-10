
import "./styles.css";
import MinhaFoto from "../../assets/me.jpeg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="intro">Olá, eu sou</p>
        <h1 className="name">Henrique J. Pereira</h1>
        <p className="role">Desenvolvedor Mobile & Web.</p>

        <a href="/curriculo.pdf" className="btn-curriculo" download>
          Baixar currículo
        </a>
      </div>

      <div className="hero-image">
        <img src={MinhaFoto} alt="Henrique J. Pereira" />
      </div>
    </section>
  );
}
