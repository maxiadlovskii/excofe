import React from 'react';
import classnames from 'classnames';

import { useIsMobile } from '../../../hooks';

import style from './LoggedInLayout.module.scss';

export const LoggedInLayout = ({ children, onEndOfList }) => {
  const { isMobile } = useIsMobile();
  const onScrollList = event => {
    const scrollBottom = Math.abs(event.target.scrollTop + event.target.offsetHeight - event.target.scrollHeight) < 10;
    if (scrollBottom) {
      onEndOfList ? onEndOfList() : console.log('END OF LIST') //API method
    }
  };

  return (
    <div className={ style.wrapper } onScroll={ onScrollList }>
      <header className={ style.header }>
        <div className={ style.iconBlock }>
          <span className={ classnames(style.icon, style.downIcon) } />
          <span className={ classnames(style.icon, style.playIcon) } />
          <span className={ classnames(style.icon, style.menuIcon) } />
          <span className={ classnames(style.icon, style.stopIcon) } />
        </div>
        {
          isMobile
            ? <span className={ classnames(style.icon, style.menuIcon) } />
            : (
              <div className={ style.navBlock }>
                <nav className={ style.nav }>
                  <a className={ style.navItem } href="/">Explore</a>
                  <a className={ style.navItem } href="/">Subscriptions</a>
                  <a className={ style.navItem } href="/">Channels</a>
                </nav>
                <a className={ style.avatar } href="/">
                  <img
                    srcSet="/assets/avatar-pic@1x.png 1x, /assets/avatar-pic@2x.png 2x"
                    alt="avatar"
                  />
                </a>
              </div>
            )
        }
      </header>
      <main className={ style.content } >
        { children }
      </main>
    </div>
  );
};
