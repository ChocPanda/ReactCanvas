import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const OverlaidImage = ({ image }) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  return (
    <div>
      <canvas ref={canvasRef} width={image.width} height={image.height} />
      <img
        ref={imageRef}
        src={image.source}
        alt={`${image.meta.alt} by ${image.meta.photographer}`}
        className="hidden"
      />
    </div>
  );
};

OverlaidImage.propTypes = {
  image: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired,
    meta: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      photographer: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default OverlaidImage;
