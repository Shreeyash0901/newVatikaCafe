// Menu data for New Vatika Café
// Bilingual version — every category label and item name has English (en)
// and Hindi (hi) text. Edit prices/items here — this file has zero
// dependencies and can be imported anywhere (React, Vue, plain JS, a CMS, etc).

export const menuData = {
  noodles: {
    icon: "🍜",
    label: { en: "NOODLES", hi: "नूडल्स" },
    items: [
      { name: { en: "Veg Noodles", hi: "वेज नूडल्स" }, price: "₹140" },
      { name: { en: "Hakka Noodles", hi: "हक्का नूडल्स" }, price: "₹140" },
      { name: { en: "Sechzwan Noodles", hi: "सेजवान नूडल्स" }, price: "₹150" },
      { name: { en: "Chilli Garlic Noodles", hi: "चिल्ली गार्लिक नूडल्स" }, price: "₹140" },
      { name: { en: "Chinese Bhel", hi: "चाइनीज़ भेल" }, price: "₹150" },
      { name: { en: "Manchurian Noodles", hi: "मंचूरियन नूडल्स" }, price: "₹150" },
    ],
  },
  starter: {
    icon: "🥢",
    label: { en: "CHINESE STARTER", hi: "चाइनीज़ स्टार्टर" },
    items: [
      { name: { en: "Veg Manchurian Dry / Gravy", hi: "वेज मंचूरियन ड्राय / ग्रेवी" }, price: "₹140/140" },
      { name: { en: "Paneer Manchurian Dry / Gravy", hi: "पनीर मंचूरियन ड्राय / ग्रेवी" }, price: "₹180/180" },
      { name: { en: "Paneer Chilli Dry / Gravy", hi: "पनीर चिल्ली ड्राय / ग्रेवी" }, price: "₹200/200" },
      { name: { en: "Mushroom Chilli", hi: "मशरूम चिल्ली" }, price: "₹190" },
      { name: { en: "Paneer 65", hi: "पनीर 65" }, price: "₹200" },
      { name: { en: "Spring Roll", hi: "स्प्रिंग रोल" }, price: "₹120" },
      { name: { en: "Babycorn Chilli", hi: "बेबीकॉर्न चिल्ली" }, price: "₹190" },
    ],
  },
  rice: {
    icon: "🍚",
    label: { en: "CHINESE RICE", hi: "चाइनीज़ राइस" },
    items: [
      { name: { en: "Veg / Paneer Fried Rice", hi: "वेज / पनीर फ्राइड राइस" }, price: "₹140/180" },
      { name: { en: "Schezwan Fried Rice", hi: "सेजवान फ्राइड राइस" }, price: "₹150" },
      { name: { en: "Chilli Garlic Rice", hi: "चिल्ली गार्लिक राइस" }, price: "₹150" },
      { name: { en: "Manchurian Rice", hi: "मंचूरियन राइस" }, price: "₹150" },
      { name: { en: "Vatika Special Rice", hi: "वाटिका स्पेशल राइस" }, price: "₹210" },
    ],
  },
  momos: {
    icon: "🥟",
    label: { en: "MOMOS", hi: "मोमोज़" },
    items: [
      { name: { en: "Veg / Paneer Steam Momos", hi: "वेज / पनीर स्टीम मोमोज़" }, price: "₹100/120" },
      { name: { en: "Veg / Paneer Fried Momos", hi: "वेज / पनीर फ्राइड मोमोज़" }, price: "₹100/120" },
      { name: { en: "Veg / Paneer Kurkure Momos", hi: "वेज / पनीर कुरकुरे मोमोज़" }, price: "₹140/160" },
      { name: { en: "Veg / Paneer Afgani Momos", hi: "वेज / पनीर अफगानी मोमोज़" }, price: "₹150/170" },
      { name: { en: "Veg / Paneer Chilly Momos", hi: "वेज / पनीर चिल्ली मोमोज़" }, price: "₹150/170" },
    ],
  },
  soups: {
    icon: "🍲",
    label: { en: "SOUPS", hi: "सूप" },
    items: [
      { name: { en: "Manchow Soup", hi: "मंचाव सूप" }, price: "₹100" },
      { name: { en: "Hot N Sour Soup", hi: "हॉट एंड सॉर सूप" }, price: "₹100" },
      { name: { en: "Lemon Coriander Soup", hi: "लेमन धनिया सूप" }, price: "₹100" },
      { name: { en: "Sweet Corn Soup", hi: "स्वीट कॉर्न सूप" }, price: "₹110" },
      { name: { en: "Special Soup", hi: "स्पेशल सूप" }, price: "₹130" },
      { name: { en: "Tamato Soup", hi: "टमाटर सूप" }, price: "₹90" },
    ],
  },
  pizza: {
    icon: "🍕",
    label: { en: "PIZZA", hi: "पिज़्ज़ा" },
    items: [
      { name: { en: "Veggie Pizza", hi: "वेजी पिज़्ज़ा" }, price: "₹180/230" },
      { name: { en: "Margerita Pizza", hi: "मार्गेरिटा पिज़्ज़ा" }, price: "₹150/200" },
      { name: { en: "Cheese Corn Pizza", hi: "चीज़ कॉर्न पिज़्ज़ा" }, price: "₹180/270" },
      { name: { en: "Veg Tandoori Pizza", hi: "वेज तंदूरी पिज़्ज़ा" }, price: "₹200/270" },
      { name: { en: "Paneer Tandoori Pizza", hi: "पनीर तंदूरी पिज़्ज़ा" }, price: "₹200/250" },
      { name: { en: "Cheesy Nachos Pizza", hi: "चीज़ी नाचोज़ पिज़्ज़ा" }, price: "₹170/230" },
      { name: { en: "Schezwan Paneer Pizza", hi: "सेजवान पनीर पिज़्ज़ा" }, price: "₹230/300" },
      { name: { en: "Paneer Chilli Pizza", hi: "पनीर चिल्ली पिज़्ज़ा" }, price: "₹230/300" },
      { name: { en: "Full Topping Pizza", hi: "फुल टॉपिंग पिज़्ज़ा" }, price: "₹230/300" },
      { name: { en: "Vatika Special Pizza", hi: "वाटिका स्पेशल पिज़्ज़ा" }, price: "₹250/320" },
      { name: { en: "Pasta Pizza", hi: "पास्ता पिज़्ज़ा" }, price: "₹230/290" },
      { name: { en: "Momos Pizza", hi: "मोमोज़ पिज़्ज़ा" }, price: "₹230/290" },
    ],
  },
  sandwich: {
    icon: "🥪",
    label: { en: "SANDWICH", hi: "सैंडविच" },
    items: [
      { name: { en: "Veg Grill Sandwich", hi: "वेज ग्रिल सैंडविच" }, price: "₹70" },
      { name: { en: "Veg Cheese Sandwich", hi: "वेज चीज़ सैंडविच" }, price: "₹80" },
      { name: { en: "Cheese Corn Sandwich", hi: "चीज़ कॉर्न सैंडविच" }, price: "₹80" },
      { name: { en: "Veg / Paneer Tandoori Sandwich", hi: "वेज / पनीर तंदूरी सैंडविच" }, price: "₹80" },
      { name: { en: "Veg Club Sandwich", hi: "वेज क्लब सैंडविच" }, price: "₹100" },
      { name: { en: "Vatika Special Sandwich", hi: "वाटिका स्पेशल सैंडविच" }, price: "₹140" },
    ],
  },
  burger: {
    icon: "🍔",
    label: { en: "BURGER", hi: "बर्गर" },
    items: [
      { name: { en: "Veg Burger", hi: "वेज बर्गर" }, price: "₹70" },
      { name: { en: "Veg Cheese Burger", hi: "वेज चीज़ बर्गर" }, price: "₹80" },
      { name: { en: "Paneer / Veg Crispy Burger", hi: "पनीर / वेज क्रिस्पी बर्गर" }, price: "₹110/90" },
      { name: { en: "Double Tikki Burger", hi: "डबल टिक्की बर्गर" }, price: "₹100" },
      { name: { en: "Vatika Special Burger", hi: "वाटिका स्पेशल बर्गर" }, price: "₹130" },
    ],
  },
  fries: {
    icon: "🍟",
    label: { en: "FRIES", hi: "फ्राइज़" },
    items: [
      { name: { en: "Peri Peri Fries", hi: "पेरी पेरी फ्राइज़" }, price: "₹100" },
      { name: { en: "Salted Fries", hi: "साल्टेड फ्राइज़" }, price: "₹70" },
      { name: { en: "Cheese Loaded Fries", hi: "चीज़ लोडेड फ्राइज़" }, price: "₹110" },
      { name: { en: "Peri Peri Cheese Fries", hi: "पेरी पेरी चीज़ फ्राइज़" }, price: "₹120" },
    ],
  },
  pasta: {
    icon: "🍝",
    label: { en: "PASTA", hi: "पास्ता" },
    items: [
      { name: { en: "White Sauce Pasta", hi: "व्हाइट सॉस पास्ता" }, price: "₹120" },
      { name: { en: "Red Sauce Pasta", hi: "रेड सॉस पास्ता" }, price: "₹120" },
      { name: { en: "Vatika Special Pasta", hi: "वाटिका स्पेशल पास्ता" }, price: "₹210" },
    ],
  },
  maggi: {
    icon: "🍛",
    label: { en: "MAGGIE", hi: "मैगी" },
    items: [
      { name: { en: "Plain Maggi", hi: "प्लेन मैगी" }, price: "₹50" },
      { name: { en: "Butter Maggi", hi: "बटर मैगी" }, price: "₹60" },
      { name: { en: "Corn Cheese Maggi", hi: "कॉर्न चीज़ मैगी" }, price: "₹80" },
      { name: { en: "Cheese Paneer Maggi", hi: "चीज़ पनीर मैगी" }, price: "₹90" },
      { name: { en: "All Mix Maggi", hi: "ऑल मिक्स मैगी" }, price: "₹100" },
    ],
  },
  colddrinks: {
    icon: "🧋",
    label: { en: "COLD BEVERAGES", hi: "कोल्ड बेवरेजेज़" },
    items: [
      { name: { en: "Cold Coffee", hi: "कोल्ड कॉफी" }, price: "₹50" },
      { name: { en: "Thick Cold Coffee", hi: "थिक कोल्ड कॉफी" }, price: "₹60" },
      { name: { en: "Cold Coffee with Ice Cream", hi: "कोल्ड कॉफी विद आइसक्रीम" }, price: "₹80" },
      { name: { en: "Hazelnut Cold Coffee / Thick", hi: "हेज़लनट कोल्ड कॉफी / थिक" }, price: "₹90" },
      { name: { en: "Caramel Cold Coffee / Thick", hi: "कैरेमल कोल्ड कॉफी / थिक" }, price: "₹90" },
      { name: { en: "Hot Chocolate", hi: "हॉट चॉकलेट" }, price: "₹60" },
    ],
  },
  mocktails: {
    icon: "🍹",
    label: { en: "MOCKTAILS", hi: "मॉकटेल्स" },
    items: [
      { name: { en: "Mint Mojito", hi: "मिंट मोजिटो" }, price: "₹70" },
      { name: { en: "Blue Berry", hi: "ब्लू बेरी" }, price: "₹70" },
      { name: { en: "Watermelon", hi: "तरबूज़" }, price: "₹70" },
      { name: { en: "Kala Khatta", hi: "काला खट्टा" }, price: "₹70" },
      { name: { en: "Strawberry", hi: "स्ट्रॉबेरी" }, price: "₹70" },
      { name: { en: "Green Apple", hi: "ग्रीन एप्पल" }, price: "₹70" },
    ],
  },
  shakes: {
    icon: "🥤",
    label: { en: "SHAKES", hi: "शेक्स" },
    items: [
      { name: { en: "Kitkat Shake", hi: "किटकैट शेक" }, price: "₹120" },
      { name: { en: "Chocolate Shake", hi: "चॉकलेट शेक" }, price: "₹120" },
      { name: { en: "Oreo Shake", hi: "ओरियो शेक" }, price: "₹120" },
      { name: { en: "Butter Scotch Shake", hi: "बटर स्कॉच शेक" }, price: "₹130" },
      { name: { en: "Mango Shake", hi: "मैंगो शेक" }, price: "₹130" },
      { name: { en: "Strawberry Shake", hi: "स्ट्रॉबेरी शेक" }, price: "₹130" },
      { name: { en: "Biscoff Shake", hi: "बिस्कॉफ शेक" }, price: "₹160" },
    ],
  },
};

// Groups categories into tabs for filtering UI
export const menuTabs = [
  { key: "chinese", label: { en: "Chinese", hi: "चाइनीज़" }, cats: ["noodles", "starter", "rice", "momos", "soups"] },
  { key: "fastfood", label: { en: "Fast Food", hi: "फास्ट फूड" }, cats: ["pizza", "sandwich", "burger", "fries", "pasta", "maggi"] },
  { key: "drinks", label: { en: "Drinks", hi: "ड्रिंक्स" }, cats: ["colddrinks", "mocktails", "shakes"] },
];

export const allCategoryKeys = Object.keys(menuData);

export const totalMenuItems = allCategoryKeys.reduce(
  (sum, key) => sum + menuData[key].items.length,
  0
);
