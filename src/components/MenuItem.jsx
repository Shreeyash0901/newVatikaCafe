import styles from "../styles/MenuModule.module.css";

/**
 * Single menu row: name + price badge.
 * item: { name: string, price: string }
 */
export default function MenuItem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemLeft}>
        <div className={styles.itemDot} />
        <span className={styles.itemName}>{item.name}</span>
      </div>
      <span className={styles.itemPrice}>{item.price}</span>
    </div>
  );
}
