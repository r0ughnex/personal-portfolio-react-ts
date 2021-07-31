import styles from './Page.module.scss';
import { PageType } from './types';

export function getPageClassName(type?: PageType) {
  switch (type) {
    case PageType.Light: {
      return styles.PageLight;
    }

    case PageType.Medm: {
      return styles.PageMedm;
    }

    case PageType.Dark: {
      return styles.PageDark;
    }

    default: {
      return styles.PageTrans;
    }
  }
}

/* Only exists so as to be able extend it's implementation. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getContentClassName(type?: PageType) {
  return styles.PageContent;
}
