import styles from "../pages/Menu.module.css";
import AddToOrderButton from "./AddToOrderButton";

/**
 * <MenuCategoryCard />
 * Renders one menu category card with bilingual (English / Hindi)
 * title and item names. Expects `category` in the shape produced by
 * data/menuData.js, e.g.:
 *
 *  {
 *    icon: "🍜",
 *    label: { en: "NOODLES", hi: "नूडल्स" },
 *    items: [
 *      { name: { en: "Veg Noodles", hi: "वेज नूडल्स" }, price: "₹140" },
 *      ...
 *    ],
 *  }
 */

// price strings look like "₹140" or "₹100/₹120" — pull the first number out.
function parsePrice(priceStr) {
  const match = String(priceStr).match(/\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
}

function slugify(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function MenuCategoryCard({ category }) {
  if (!category) return null;
  const { icon, label, items } = category;

  return (
    <div className={`${styles.card} ${styles.visible}`}>
      <span className={`${styles.cardCorner} ${styles.topLeft}`} />
      <span className={`${styles.cardCorner} ${styles.topRight}`} />
      <span className={`${styles.cardCorner} ${styles.bottomLeft}`} />
      <span className={`${styles.cardCorner} ${styles.bottomRight}`} />

      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderLeft}>
          <span className={styles.cardIcon}>{icon}</span>
          <div>
            <h3 className={styles.cardTitle}>{label.en}</h3>
            <p className={styles.cardTitleHi}>{label.hi}</p>
          </div>
        </div>
        <span className={styles.cardCount}>{items.length} ITEMS</span>
      </div>
      <div className={styles.cardRule} />

      {items.map((item, idx) => {
        const cartItem = {
          id: slugify(item.name.en),
          nameEn: item.name.en,
          price: parsePrice(item.price),
        };

        return (
          <div className={styles.item} key={idx}>
            <div className={styles.itemLeft}>
              <span className={styles.itemDot} />
              <div>
                <span className={styles.itemName}>{item.name.en}</span>
                <p className={styles.itemNameHi}>{item.name.hi}</p>
              </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemPrice}>{item.price}</span>
              <AddToOrderButton item={cartItem} />
            </div>
          </div>
        );
      })}
    </div>
  );
}