import "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo" onClick={() => document.getElementById("hero").scrollIntoView({behavior: "smooth"})}>{`< Tech Rique />`}</h1>

      <ul className="nav-links">
        <li><a href="#hero">Início</a></li>
        <li><a href="#about">Sobre Mim</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#skills">Habilidades</a></li>
      </ul>
    </nav>
  );
}
