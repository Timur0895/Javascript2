class ProductsList {
  constructor(container = ".goods-list") {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
  }

  _fetchProducts() {
    this.goods = [
      { id: 1, title: "Shirt", price: 150 },
      { id: 2, title: "Socks", price: 50 },
      { id: 3, title: "Jacket", price: 350 },
      { id: 4, title: "Shoes", price: 250 },
    ];
  }
  sumPrices() {
    let total = this.goods.reduce((sum, good) => sum + good.price, 0);
    return total;
  }
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML("beforeend", productObj.render());
      //            block.innerHTML += productObj.render();
    }
  }
}

class ProductItem {
  constructor(product, img = "https://placehold.it/200x150") {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
  }
}

let list = new ProductsList();
list.render();
list.sumPrices();

class Basket {
  addGoods() {}
  removeGoods() {}
  changeGoods() {}
}

class ElemBasket {}
