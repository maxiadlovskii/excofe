import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import { videoModel } from '../../../constants/models';
import { links } from '../../../constants/routerLinks';
import { getBillions } from '../../../utils';
import { sourceIconUrl } from '../../../constants';
import { Failed } from '../../common/Failed/Failed';

import style from './ListItem.module.scss';

export const ListItem = ({
  [videoModel.TITLE]: title,
  [videoModel.DATE]: date,
  [videoModel.VIDEO_ID]: id,
  [videoModel.LENGTH]: length,
  [videoModel.VIEWS]: views,
  [videoModel.SOURCE]: source,
  [videoModel.COVER]: cover
}) => (
  (title && date && length && views && source && cover)
    ? (
      <NavLink
        className={ style.wrapper }
        to={ `${links.VIDEO}/${id}?${videoModel.TITLE}=${title}&${videoModel.SOURCE}=${source}` }
      >
        <div className={ style.video }>
          <img className={ style.videoCover } src={ cover } alt="video-cover" />
          <img className={ style.playButton } src="/assets/play-button.png" alt="video-play" />
        </div>
        <div className={ style.infoBlock }>
          <div>
            <h4 className={ style.title }>{title}</h4>
            <p>
              <span>{moment(date).format('ll')}</span>
              <span> · </span>
              <span>{getBillions(views)}</span>
            </p>
          </div>
          <p className={ style.sourceBlock }>
            {sourceIconUrl[source] ? <img src={ sourceIconUrl[source] } alt="sourceIcon" /> : <span />}
            <b>{`${moment(length, 'SS').format('MM:SS')}m`}</b>
          </p>
        </div>
      </NavLink>
    )
    : (
      <div className={ style.wrapper }>
        <Failed />
      </div>
    )
);
