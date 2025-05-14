import './style.css';

export default function Forms() {
    return (
        <section id='contact'>
            <div className="contato-container">
                <h2 className="contato-title">Entre em Contato</h2>
                <p className="contato-desc">
                    Fale diretamente conosco para tirar dúvidas, solicitar informações ou agendar passeios.
                </p>

                <form
                    action="https://formspree.io/f/xldbadrg"
                    method="POST"
                    className="contato-form"
                >
                    <input type="text" name="nome" placeholder="Seu nome" required />
                    <input type="email" name="email" placeholder="Seu e-mail" required />
                    <textarea name="mensagem" placeholder="Sua mensagem" rows={4} required></textarea>
                    <button type="submit">Enviar</button>
                </form>

                <div className="whatsapp-button">
                    <a href="https://wa.me/5511981545368">
                        Entrar em contato pelo WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}