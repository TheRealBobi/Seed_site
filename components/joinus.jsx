import React from 'react';

import Title2 from './title2';
import Button from './button';

const backUrl = require('../assets/joinus.jpg');
const iconPiggy = require('../assets/icons/icon-piggy.png');

/**
 * The 'join us' section of the landing page
 */
const JoinUs = () => (
  <div
    className="pa1 pa4-m pa4-l cover white bg-center"
    style={{ backgroundImage: `url(${backUrl})` }}
  >
    <Title2 text="Nous rejoindre" color="white" />

    <div className="cf ph2-ns">
      <div className="fl w-100 w-40-m w-40-l pa2">
        <div>
          <div className="bg-semi-transparent pa3 br4">
            <h3 className="tc">Accéder à la newsletter</h3>
            <p>Et rester informé des dernières actualités de S.E.E.D.</p>
            <div className="tc">
              <Button text="Newsletter" />
            </div>
          </div>

          <div className="bg-semi-transparent pa4 mt3 tc br4">
            <Button text="Faire un don" />
          </div>
        </div>
      </div>

      <div className="fl w-100 w-60-m w-60-l pa2">
        <div className="bg-semi-transparent br4 pa3">
          <h3 className="tc">Rejoindre S.E.E.D.</h3>
          <p>Si la vision, les valeurs et les projets de S.E.E.D. vous intéressent,
          joignez vous à nous pour cette aventure en suivant le lien ci dessous !</p>

          <div className="tc ma4">
            <Button text="Nous rejoindre" />
          </div>

          <img src={iconPiggy} alt="Icon piggy" className="fl mw3 ml3 mr3" />

          <p>Tarif adhésion personnes en activité : 15€</p>

          <p>Tarif adhésion étudiants, demandeurs d’emplois : 10€</p>
        </div>
      </div>
    </div>
  </div>
);

export default JoinUs;
