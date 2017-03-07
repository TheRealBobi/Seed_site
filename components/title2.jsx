import React from 'react';

/**
 * A title of type H2 that can be used anywhere
 */
const Title2 = props => (
  <h2 className={`tc f2 f1-m f1-l mb4 mt2 fw4 ${props.color}`}>{props.text}</h2>
);
Title2.propTypes = {
  text: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
};

export default Title2;
