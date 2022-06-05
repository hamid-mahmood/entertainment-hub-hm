import { Badge } from '@mui/material';
import React from 'react';
import {img_300, unavailable} from '../../config/config.js';
import ContentModal from '../ContentModal/ContentModal.js';
import './SingleContent.css';

function SingleContent({ id, poster, title, date, media_type, vote_average}) {
  return (
    <ContentModal media_type={media_type} id={id}>
        <Badge color={vote_average > 6 ? "primary" : "secondary"} badgeContent={vote_average} />
        <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
        <b className='title'>{title}</b>
        <span className='subTitle'>
            {media_type ==='tv' ? 'TV Series' : "Series"}
            <span className='subTitle'>{date}</span>
        </span> 
    </ContentModal>
  )
}

export default SingleContent