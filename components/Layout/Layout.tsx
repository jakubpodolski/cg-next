import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

import styles from './Layout.module.css';

interface Path {
  url: string;
  label: string;
};

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  const paths: Path[] = [
    { url: '/', label: "Home" },
    { url: '/starships', label: "Starships" },
    // { url: '/planets', label: "Planets" },
    // { url: '/vehicles', label: "Vehicles" },
  ]

  const mapPathsToLinks = (path: Path, id: number) => (
    <li className={styles.layout__navigationListItem} key={id}>
      <Link href={path.url}>
        {path.label}
      </Link>
    </li>
  )

  return (
    <>
      <header className={styles.layout}>
        <div className={styles.layout__inner}>
          <nav className={styles.layout__navigation}>
            <ul className={styles.layout__navigationList}>
              {paths.map(mapPathsToLinks)}
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.layout__content}>
        {children}
      </main>
    </>
  )
};
