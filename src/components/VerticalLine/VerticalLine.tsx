import classNames from 'classnames';

import { LinePosition } from './types';
import { getLineClassName } from './utils';

export interface VerticalLineProps {
  position: LinePosition;
  className?: string;
}

function VerticalLine({ position, className }: VerticalLineProps) {
  return <div className={classNames(getLineClassName(position), className)} />;
}

export default VerticalLine;
