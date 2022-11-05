import { createContext, useState } from "react";

export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [wishes, setWishes] = useState([
    {
      id: 1,
      title: "Wish 1",
    },
    {
      id: 2,
      title: "Wish 2",
    },
    {
      id: 3,
      title: "Wish 3",
    },
  ]);

  return (
    <WishContext.Provider value={[wishes, setWishes]}>
        {children}
    </WishContext.Provider>
  );
};
