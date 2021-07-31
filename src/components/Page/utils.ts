import classNames from 'classnames';

import styles from './Page.module.scss';
import { PageType } from './types';

export function getPageClassName(type?: PageType, hasScroll = true) {
  const className = classNames({ [styles.PageNoScroll]: !hasScroll });

  switch (type) {
    case PageType.Light: {
      return classNames(styles.PageLight, className);
    }

    case PageType.Medm: {
      return classNames(styles.PageMedm, className);
    }

    case PageType.Dark: {
      return classNames(styles.PageDark, className);
    }

    default: {
      return classNames(styles.PageTrans, className);
    }
  }
}
