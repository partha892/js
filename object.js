const product = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
  console.log(product["description"])
  console.log(product["rating"]["rate"])
 

  product.id=2
  console.log(product.id)
  Object.freeze(product["id"])
  console.log(product)
  

  const obj1 = {1:"one",2:'two'}
  const obj2 = {3:"three",4:'four'}
  const obj3 = Object.assign(obj1,obj2)
  console.log(obj3)
  
