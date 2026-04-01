import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCard: () => {},
  //   ^ empty funcion for better auto-completion.
});
