import { LinePosition } from './types';
import styles from './VerticalLine.module.scss';

export function getLineClassName(position?: LinePosition) {
  switch (position) {
    case LinePosition.Bottom: {
      return styles.VerticalLineBottom;
    }

    case LinePosition.Top: {
      return styles.VerticalLineTop;
    }

    default: {
      return styles.VerticalLine;
    }
  }
}
