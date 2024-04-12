import Link from "next/link";
import "./navBar.css";

interface NavBarProps {
    active: "dashboard" | "quemSomos" | "suporte";
}

export default function NavBar(props: NavBarProps) {
    const { active } = props;

    return (
        <header>
            <Link href="/">
                <img src="/images/logo.png" alt="Giffty Logo" className="logo" />
            </Link>
            <nav className="navegate">
                <ul className="listaHeader">
                    <li className="itemHeader">
                        <Link href="/quemSomos">Quem somos?</Link>
                    </li>
                    <li className="itemHeader">
                        <Link href="/suporte">Suporte</Link>
                    </li>
                    <li className="itemHeader temas-dropdown">
                        Temas
                        <ul className="temas-dropdown-content">
                            <li><Link href="/Natal">Natal</Link></li>
                            <li><Link href="/Casamento">Casamento</Link></li>
                            <li><Link href="/Padrão">Padrão</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <nav className="login">
                <ul className="listaHeader">
                    <img src="https://i.pravatar.cc/300" alt="Icon" className="icon-user"/>
                </ul>
            </nav>
        </header>
    );
}
