import logo from "../../assets/img/logo.svg";
import "./stiles.css";

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a
                            href="https://www.instagram.com/o.emanuel1/"
                            target="_blank"
                        >
                            @EmanuelOAndrade
                        </a>
                    </p>
                </div>
            </header>
        </>
    );
}

export default Header;
