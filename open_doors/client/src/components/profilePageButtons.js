import React from 'react';

export function MoreButton(props) {
  return (
    <a href={props.link}>
      <button id="more-button">{props.text}</button>
    </a>
  );
}

MoreButton.defaultProps = {
  text: 'More',
  link: 'https://cat-bounce.com/'
};

export function PhotoViewerButton(props) {
  return (
    <a href={props.link}>
      <button id="photo-viewer-button">{props.text}</button>
    </a>
  );
}

PhotoViewerButton.defaultProps = {
  text: 'View Photo',
  link: 'https://www.fullerton.edu/'
};
