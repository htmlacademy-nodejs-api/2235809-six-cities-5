import { Cities } from '../types/index.js';

export const isCity = (value: string): value is Cities => Object.values(Cities).includes(value as Cities);

export const parseCity = (value: string): Cities => {
  if (!isCity(value)) {
    throw new Error('Bad city');
  }
  return value;
};
