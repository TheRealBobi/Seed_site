import React from 'react';

import Title2 from './title2';
import Partner from './partner';

const logoOtromodo = require('../assets/partners/logo-otromodo.png');
const logoCadeauTerre = require('../assets/partners/logo-cadeau-terre.png');
const logoIdeesCaen = require('../assets/partners/logo-idees-caen.png');
const logoTacloban = require('../assets/partners/logo-tacloban.png');
const logoAbbePierre = require('../assets/partners/logo-abbe-pierre.png');
const logoUp = require('../assets/partners/logo-up.png');
const logoCapSolidarite = require('../assets/partners/logo-cap-solidarite.png');
const logoClap = require('../assets/partners/logo-clap.png');
const logoMaisonAssociation = require('../assets/partners/logo-maison-association.png');

/**
 * Display the list of all seed partners
 */
const Partners = () => (
  <div className="ph1 pv4 ph5-m mv3-m ph5-l mv3-l tc">
    <Title2 text="Partenaires" color="black" />

    <Partner
      imgSrc={logoOtromodo}
      imgAlt="Logo Otromodo"
      linkUrl="http://www.ongseed.org/otromodo"
    />
    <Partner
      imgSrc={logoCadeauTerre}
      imgAlt="Logo Un Cadeau Pour La Terre"
      linkUrl="http://uncadeaupourlaterre.org"
    />
    <Partner
      imgSrc={logoIdeesCaen}
      imgAlt="Logo Idées Caen"
      linkUrl="http://www.unicaen.fr/recherche/mrsh/idees-caen"
    />
    <Partner
      imgSrc={logoTacloban}
      imgAlt="Logo city of Tacloban"
      linkUrl="http://tacloban.gov.ph"
    />
    <Partner
      imgSrc={logoAbbePierre}
      imgAlt="Logo fondation Abbé Pierre"
      linkUrl="http://www.fondation-abbe-pierre.fr"
    />
    <Partner
      imgSrc={logoUp}
      imgAlt="Logo Up"
      linkUrl="http://www.upalbatre.org/"
    />
    <Partner
      imgSrc={logoCapSolidarite}
      imgAlt="Logo CAP solidarité"
      linkUrl="http://www.capsolidarites.asso.fr"
    />
    <Partner
      imgSrc={logoClap}
      imgAlt="Logo CLAP"
      linkUrl="http://mde-lille.fr/-developpement-de-projets-"
    />
    <Partner
      imgSrc={logoMaisonAssociation}
      imgAlt="Logo Maison des Associations"
      linkUrl="https://www.facebook.com/mdalille"
    />
  </div>
);

export default Partners;
