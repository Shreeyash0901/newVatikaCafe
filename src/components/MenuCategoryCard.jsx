import { useInView } from "../hooks/useInView";
import MenuItem from "./MenuItem";
import styles from "../styles/MenuModule.module.css";

/**
 * One category card (e.g. "NOODLES") with all its items.
 * category: { icon, label, items: [{name, price}] }
 */
export default function MenuCategoryCard({ category }) {
  const [ref, visible] = useInView(0.08);

  return (
    <div ref={ref} className={`${styles.card} ${visible ? styles.visible : ""}`}>
      <span className={`${styles.cardCorner} ${styles.topLeft}`} />
      <span className={`${styles.cardCorner} ${styles.topRight}`} />
      <span className={`${styles.cardCorner} ${styles.bottomLeft}`} />
      <span className={`${styles.cardCorner} ${styles.bottomRight}`} />

      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderLeft}>
          <span className={styles.cardIcon}>{category.icon}</span>
          <h3 className={styles.cardTitle}>{category.label}</h3>
        </div>
        <span className={styles.cardCount}>{category.items.length} ITEMS</span>
      </div>

      <div className={styles.cardRule} />

      <div>
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
