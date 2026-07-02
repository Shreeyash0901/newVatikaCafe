import { useState } from "react";
import { useCart } from "../context/CartContext";
import { sendOrderViaWhatsApp } from "../data/whatsappOrder";
import styles from "./CartDrawer.module.css";

export default function CartDrawer() {
  const {
    items,
    total,
    itemCount,
    addItem,
    decrementItem,
    removeItem,
    clearCart,
    isDrawerOpen,
    closeDrawer,
  } = useCart();

  const [customer, setCustomer] = useState({ name: "", phone: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!isDrawerOpen) return null;

  const canSubmit = itemCount > 0 && customer.name.trim() && customer.phone.trim();

  function handleChange(e) {
    setCustomer((c) => ({ ...c, [e.target.name]: e.target.value }));
  }

  function handlePlaceOrder() {
    if (!canSubmit) return;
    sendOrderViaWhatsApp(items, customer, total);
    setSubmitted(true);
    // Once the order is confirmed sent, clear the cart for the next visit.
    clearCart();
  }

  return (
    <div className={styles.overlay} onClick={closeDrawer}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Your Order</h3>
          <button className={styles.closeBtn} onClick={closeDrawer} aria-label="Close">
            ✕
          </button>
        </div>

        {submitted ? (
          <div className={styles.confirmation}>
            <p>✅ Your order was opened in WhatsApp — just hit send there to confirm.</p>
            <button className={styles.secondaryBtn} onClick={closeDrawer}>
              Continue Browsing
            </button>
          </div>
        ) : (
          <>
            <div className={styles.itemList}>
              {items.length === 0 && (
                <p className={styles.empty}>No items yet — add something from the menu.</p>
              )}
              {items.map((item) => (
                <div key={item.id} className={styles.itemRow}>
                  <div className={styles.itemInfo}>
                    <span className={styles.itemName}>{item.nameEn}</span>
                    <span className={styles.itemPrice}>₹{item.price} each</span>
                  </div>
                  <div className={styles.qtyControls}>
                    <button onClick={() => decrementItem(item.id)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => addItem(item)}>+</button>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.nameEn}`}
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <>
                <div className={styles.totalRow}>
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                <div className={styles.form}>
                  <input
                    name="name"
                    placeholder="Your name"
                    value={customer.name}
                    onChange={handleChange}
                  />
                  <input
                    name="phone"
                    placeholder="Phone number"
                    value={customer.phone}
                    onChange={handleChange}
                  />
                  <textarea
                    name="note"
                    placeholder="Address or special instructions (optional)"
                    value={customer.note}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>

                <button
                  className={styles.primaryBtn}
                  disabled={!canSubmit}
                  onClick={handlePlaceOrder}
                >
                  Place Order via WhatsApp
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
