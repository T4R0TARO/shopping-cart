let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "ame",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg",
  },
  {
    id: "gura",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-2.jpg",
  },
  {
    id: "ina",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-3.jpg",
  },
  {
    id: "kiara",
    name: "Men's Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg",
  },
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      // DESTRUCTERING
      let { id, name, price, desc, img } = item;
      let search = basket.find((x) => x.id === id) || [];
      return `
    <div id="product-id-${id}" class="item">
        <img width="220" src="${img}" alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2> $ ${price}</h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id="${id}" class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>
    `;
    })
    .join(""));
};

generateShop();

/** increment()
 * * Increase amount of an item in basket
 * @param {selectedItem} id
 * if the item is not already in the basket push item in basket
 * else  the item is already in basket incremently increase by 1
 */

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));
  // console.log(basket);
  update(selectedItem.id);
};

/** decrement()
 * * Decrease amount of an item in basket until it reaches 0
 * @param {selectedItem} id
 * if the item is not is the basket and is 0 return 0
 * else the item is already present incremently decrease by 1
 */

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));

  // console.log(basket);
  update(selectedItem.id);
};

/** update()
 * * Updates the value of an item
 * @param {id} selectedItem
 * update amount and show in HTML
 */

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

/** calculation()
 * * Calculates the cart amount by the updated value items selected
 * Update the cart amount and show in HTML
 * map out the items in the basket
 * reduce the value to equal a sum of all items
 */

let calculation = () => {
  let cartIcon = document.getElementById("cart__amount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  // console.log(basket.map((x) => x.item).reduce((x, y) => x + y, 0));
};

// calculates sum of items in localStorage
calculation();
