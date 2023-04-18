import React from 'react';

function MoreButton(props) {
  return (
    <button id="more-button">{props.text}</button>
  );
}

MoreButton.defaultProps = {
  text: 'More',
};

export default MoreButton;
