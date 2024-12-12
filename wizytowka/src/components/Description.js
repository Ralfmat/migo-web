import React from 'react';
import "./Description.css"

import screen1 from '../images/reka.PNG';
import screen2 from '../images/reka_a.png';
import screen3 from '../images/reka_ee.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faBookOpen, faCamera  } from '@fortawesome/free-solid-svg-icons';


const Description = () => (
  <section id="description" className='description'>
    <h2>O nas</h2>
    <div className='about-container'>
      <div className='about'>
        <div className='about-1'>Jesteśmy grupą studentów z pasją do technologii i chęcią tworzenia aplikacji, które mają realny wpływ na życie ludzi.</div>
        <div className='about-2'>Naszym celem jest uczynienie nauki języka migowego bardziej dostępną i przystępną.</div>
        <div className='about-3'>Dzięki naszemu projektowi, łączymy nowoczesne technologie, takie jak sztuczna inteligencja, z innowacyjnym podejściem do edukacji. Wierzymy, że nasze rozwiązanie pomoże w budowaniu mostów komunikacyjnych między osobami niesłyszącymi a słyszącymi.</div>
      </div>
      <h2>Jak to działa</h2>
      <div className='plan'>
        <div className='sub-plan'>
          <h3>Aplikacja mobilna</h3>
          <FontAwesomeIcon icon={faMobileAlt} fontSize={50}/> 
          <p>Ucz się języka migowego gdziekolwiek jesteś! Intuicyjny interfejs i dostępność w każdej chwili.</p>
        </div>
        <div className='sub-plan'>
          <h3>Tematyczne lekcje</h3>
          <FontAwesomeIcon icon={faBookOpen} fontSize={'50'}/>
          <p>Alfabet, zwroty, nazwy – wybierz temat, który Cię interesuje, i rozwijaj swoje umiejętności krok po kroku.</p>
        </div>
        <div className='sub-plan'>
          <h3>Wykorzystanie kamery</h3>
          <FontAwesomeIcon icon={faCamera} fontSize={'50'}/>
          <p>Pokaż znak do kamery i sprawdź, czy jest poprawny. Ucz się praktycznie i na bieżąco.</p>
        </div>
      </div>
      <h2>AI w akcji</h2>
      <div className='about'>
        <div className='about-1'>
          <p>Nasza sztuczna inteligencja analizuje gesty i daje natychmiastową informację zwrotną.</p>
        </div>
        <img src={screen1}></img>
        <div className='about-2'>
          <p>Stworzyliśmy model, który pokazuje jak wygląda dany gest.</p>
        </div>
        <div className='images'>
          <img src={screen2}></img>
          <img src={screen3}></img>
        </div>
      </div>
    </div>
      
  </section>
);

export default Description;