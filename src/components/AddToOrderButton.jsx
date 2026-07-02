import { useCart } from "../context/CartContext";
import styles from "./AddToOrderButton.module.css";

/**
 * Drop this next to each menu item's price.
 *
 * Usage inside MenuItem.jsx (adjust field names to match your real item shape):
 *
 *   <AddToOrderButton
 *     item={{
 *       id: item.id,               // must be unique per item
 *       nameEn: item.name.en,
 *       price: item.price,         // use the base/regular price if item has price/price2
 *     }}
 *   />
 */
export default function AddToOrderButton({ item }) {
  const { cart, addItem, decrementItem } = useCart();
  const qty = cart[item.id]?.qty || 0;

  if (qty === 0) {
    return (
      <button className={styles.addBtn} onClick={() => addItem(item)}>
        + Add
      </button>
    );
  }

  return (
    <div className={styles.stepper}>
      <button onClick={() => decrementItem(item.id)}>−</button>
      <span>{qty}</span>
      <button onClick={() => addItem(item)}>+</button>
    </div>
  );
}
