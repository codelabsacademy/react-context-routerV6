import React, { useContext, useEffect } from "react";
import { WishContext } from "../context/WishContext";

export default function Nav() {
  //consume the WishContext
  const [wishes, setWishes] = useContext(WishContext);

  console.log('Nav: Render')

  return (
    <nav>
      <div>Bucket List</div>
      <div>{wishes.length} wishes</div>
    </nav>
  );
}
