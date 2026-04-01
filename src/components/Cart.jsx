import { useContext } from 'react';
// use vs useContext -> use is a new React hook (React 19) that allows you to consume context values without having to wrap your component in a Context.Consumer. It provides a more concise and readable way to access context values directly within your component's logic. You can use the hook in conditional rendering where useContext would not work because it must be called at the top level of a component, not inside loops, conditions, or nested functions. The use hook allows you to access context values in a more flexible way, making it easier to manage and utilize context in your React applications.

import { CartContext } from '../store/shopping-cart-context';

export default function Cart() {
  const { items, updateItemQuantity } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id='cart'>
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id='cart-items'>
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className='cart-item-actions'>
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id='cart-total-price'>
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
