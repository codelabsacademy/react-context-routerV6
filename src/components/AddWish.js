import React, { useContext, useState } from "react";
import { WishContext } from "../context/WishContext";

export default function AddWish() {
  //consume the WishContext
  const [wishes, setWishes] = useContext(WishContext);

  const [title, setTitle] = useState("");
  console.log('AddWish: Render')

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const addWish = (e) => {
    e.preventDefault();

    let newWish = {
      title: title,
      id: wishes.length * Math.random() + 1,
    };

    setWishes((prevState) => [...prevState, newWish]);

    setTitle("");
  };
  return (
    <div className="add-wish">
      <form>
        <input
          type="text"
          placeholder="Add a new wish..."
          name="title"
          value={title}
          onChange={updateTitle}
        />
        <input type="submit" value="Add Wish" onClick={addWish} />
      </form>
    </div>
  );
}
