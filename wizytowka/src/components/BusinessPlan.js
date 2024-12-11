import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSchool, faLandmark } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen, faCoins, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faGlobe, faHandsHelping, faGamepad, faRobot } from '@fortawesome/free-solid-svg-icons';




import './BusinessPlan.css';

const BusinessPlan = () => {
  return (
    <section className='business-plan'>
      <h1>Biznesplan</h1>

      {/* Market Analysis Section */}
      <div className='section-content'>
        <h1>Nasza aplikacja jest skierowana do szerokiego grona odbiorców</h1>
        <div className='content-points'>
          <div className='content-item'>
            <FontAwesomeIcon icon={faUser} fontSize={'50'} />{' '}
            <strong>Osoby indywidualne</strong><br/> które chcą nauczyć się języka migowego, aby porozumiewać się z osobami niesłyszącymi.
          </div>
          <div className='content-item'>
            <FontAwesomeIcon icon={faSchool} fontSize={'50'} />{' '}
            <strong>Szkoły i instytucje edukacyjne</strong><br/> które prowadzą zajęcia dla osób niesłyszących i głuchoniemych.
          </div>
          <div className='content-item'>
            <FontAwesomeIcon icon={faLandmark} fontSize={'50'} />{' '}
            <strong>Programy rządowe</strong><br/> wspierające edukację i integrację osób z niepełnosprawnościami słuchu.
          </div>
        </div>
      </div>

      {/* Business Model Section */}
      <div className='section-content'>
        <h1>Model Biznesowy</h1>
        <div className='content-points'>
          <div className='content-item'>
              <FontAwesomeIcon icon={faBookOpen} fontSize={'30'} style={{ marginRight: '10px' }} />
              <strong>Darmowym dostępie do podstawowych lekcji</strong> co pozwoli zbudować szeroką bazę użytkowników.
          </div>
          <div className='content-item'>
              <FontAwesomeIcon icon={faCoins} fontSize={'30'} style={{ marginRight: '10px' }} />
              <strong>Płatnych lekcjach zaawansowanych</strong> które będą dostępne w formie subskrypcji lub jednorazowych zakupów.
          </div>
          <div className='content-item'>
              <FontAwesomeIcon icon={faHandshake} fontSize={'30'} style={{ marginRight: '10px' }} />
              <strong>Współpracy z instytucjami edukacyjnymi oraz rządowymi</strong> które mogą wdrożyć aplikację do swoich programów nauczania.
          </div>
        </div>
      </div>

      {/* Development Section */}
      <div className='section-content'>
        <h1>Możliwości Rozwoju</h1>
        <div className='content-points'>
          <div className='content-item'>
            <FontAwesomeIcon icon={faGlobe} fontSize={'30'} style={{ marginRight: '10px' }} />
            Tworzenie <strong>lokalnych wersji aplikacji</strong> dla różnych języków migowych, takich jak PJM (Polski Język Migowy), ASL (American Sign Language), czy BSL (British Sign Language).
          </div>
          <div className='content-item'>
            <FontAwesomeIcon icon={faHandsHelping} fontSize={'30'} style={{ marginRight: '10px' }} />
            Współpracę z <strong>organizacjami pozarządowymi</strong> i edukatorami, aby promować naukę języka migowego.
          </div>
          <div className='content-item'>
            <FontAwesomeIcon icon={faGamepad} fontSize={'30'} style={{ marginRight: '10px' }} />
            Rozbudowę aplikacji o <strong>elementy grywalizacji</strong> które jeszcze bardziej zaangażują użytkowników.
          </div>
          <div className='content-item'>
            <FontAwesomeIcon icon={faRobot} fontSize={'30'} style={{ marginRight: '10px' }} />
            Stałe doskonalenie <strong>algorytmów AI</strong> aby zapewnić jeszcze większą precyzję i lepsze wrażenia z nauki.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlan;
