
import './style.css'

import img3 from '../../img/3.jpg';

export default function About() {
    return (
        <section className='container-about' id='about'>
            <div>
                <img src={img3} height={600} className='img-about-1' />
            </div>
            <div className='text-about'>
                <h1>Sua jornada diária começa com a gente</h1>
                <p> Há mais de 10 anos, a <strong>JCP Locações</strong> conecta centenas de passageiros da <strong>Cidade Tiradentes</strong> ao <strong>Brás, no centro de São Paulo</strong>, com pontualidade, respeito e dedicação.
                    <br />

                    <br />Nosso compromisso vai muito além de levar você ao trabalho — queremos que seu dia comece bem, com tranquilidade, sem stress e com a certeza de estar em boas mãos.</p>

                <a href="#contact" className='link-reservar btn-reservar btn'>Reservar agora</a>

            </div>
        </section>
    )
}