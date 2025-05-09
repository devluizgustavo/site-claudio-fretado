import './style.css';

import iconMap from '../../assets/BusRoute/icon-map.png';

export default function BusRoute() {
    return (
        <section className="bus-route-container">
            <img src={iconMap} height={50}/>
            <h1>Rotas</h1>

            <div className='container-map'>
                <img></img>
            </div>


        </section>
    )
}