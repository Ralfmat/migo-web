import React from 'react';
import "./Team.css"
import emotka from "../images/emotka.jpg"
const Team = () => (
  <section>
    <h2>Our Team</h2>
    
    <div className="team-members">
      <div className="team-member">
        <img src={emotka} alt="Paweł Marciniak" />
        <h3>Paweł Marciniak</h3>
      </div>

      <div className="team-member">
        <img src={emotka} alt="Krzysztof Orłowski" />
        <h3>Krzysztof Orłowski</h3>
      </div>

      <div className="team-member">
        <img src={emotka} alt="aciej Świtalski" />
        <h3>Maciej Świtalski</h3>
      </div>

      <div className="team-member">
        <img src={emotka} alt="Miłosz Jacoszek" />
        <h3>Miłosz Jacoszek</h3>
      </div>

      <div className="team-member">
        <img src={emotka} alt="Mateusz Wanda" />
        <h3>Mateusz Wanda</h3>
      </div>
    </div>
  </section>
);

export default Team;