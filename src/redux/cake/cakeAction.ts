import { BUY_CAKE } from './cakeTypes';

export type PayloadProps = {
  number: string,
}

export const buyCake = (number: string) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}