import React from 'react';

import Title2 from './title2';

const iconEducation = require('../assets/icons/icon-education.png');
const iconGestion = require('../assets/icons/icon-gestion.png');
const iconUrbanisme = require('../assets/icons/icon-urbanisme.png');
const iconJuridique = require('../assets/icons/icon-juridique.png');
const iconInnovation = require('../assets/icons/icon-innovation.png');
const iconSociology = require('../assets/icons/icon-sociology.png');

/**
 * The 'skills' section of the landing page
 */
const Skills = () => (
  <div className="bg-blue pv4 white">
    <Title2 text="Compétences" color="white" />

    <div className="flex flex-wrap justify-around">
      <div className="flex mv1 w-90 w-40-m w-30-l">
        <img src={iconEducation} alt="Icon education" className="w3 h3 mh4" />
        <div>
          <p className="mt0">Éducation / formation :</p>
          <ul>
            <li>développpement personnel</li>
            <li>sensibilisation du public</li>
          </ul>
        </div>
      </div>

      <div className="flex mv1 w-90 w-40-m w-30-l">
        <img src={iconGestion} alt="Icon gestion" className="w3 h3 mh4" />
        <div>
          <p className="mt0">Gestion :</p>
          <ul>
            <li>gestion financière</li>
            <li>gestion de projets</li>
          </ul>
        </div>
      </div>

      <div className="flex mv1 w-90 w-40-m w-30-l">
        <img src={iconUrbanisme} alt="Icon urbanisme" className="w3 h3 mh4" />
        <div>
          <p className="mt0">Urbanisme :</p>
          <ul>
            <li>planification urbaine</li>
            <li>génie civil</li>
            <li>gestion des risques</li>
          </ul>
        </div>
      </div>

      <div className="flex mv1 w-90 w-40-m w-30-l">
        <img src={iconJuridique} alt="Icon juridique" className="w3 h3 mh4" />
        <div>
          <p className="mt0">Sciences juridiques :</p>
          <ul>
            <li>droits de l&#39;Homme</li>
            <li>coopération internationale</li>
            <li>marchés publics</li>
          </ul>
        </div>
      </div>

      <div className="flex mv1 w-90 w-40-m w-30-l">
        <img src={iconInnovation} alt="Icon innovation" className="w3 h3 mh4" />
        <div>
          <p className="mt0">Innovation :</p>
          <ul>
            <li>nouvelles technologies</li>
            <li>informatique</li>
          </ul>
        </div>
      </div>

      <div className="flex mv1 w-90 w-40-m w-30-l">
        <img src={iconSociology} alt="Icon sociology" className="w3 h3 mh4" />
        <div>
          <p className="mt0">Sociologie :</p>
          <ul>
            <li>sociologie urbaine</li>
            <li>enquêtes participatives</li>
            <li>mobilisation citoyenne</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
