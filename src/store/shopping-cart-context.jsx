import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCard: () => {},
  updateItemQuantity: () => {},
  //   ^ empty funcion for better auto-completion.
});
