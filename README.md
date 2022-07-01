# Shopping Cart

## Destructuring

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

## Functions

### increment()

- Contain the object id in a var `selectedItem`
- access basket arr + apply `find()`
- find(); returns the first element in the provided arr that satisfies the provided testing function
- testing func; if the `x.id === selectedItem.id`
- Contain function in a var `search`

```js
let search = basket.find((x) => x.id === selectedItem.id);
```

- if the basket arr does not contain the item
- `push()` the item object in the basket arr
- else the item object is already in the basket arr incremently increase by +1

```js
if (search === undefined) {
  basket.push({
    id: selectedItem.id,
    item: 1,
  });
} else {
  search.item += 1;
}
```

### decrement()

- Contain the object id in a var `selectedItem`
- access the basket arr and apply `find()`
- `find()`; returns the first element in the provided arr that satisfies the provided testing function
- testing func; if item selected is already found in the basket arr

```js
let search = basket.find((x) => x.id === selectedItem.id);
```

- if the item searched === 0 return func
- else incremently decrease -1

```js
if (search.item === 0) return;
else {
  search.item -= 1;
}
```

### update()

- check basket arr if the item is === to the selectedItem id

```js
let search = basket.find((x) => x.id === id);

// Output: Object { id: "ame", item: 1 }
```

- get the item value of the selectedItem and display in HTML

```js
document.getElementById(id).innerHTML = search.item;
```

### calculation()

- Access the `cart__amount` HTML element and contain in a var `cartIcon`

```js
let cartIcon = document.getElementById("cart__amount");
```

- Have the var `cartIcon` take on the value of the `basket` arr item's sum by apply the `reduce()`

```js
cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
```

## Local Storage

### localStorage.setItem()

- sets the data to local storage

```js
localStorage.setItem("data", JSON.stringify(basket));
```

### localStoage.getItem()

- get data from local storage

```js
let basket = JSON.parse(localStorage.getItem("data")) || [];
```

- Initallize `search` var to use in object literal
- or have it equal an empyt arr

```js
let search = basket.find((x) => x.id === id) || [];
```

- if search item amount is undefined have it equal 0
- else return the search item amount value

```js
`<div id="${id}" class="quantity">${
  search.item === undefined ? 0 : search.item
}</div>`;
```
