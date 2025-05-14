import './style.css';

import icon_praia from '../../assets/praia.png'

import img_onibus from '../../img/2.jpg';

export default function Tour() {
    return (
        <section className='tour' id='tour'>
            <div className="container">
                <img src={icon_praia} height={150} className='icon-praia'/>
                <h1>Passeios e Viagens</h1>

                <div className='text-container'>
                    <p>Além das rotas diárias, a JCP Locações também oferece serviços exclusivos para passeios e viagens particulares. Seja para excursões escolares, eventos corporativos, viagens ao interior ou até outros estados, tudo é planejado com atenção, segurança e conforto. <br/><br/>Cada trajeto é acertado diretamente conosco, com flexibilidade para atender as necessidades do grupo com experiência e cuidado em cada detalhe, essa modalidade é ideal para quem busca tranquilidade e praticidade ao organizar deslocamentos em grupo.</p>

                    <img src={img_onibus} height={300} className='bus_tour'/>
                </div>
            </div>
        </section>
    )
}