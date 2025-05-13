import './style.css';

import iconFacebook from '../../assets/icons8-facebook.svg';
import iconWhatsapp from '../../assets/icons8-whatsapp.svg';

export default function Footer() {
    return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-title">Cláudio Fretado</p>

        <div className="footer-socials">
          <a href="https://www.facebook.com/share/1AKzeXhJhN/" target="_blank" rel="noopener noreferrer">
            <img src={iconFacebook} alt="Facebook" />
          </a>
          <a href="https://wa.me/5511981545368" target="_blank" rel="noopener noreferrer">
            <img src={iconWhatsapp} alt="WhatsApp" />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Cláudio Fretado. Todos os direitos reservados.
        </p>
      </div>
    </footer>
    )
}