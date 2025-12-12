import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import "./styles.css";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Habilidades</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
        </div>

        <div className="skill-card">
          <SiJavascript className="skill-icon" />
        </div>

        <div className="skill-card">
          <SiTailwindcss className="skill-icon" />
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon" />
        </div>

        <div className="skill-card">
          <SiNextdotjs className="skill-icon" />
        </div>
      </div>
    </section>
  );
}
