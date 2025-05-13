
import Logo from '../../assets/Logo/1021x331.png';

export default function Header() {
    return (
        <header>
            <a href='/'><img src={Logo} height={90} className='logo'/></a>
            <nav>
                <ul>
                    <li><a href="#about" className='about'>Sobre</a></li>
                    <li><a href="#bus-route" className='itinerario'>Itinerário</a></li>
                    <li><a href="#tour" className='tours'>Passeios</a></li>
                    <li><a href="#contact" className='contato'>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}