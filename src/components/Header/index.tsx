
import Logo from '../../assets/Logo/1021x331.png';

export default function Header() {
    return (
        <header>
            <img src={Logo} height={90} className='logo' />
            <nav>
                <ul>
                    <li>Sobre</li>
                    <li>Contatos</li>
                </ul>
            </nav>
        </header>
    )
}