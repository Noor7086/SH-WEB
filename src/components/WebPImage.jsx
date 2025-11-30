import React, { useState } from 'react';

/**
 * WebPImage Component - Automatically uses WebP with fallback
 * @param {string} webpSrc - WebP image source
 * @param {string} fallbackSrc - Fallback image source (original format)
 * @param {object} style - Image styles
 * @param {string} alt - Alt text
 * @param {string} loading - Loading attribute (lazy/eager)
 * @param {string} decoding - Decoding attribute (async/sync)
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {function} onClick - Click handler
 * @param {string} className - CSS class name
 */
const WebPImage = ({ 
  webpSrc, 
  fallbackSrc, 
  style = {}, 
  alt = '', 
  loading = 'lazy',
  decoding = 'async',
  width,
  height,
  onClick,
  className = '',
  ...props 
}) => {
  const [useFallback, setUseFallback] = useState(false);
  const [imageSrc, setImageSrc] = useState(webpSrc || fallbackSrc);

  const handleError = () => {
    // If WebP fails to load, use fallback
    if (!useFallback && fallbackSrc && imageSrc === webpSrc) {
      setUseFallback(true);
      setImageSrc(fallbackSrc);
    }
  };

  // Use WebP if available, otherwise use fallback
  const src = webpSrc && !useFallback ? webpSrc : (fallbackSrc || webpSrc);

  return (
    <picture>
      {webpSrc && !useFallback && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <source srcSet={fallbackSrc || webpSrc} type={fallbackSrc?.includes('.png') ? 'image/png' : fallbackSrc?.includes('.jpg') || fallbackSrc?.includes('.jpeg') ? 'image/jpeg' : 'image/webp'} />
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        width={width}
        height={height}
        style={style}
        className={className}
        onClick={onClick}
        onError={handleError}
        {...props}
      />
    </picture>
  );
};

export default WebPImage;

