import React, { FC } from 'react';
import Link from 'next/link';

import styles from './StarshipCard.module.css'

interface StarshipCardProps {
  name: string;
  model: string;
  id: string;
}

export const StarshipCard: FC<StarshipCardProps> = (props) => {
  const { name, model, id } = props;
  
  return (
    <div className={styles.starshipCard}>
      <h2>
        <Link href={`/starships/${id}`}>
          {name}
        </Link>
      </h2>
      {model}
    </div>
  )
};
