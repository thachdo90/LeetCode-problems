// I: matrix for products, matrix for discounts
// products: [price, tag1, tag2...]
// discounts: [tag, type, amount]
// O: integer, representing total min cost
// C:
// E:

// strategy: iterate through discounts, store this in discountBook object
// iterate through products, for each product, scan its discounts and add min cost to total cost. Improvement idea: for the discount book, store functions that take in the original price and returns discounted price

// init discountBook object,
// init totalCost
// iterate through discounts, update discountbook e.g. {d1: (price) => newPrice }
// iterate through products
  //init minCost;
  //iterate through product element, calculate each discounted price, update minCost
  //update to total cost

const lowestPrice = (products, discounts) => {
  let discountBook = {};
  let totalCost;
  for (let discount of discounts) {
    let discTag = discount[0]
    let amount = discount[2]
    if (discount[1] === '1') {
      // percentage off
      discountBook[discTag] = (value) => Math.round(value - value * (parseInt(amount) / 100))
    } else {
      // fixed amount off
      discountBook[discTag] = (value) => value - parseInt(amount)
    }
  }

  for (let product of products) {
    let price = parseInt(product[0]);
    let minCost = price;
    for (let i = 1; i < product.length; i++) {
      let discTag = product[i];
      if (discountBook[discTag]) {
        let discountFn = discountBook[discTag];
        let discountedPrice = discountFn(price);
        minCost = Math.min(minCost, discountedPrice);
      }
    }
    totalCost = (totalCost || 0) + minCost
  }
  return totalCost;

}


let products, discounts;

// TEST 1
products = [['10', 'd0','d1'], ['15', 'EMPTY', 'EMPTY'], ['20', 'd1', 'EMPTY']]
discounts = [['d0', '1', '27'], ['d1', '2', '5']]
console.log(lowestPrice(products, discounts))