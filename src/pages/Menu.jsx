import { useState } from "react";
import { menuData, menuTabs, allCategoryKeys } from "../data/menuData";
import MenuCategoryCard from "../components/MenuCategoryCard";
import GoldDivider from "../components/GoldDivider";
import styles from "../pages/Menu.module.css";

/**
 * <Menu />
 * Fully self-contained, drop-in restaurant menu component.
 *
 * Props (all optional):
 *  - data:      menu data object, same shape as menuData.js (default: menuData)
 *  - tabs:      tab grouping config, same shape as menuTabs (default: menuTabs)
 *  - eyebrow:   small italic label above the title (default: "Our Culinary Collection")
 *  - title:     main heading text (default: "The Menu")
 *  - showTabs:  whether to render the tab bar (default: true)
 *
 * Usage:
 *   import Menu from "./components/Menu";
 *   import "./styles/theme.css"; // once, at app root
 *
 *   <Menu />
 *   <Menu data={myMenuData} tabs={myTabs} title="What We Serve" />
 */
export default function Menu({
  data = menuData,
  tabs = menuTabs,
  eyebrow = "Our Culinary Collection",
  title = "The Menu",
  showTabs = true,
}) {
  const categoryKeys = Object.keys(data);
  const [activeTab, setActiveTab] = useState("all");
  const [activeCat, setActiveCat] = useState(null);

  const tabCats =
    activeTab === "all"
      ? categoryKeys
      : tabs.find((t) => t.key === activeTab)?.cats || categoryKeys;

  const visibleCats = activeCat ? [activeCat] : tabCats;

  function handleTabClick(key) {
    setActiveTab(key);
    setActiveCat(null);
  }

  function handlePillClick(key) {
    setActiveCat((current) => (current === key ? null : key));
  }

  return (
    <section className={styles.menuSection}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>
        <GoldDivider />
      </div>

      {showTabs && (
        <div className={styles.tabBar}>
          <button
            className={`${styles.tabButton} ${activeTab === "all" && !activeCat ? styles.active : ""}`}
            onClick={() => handleTabClick("all")}
          >
            ALL ITEMS
          </button>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tabButton} ${activeTab === tab.key && !activeCat ? styles.active : ""}`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      <div className={styles.pillRow}>
        {tabCats.map((key) => {
          const cat = data[key];
          const isActive = activeCat === key;
          return (
            <button
              key={key}
              className={`${styles.pill} ${isActive ? styles.active : ""}`}
              onClick={() => handlePillClick(key)}
            >
              {cat.icon} {cat.label}
            </button>
          );
        })}
      </div>

      <div className={styles.menuGrid}>
        {visibleCats.map((key) => (
          <MenuCategoryCard key={key} category={data[key]} />
        ))}
      </div>
    </section>
  );
}
