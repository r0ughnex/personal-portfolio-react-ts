import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './Container.module.scss';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames(styles.Container, className)}>{children}</div>
  );
}

export default Container;
