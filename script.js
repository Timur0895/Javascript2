const goods = [
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 },
];

const renderGoodsItem = (item, img = "https://placehold.it/200x150") => {
  return `<div class="goods-item">
  <img src="${img}">
  <h3>${item.title}</h3>
  <p>${item.price}</p>
  <button class="buy-btn">Купить</button>
  </div>`;
};

const renderGoodsList = (list) => {
  document.querySelector(".goods-list").innerHTML = list
    .map((item) => renderGoodsItem(item))
    .join("");
};

renderGoodsList(goods);
