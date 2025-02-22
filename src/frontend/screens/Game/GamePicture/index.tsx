import React from 'react'
import { CachedImage } from 'frontend/components/UI'

import './index.css'
import fallbackImage from 'frontend/assets/heroic_card.jpg'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  art_square: string
  store: string
}

function GamePicture({ art_square, store, className, ...props }: Props) {
  function getImageFormatting() {
    if (art_square === 'fallback' || !art_square)
      return { src: fallbackImage, fallback: fallbackImage }
    if (store === 'legendary') {
      return {
        src: `${art_square}?h=800&resize=1&w=600`,
        fallback: `${art_square}?h=400&resize=1&w=300`
      }
    } else {
      return { src: art_square, fallback: 'fallback' }
    }
  }

  const { src, fallback } = getImageFormatting()

  return (
    <div className="gamePicture">
      <CachedImage
        alt="cover-art"
        className={`gameImg ${className}`}
        src={src}
        fallback={fallback}
        {...props}
      />
    </div>
  )
}

export default GamePicture
