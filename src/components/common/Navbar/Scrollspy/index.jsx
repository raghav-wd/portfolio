import "./styles.css";

const Scrollspy = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul className="nav-menu">
        <li>
          <a data-scroll="home" href="#home" id="dintro" className="dot active">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a data-scroll="about" href="#project" id="dsummary" className="dot">
            <span>Work</span>
          </a>
        </li>
        <li>
          <a
            data-scroll="services"
            href="#services"
            id="dassess"
            className="dot"
          >
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a data-scroll="contact" href="#contact" id="dtrain" className="dot">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Scrollspy;
