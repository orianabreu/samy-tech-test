import React from 'react';
import { useMediaQuery } from 'react-responsive';

import like from '../../assets/img/like.png';
import likeGrey from '../../assets/img/like-grey.png';
import repost from '../../assets/img/repost.png';
import repostGrey from '../../assets/img/repost-grey.png';

export default function Card({ price, image, title, author, likesCount }) {
    const isMobile = useMediaQuery({ query: '(max-width: 425px)'});

  return (
    <div className="card">
        <div className="card__triangle">
            <span className="card__price">{price}.00<span>€</span></span>
        </div>
        <img src={image} alt="product" className="card__image" />
        <div className="card__text-container">
            <h2 className="card__title">{title}</h2>
            <p className="card__description"><span>by</span> {author}</p>
        </div>
        <div className="card__icons-container">
            <div className="card__icon-wrapper">
                <img src={isMobile ? likeGrey : like} alt="like icon" className="card__icon" />
                <span className="card__likes-count">{likesCount >= 10 ? '0' : '00'}{likesCount}</span>
            </div>
            <div className="card__icon-wrapper">
                <img src={isMobile ? repostGrey : repost} alt="repost icon" className="card__icon" />
                <span className="card__reposts-count">000</span>
            </div>
        </div>
    </div>
  )
}
