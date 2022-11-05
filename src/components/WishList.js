import React, { useContext, useState } from "react";
import { WishContext } from "../context/WishContext";
import Wish from "./Wish";

export default function WishList() {
  //consume the WishContext
  const [wishes, setWishes] = useContext(WishContext);

  console.log('WishList: Render')

  return (
    <>
      {wishes.map((wish) => {
        return <Wish key={wish.id} title={wish.title} id={wish.id} />;
      })}
    </>
  );
}
