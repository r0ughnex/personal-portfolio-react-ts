import styles from './Section.module.scss';
import { SectionType } from './types';

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
