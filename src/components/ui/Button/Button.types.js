import PropTypes from 'prop-types';

export const iconShape = PropTypes.shape({
  iconPath: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['center', 'left', 'right']),
  color: PropTypes.string, // string: in css render like - color: {props.color};
  size: PropTypes.number // number: value in rem
});

export const buttonTypes = PropTypes.oneOf(['reset', 'submit', 'button', 'link']);
