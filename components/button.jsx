import React from 'react';

/**
 * A button with the default style
 */
const Button = props => (
  <button className={`bn br3 white bg-orange f6 ${props.padding}`}>{props.text}</button>
);
Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  padding: React.PropTypes.string,
};
Button.defaultProps = {
  padding: 'pa3',
};

export default Button;
