# Destructuring

Refactor an objects key values so you can use the name of the key in an object literal without referencing the object again

- ORIGNAL REFRENCE

```js
let shopItemData = [
  {
    id: "ame",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg",
  },
];
```

- ORIGINAL `${item.name}`

- REFERENCE `let {id, name, price, desc, img} = item`
- REFACTOR `${name}`

```js
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      // DESTRUCTERING
      let { id, name, price, desc, img } = item;
      return `
    <div id="product-id-${id}" class="item">
        <img width="220" src="${img}" alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2> $ ${price}</h2>
            <div class="buttons">
              <i class="bi bi-dash-lg"></i>
              <div id="${id}" class="quantity">0</div>
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>
    `;
    })
    .join(""));
};

generateShop();
```
