import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSchool, faLandmark } from '@fortawesome/free-solid-svg-icons';


import './BusinessPlan.css';

const BusinessPlan = () => {
  return (
    <section className='business-plan'>
      <h1>Biznesplan</h1>
      <div className='market-analysis'>
        <div className='customers'>
          <h4>
          Nasza aplikacja jest skierowana do szerokiego grona odbiorców
          </h4>
          <div className='customer-1'>
            <FontAwesomeIcon icon={faUser} fontSize={'50'}/>{' '}
            <strong>Osoby indywidualne</strong> które chcą nauczyć się języka migowego, aby porozumiewać się z osobami niesłyszącymi.
          </div>
          <div className='customer-2'>
            <FontAwesomeIcon icon={faSchool} fontSize={'50'} />{' '}
            <strong>Szkoły i instytucje edukacyjne</strong> które prowadzą zajęcia dla osób niesłyszących i głuchoniemych.
          </div>
          <div className='customer-3'>
            <FontAwesomeIcon icon={faLandmark} fontSize={'50'}/>{' '}
            <strong>Programy rządowe</strong> wspierające edukację i integrację osób z niepełnosprawnościami słuchu.
          </div>
        </div>
      </div>

      <div className='business-model'>
        <h3>Model Biznesowy</h3>
        <p>
          Nasza strategia biznesowa opiera się na:
          <ul>
            <li>
              <strong>Darmowym dostępie do podstawowych lekcji</strong>, co pozwoli
              zbudować szeroką bazę użytkowników.
            </li>
            <li>
              <strong>Płatnych lekcjach zaawansowanych</strong>, które będą dostępne w
              formie subskrypcji lub jednorazowych zakupów.
            </li>
            <li>
              <strong>Współpracy z instytucjami edukacyjnymi oraz rządowymi</strong>, które
              mogą wdrożyć aplikację do swoich programów nauczania.
            </li>
          </ul>
        </p>
      </div>

      <div className='development'>
        <h3>Możliwości Rozwoju</h3>
        <p>
          W przyszłości planujemy:
          <ul>
            <li>
              Tworzenie <strong>lokalnych wersji aplikacji</strong> dla różnych języków
              migowych, takich jak PJM (Polski Język Migowy), ASL (American Sign Language)
              czy BSL (British Sign Language).
            </li>
            <li>
              Współpracę z <strong>organizacjami pozarządowymi</strong> i edukatorami, aby
              promować naukę języka migowego.
            </li>
            <li>
              Rozbudowę aplikacji o <strong>elementy grywalizacji</strong>, które jeszcze
              bardziej zaangażują użytkowników.
            </li>
            <li>
              Stałe doskonalenie algorytmów AI, aby zapewnić jeszcze większą precyzję i
              lepsze wrażenia z nauki.
            </li>
          </ul>
        </p>
      </div>

      <div className='summary'>
        <h3>Podsumowanie</h3>
        <p>
          Naszym celem jest nie tylko nauczanie języka migowego, ale również wspieranie
          integracji społecznej osób niesłyszących i głuchoniemych. Wierzymy, że nasza
          aplikacja może stać się kluczowym narzędziem edukacyjnym zarówno dla
          indywidualnych użytkowników, jak i dla szkół czy instytucji rządowych.
        </p>
      </div>
    </section>
  );
};

export default BusinessPlan;
