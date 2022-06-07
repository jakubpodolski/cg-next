import React, { FC } from 'react'

interface StarshipProps {
  name: string,
  model: string,
  manufacturer: string,
  cost: string;
  length: string;
  maxSpeed: string;
  cargoCapacity: string;
}

const Starship: FC<StarshipProps> = (props) => {
  const {
    name,
    model,
    manufacturer,
    cost,
    length,
    maxSpeed,
    cargoCapacity,
  } = props;

  return (
    <div>
      name: {name},
      model: {model},
      manufacturer: {manufacturer},
      cost: {cost},
      length: {length},
      maxSpeed: {maxSpeed},
      cargoCapacity: {cargoCapacity},
    </div>
  )
};
