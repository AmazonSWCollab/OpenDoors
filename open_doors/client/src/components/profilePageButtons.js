import galleryIcon from '../assets/symbols/photo-gallery.png';

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
      <button id="photo-viewer-button">
        <div style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>
          {props.image}
          <span>{props.text}</span>
        </div>
      </button>
    </a>
  );
}

PhotoViewerButton.defaultProps = {
  text: 'View Photo',
  link: 'https://www.fullerton.edu/',
  image: <img href="" alt="view-photos" src={galleryIcon}
            style={{
              width: '35px',
              height: '35px',
              zIndex: '3'
            }}/>
};
