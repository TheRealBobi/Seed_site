import React from 'react';

import Title2 from './title2';

const backUrl = require('../assets/vision.jpg');
const iconSolidarity = require('../assets/icons/icon-solidarity.png');
const iconEquity = require('../assets/icons/icon-equal.png');
const iconEmpowerment = require('../assets/icons/icon-empowerment.png');
const iconDevelopment = require('../assets/icons/icon-development.png');

/**
 * The 'vision' section of the landing page
 */
const Vision = () => (
  <div
    className="cover white bg-center pa4"
    style={{ backgroundImage: `url(${backUrl})` }}
  >
    <Title2 text="Notre Vision" color="white" />

    <div className="flex justify-around flex-wrap">
      <div className="tc mw5 bg-semi-transparent pa3 br4 mv2">
        <img src={iconSolidarity} alt="Icon solidarity" className="w-80" />
        <p className="f4"><span className="orange">S</span>olidarity</p>
        <p>Agir main dans la main avec des acteurs locaux dans une logique
        de collaboration et d’engagement d’égal à égal.</p>
      </div>

      <div className="tc mw5 bg-semi-transparent pa3 br4 mv2">
        <img src={iconEquity} alt="Icon equity" className="w-80" />
        <p className="f4"><span className="orange">E</span>quity</p>
        <p>Reconnaître, revendiquer et promouvoir les droits inhérents à
        tout être humain.</p>
      </div>

      <div className="tc mw5 bg-semi-transparent pa3 br4 mv2">
        <img src={iconEmpowerment} alt="Icon empowerment" className="w-80" />
        <p className="f4"><span className="orange">E</span>mpowerment</p>
        <p>Donner à ceux qui en ont besoin les moyens d’améliorer leur cadre de vie.</p>
      </div>

      <div className="tc mw5 bg-semi-transparent pa3 br4 mv2">
        <img src={iconDevelopment} alt="Icon development" className="w-80" />
        <p className="f4"><span className="orange">D</span>evelopment</p>
        <p>Mettre au point des projets de qualité, ayant de réelles répercussions
        pour les populations ciblées sur le long terme.</p>
      </div>
    </div>
  </div>
);

export default Vision;
