import "./styles.css";
import { FiCode, FiSmartphone } from "react-icons/fi";
import { SiReact } from "react-icons/si";

export default function Services() {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Serviços</h2>

      <div className="services-grid">
        <div className="service-card">
          <FiCode className="service-icon" />
          <h3 className="service-text">
            Criação
            <br /> de sites
          </h3>
        </div>

        <div className="service-card">
          <SiReact className="service-icon" />
          <h3 className="service-text">
            Aplicativos
            <br /> Multiplataformas
          </h3>
        </div>

        <div className="service-card">
          <FiSmartphone className="service-icon" />
          <h3 className="service-text">
            Sites
            <br /> responsivos
          </h3>
        </div>
      </div>
    </section>
  );
}
