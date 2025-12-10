import "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Tech Rique</h1>

      <ul className="nav-links">
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre Mim</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
      </ul>
    </nav>
  );
}
