const items = [
  {
    id: 1,
    title: "Sneakers",
    description: "Here is afew desc about the sneakers product",
    originalPrice: 70,
    discountPrice: 50,
    images: ["img1.jpg", "img2.jpg", "img3.jpg"],
  },
  {
    id: 2,
    title: "Watch",
    description: "Here is afew desc about the sneakers product",
    originalPrice: 90,
    discountPrice: 50,
    images: ["img1.jpg", "img2.jpg", "img3.jpg"],
  },
  {
    id: 3,
    title: "Android Phone",
    description: "Here is afew desc about the sneakers product",
    originalPrice: 150,
    discountPrice: 120,
    images: ["img1.jpg", "img2.jpg", "img3.jpg"],
  },
];

export const getItems = () => {
  return items;
};

export const getItemsById = (id) => {
  return items.find((product) => product.id === id);
};
