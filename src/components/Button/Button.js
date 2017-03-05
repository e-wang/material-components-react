import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = ({
  dense,
  raised,
  compact,
  primary,
  accent,
  className,
  children,
  ...props
}) => (
  <button
    className={classNames('mdc-button', {
      'mdc-button--dense': dense,
      'mdc-button--raised': raised,
      'mdc-button--compact': compact,
      'mdc-button--primary': primary,
      'mdc-button--accent': accent,
    }, className)}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  dense: PropTypes.bool,
  raised: PropTypes.bool,
  compact: PropTypes.bool,
  primary: PropTypes.bool,
  accent: PropTypes.bool,
};

export default Button;

