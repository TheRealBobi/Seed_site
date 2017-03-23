import React from 'react';

import Navbar from './navbar';
import Vision from './vision';
import Skills from './skills';
import Partners from './partners';
import JoinUs from './joinus';
import Title2 from './title2';

const titleBackUrl = require('../assets/title.jpg');
const logoSeed = require('../assets/logo-seed.png');

/**
 * Display the landing page of the website
 */
const Landing = () => (
  <div>
    <Navbar />

    {/* ---------- TITLE SECTION ---------- */}
    <div
      className="cover white bg-center tc vh-50 flex flex-column justify-center"
      style={{ backgroundImage: `url(${titleBackUrl})` }}
    >
      <h1 className="f-headline orange ma0 mb5">S.E.E.D.</h1>
      <div>
        <span className="ma4 f3"><span className="orange">S</span>olidarity</span>
        <span className="ma4 f3"><span className="orange">E</span>quity</span>
        <span className="ma4 f3"><span className="orange">E</span>mpowerment</span>
        <span className="ma4 f3"><span className="orange">D</span>evelopment</span>
      </div>
    </div>

    {/* ---------- PRESENTATION SECTION ---------- */}
    <div className="flex justify-center mv4">
      <img src={logoSeed} alt="Logo Seed" className="w5 h5 mh4" />

      <div>
        <p className="measure">
          En mars 2015, une organisation non gouvernementale de solidarité internationale
          voyait le jour à Lille, en Région Nord-Pas de Calais-Picardie, prenant pour nom
          S.E.E.D. (Solidarity, Equity, Empowerment and Development).
        </p>

        <p className="measure">
          Créée par un groupe de jeunes professionnels ayant la volonté de se mobiliser
          et d’agir ensemble autour de valeurs fortes, S.E.E.D se destine à l’amélioration
          du cadre de vie des populations vulnérables, à travers des projets aux objectifs
          pertinents, aux résultats qualitatifs et sur le long terme.
        </p>
      </div>
    </div>

    {/* ---------- VISION SECTION ---------- */}
    <Vision />

    {/* ---------- SKILLS SECTION ---------- */}
    <Skills />

    {/* ---------- ACTUALITE SECTION ---------- */}
    {/* TODO: PULL LAST ARTICLES FROM WORDPRESS BLOG */}

    {/* ---------- PARTENAIRES SECTION ---------- */}
    <Partners />

    {/* ---------- NOUS REJOINDRE SECTION ---------- */}
    <JoinUs />

    {/* ---------- CONTACT SECTION ---------- */}
    <div className="white bg-orange pa4">
      <Title2 text="Contact" color="white" />

      <div className="flex flex-wrap justify-around w-90-m w-70-l" style={{ margin: 'auto' }}>
        <div className="mh2">
          <h3>Adresse postale</h3>
          <p>Association S.E.E.D.<br />
          2 rue de Roubaix<br />
          59800 Lille</p>
        </div>

        <div className="mh2">
          <h3>Adresse email</h3>
          <a href="mailto:contact@ongseed.fr" target="_top" className="white">
            contact@ongseed.fr
          </a>
        </div>

        <div className="mh2 mv4">
          <a
            href="https://www.facebook.com/SEEDSolidarityEquityEmpowementDevelopment"
            className="white"
          >
            <i className="fa fa-facebook-square fa-5x mh1 grow" />
          </a>
          <a href="https://twitter.com/seed_ong" className="white">
            <i className="fa fa-twitter-square fa-5x mh1 grow" />
          </a>
          <a href="https://plus.google.com/116023377989811733905" className="white">
            <i className="fa fa-google-plus-square fa-5x mh1 grow" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
