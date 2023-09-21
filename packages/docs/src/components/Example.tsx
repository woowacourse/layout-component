import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import styles from './Example.module.css';

type ExampleProps = ComponentPropsWithoutRef<'div'>;

const Example = (props: ExampleProps) => {
  return <div className={styles.root} {...props} />
}

export default Example;
