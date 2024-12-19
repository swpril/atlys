import { DATA } from './data';

export const fetchConfig = () => {
  return new Promise((resolve, reject) => {
    resolve({ data: DATA });
  });
};
