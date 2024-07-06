// import { createContext, useContext, useState } from "react";

// const ShoppingCartContext = createContext({});

// const ShoppingCartProvider = ({ children }) => { 
//   const [cartItems, setCartItems] = useState([]);

//   const getitemquantity = (id) => {
//     return cartItems.find((item) => item.id === id)?.quantity || 0;
//   };

//   const increasecartquantity = (id) => {
//     setCartItems((currentitem) => {
//       if (currentitem.find((item) => item.id === id) == null) {
//         return [...currentitem, { id, quantity: 1 }];
//       } else {
//         return currentitem.map((item) => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity + 1 };
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   };

//   const decreasecartquantity = (id) => {
//     setCartItems((currentitem) => {
//       if (currentitem.find((item) => item.id === id)?.quantity === 1) {
//         return currentitem.filter((item) => item.id !== id);
//       } else {
//         return currentitem.map((item) => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity - 1 };
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   };

//   const removeitem = (id) => {
//     setCartItems((currentitem) => currentitem.filter((item) => item.id !== id));
//   };

//   return (
//     <ShoppingCartContext.Provider
//       value={{
//         cartItems,
//         getitemquantity,
//         increasecartquantity,
//         decreasecartquantity,
//         removeitem,
//       }}
//     >
//       {children}
//     </ShoppingCartContext.Provider>
//   );
// };

// export default ShoppingCartProvider;

// export const useShoppingCart = () => {
//   return useContext(ShoppingCartContext);
// };


import {  createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ( {children} ) => {
  const [cartItems, setCartItems] = useState([]);
  const getitemquantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increasecartquantity = (id) => {
    setCartItems((currentitem) => {
      if (currentitem.find((item) => item.id === id) == null) {
        return [...currentitem, { id, quantity: 1 }];
      } else {
        return  currentitem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreasecartquantity = (id) => {
    setCartItems((currentitem) => {
      if (currentitem.find((item) => item.id === id) == null) {
        return currentitem.filter((item) => item.id !== id);
      } else {
        return currentitem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeitem = (id) => {
    setCartItems((currentitem) => currentitem.filter((item) => item.id !== id));
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getitemquantity,
        increasecartquantity,
        decreasecartquantity,
        removeitem,
      }}
    >
      { children }
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};