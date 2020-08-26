import React from 'react';

import { ListItem } from '../ListItem/ListItem';
import { videoModel } from '../../../constants/models';
import { LoggedInLayout } from '../LoggedInLayout/LoggedInLayout';
import { Loader } from '../../common/Loader/Loader';

import style from './List.module.scss';


export const List = ({ videos, title, onEndOfList, isFetching }) => (
  <LoggedInLayout onEndOfList={ onEndOfList } >
    <article>
      <h2 className={ style.title }>
        {title}
      </h2>
      <ul className={ style.list }>
        {
          videos.map(
            video => (<ListItem key={ video[videoModel.ID] } { ...video } />
            )
            )
        }
      </ul>
      {isFetching && <Loader />}
    </article>
  </LoggedInLayout>
);
