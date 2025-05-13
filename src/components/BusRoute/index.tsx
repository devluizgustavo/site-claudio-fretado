import './style.css';

import iconMap from '../../assets/BusRoute/icon-map.png';
import itinerario from '../../assets/BusRoute/itinerário-frontal.png';

export default function BusRoute() {
    return (
        <section className="bus-route-container" id='bus-route'>
            <img src={iconMap} height={75} />
            <h1>Itinerário</h1>

            <p>O fretado Cláudio Fretado realiza o trajeto completo entre a <b>Zona Leste</b> e o <b>Centro</b> de São Paulo. A rota de ida parte do Terminal Cidade Tiradentes até a região do Brás, passando por avenidas principais como Aricanduva e Celso Garcia. Na volta, o caminho se inicia na Estação da Luz e retorna ao terminal, atendendo pontos estratégicos como Rua Cantareira, Avenida dos Estados e Rua Bresser.</p>

            <div className='container-map'>
                <div>
                    <img alt="demonstrativo-itinerário" src={itinerario} className='img-itinerario'/>
                </div>
            </div>
        </section>
    )
}