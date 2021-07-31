import styles from './Section.module.scss';
import { SectionType, TitleType } from './types';

export function getSectionClassName(type?: SectionType) {
  switch (type) {
    case SectionType.Light: {
      return styles.SectionLight;
    }

    case SectionType.Medm: {
      return styles.SectionMedm;
    }

    case SectionType.Dark: {
      return styles.SectionDark;
    }

    default: {
      return styles.SectionTrans;
    }
  }
}

export function getTitleClassName(type?: TitleType) {
  switch (type) {
    case TitleType.Secondary: {
      return styles.SectionTitleSecondary;
    }

    case TitleType.Primary: {
      return styles.SectionTitlePrimary;
    }

    default: {
      return styles.SectionTitleDefault;
    }
  }
}
