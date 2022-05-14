import React from "react";
import { useAppReducer } from "../AppContext";
import styles from "./Item.module.scss";

// Individual todo item
function Item({ item }) {
  const dispatch = useAppReducer();
  let text = item.text;
  let paused = item.status === "paused";
  let completed = item.status === "completed";

  function deleteItem() {
    dispatch({ type: "DELETE_ITEM", item });
  }

  function pauseItem() {
    const pausedItem = { ...item, status: "paused" };
    dispatch({ type: "UPDATE_ITEM", item: pausedItem });
  }

  function resumeItem() {
    const pendingItem = { ...item, status: "pending" };
    dispatch({ type: "UPDATE_ITEM", item: pendingItem });
  }

  function completeItem() {
    const completedItem = { ...item, status: "completed" };
    dispatch({ type: "UPDATE_ITEM", item: completedItem });
  }

  return (
    <div data-testid='todo' className={styles.item} tabIndex="0">
      <div style={{ width:50 }}> ⚒️ </div>
      <div className={styles.itemName}>{text}</div>
      <div
        className={`${styles.buttons} ${completed ? styles.completedButtons : ""}`}
      >
        <button data-testid='delete-button' className={styles.delete} onClick={deleteItem} tabIndex="0"></button>
        {!paused && !completed && (
          <button data-testid='pause-button' className={styles.pause} onClick={pauseItem} tabIndex="0"></button>
        )}
        {paused && !completed && (
          <button
            data-testid='resume-button'
            className={styles.resume}
            onClick={resumeItem}
            tabIndex="0"
          ></button>
        )}
        {!completed && (
          <button
            data-testid='complete-button'
            className={styles.complete}
            onClick={completeItem}
            tabIndex="0"
          ></button>
        )}
      </div>
    </div>
  );
}

export default Item;
