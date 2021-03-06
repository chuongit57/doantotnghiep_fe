export const mockProducts = Array.from(Array(30).keys()).map((i) => {
  const random = Math.floor(Math.random() * 4)
  return [
    {
      id: `${123321123}-${i}`,
      category_id: null,
      image: '/image/samsung-galaxy-s21-tim-600x600.jpg',
      name: 'Samsung Galaxy S21 5G',
      price: '18990000',
      discount_price: null,
      discount: null,
      quantity: null,
      views: null,
      likes: 4,
      status: null,
    },
    {id: `${123321124}-${i}`, category_id: null, image: '/image/iphone-12-xanh-duong-600x600.jpg', name: 'iPhone 12 64GB', price: '20390000', discount_price: null, discount: null, quantity: null, views: null, likes: 3, status: null},
    {
      id: `${123321125}-${i}`,
      category_id: null,
      image: '/image/xiaomi-redmi-note-10-thumb-green-600x600.jpg',
      name: 'Xiaomi Redmi Note 10 (6GB/128GB)',
      price: '5090000',
      discount_price: null,
      discount: null,
      quantity: null,
      views: null,
      likes: 5,
      status: null,
    },
    {id: `${123321126}-${i}`, category_id: null, image: '/image/oppo-a93-trang-14-600x600.jpg', name: 'OPPO A93', price: '18990000', discount_price: null, discount: null, quantity: null, views: null, likes: null, status: null},
    {
      id: `${123321127}-${i}`,
      category_id: null,
      image: '/image/samsung-galaxy-a02-xanhduong-600x600-600x600.jpg',
      name: 'Samsung Galaxy A02',
      price: '2370000',
      discount_price: null,
      discount: null,
      quantity: null,
      views: null,
      likes: 4,
      status: null,
    },
  ][random]
})
