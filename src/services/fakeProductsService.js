const items = [
  {
    id: 1,
    title: "Sneakers",
    description: "Here is afew desc about the sneakers product",
    originalPrice: 70,
    discountPrice: 50,
    images: [
      "image-product-1-thumbnail.jpg",
      "image-product-2-thumbnail.jpg",
      "image-product-3-thumbnail.jpg",
      "image-product-4-thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "Watch",
    description: "Here is afew desc about the sneakers product",
    originalPrice: 90,
    discountPrice: 50,
    images: [
      "image-product-1-thumbnail.jpg",
      "image-product-2-thumbnail.jpg",
      "image-product-3-thumbnail.jpg",
      "image-product-4-thumbnail.jpg",
    ],
  },
  {
    id: 3,
    title: "Android Phone",
    description: "Here is afew desc about the sneakers product",
    originalPrice: 150,
    discountPrice: 120,
    images: [
      "image-product-1-thumbnail.jpg",
      "image-product-2-thumbnail.jpg",
      "image-product-3-thumbnail.jpg",
      "image-product-4-thumbnail.jpg",
    ],
  },
];

export const getItems = () => {
  return items;
};

export const getItemsById = (id) => {
  return items.find((product) => product.id === id);
};
