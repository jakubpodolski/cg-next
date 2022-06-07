import React, { FC } from 'react'

import styles from '../../styles/Starship.module.css'

interface StarshipsProps {
  starships: {
    name: string;
    model: string;
    id: string;
  }[];
}

const Starships: FC<StarshipsProps> = (props) => {
  const { starships } = props;

  return (
    <div className={styles.grid}>
      {starships.map((starship, id) => <StarshipCard key={id} {...starship}/>)}
    </div>
  )
};
