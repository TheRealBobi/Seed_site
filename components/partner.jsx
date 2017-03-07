import React from 'react';

/**
 * A clickable logo of a partner
 */
const Partner = props => (
  <a href={props.linkUrl}>
    <img
      src={props.imgSrc}
      alt={props.imgAlt}
      className="ba b--light-silver br3 pa2 ma2 mw3 mw4-m mw4-l grow"
    />
  </a>
);
Partner.propTypes = {
  imgSrc: React.PropTypes.string.isRequired,
  imgAlt: React.PropTypes.string.isRequired,
  linkUrl: React.PropTypes.string,
};
Partner.defaultProps = {
  linkUrl: '',
};

export default Partner;
