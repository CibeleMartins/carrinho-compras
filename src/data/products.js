import { faker } from '@faker-js/faker';

export const listProducts = []

for (var i = 0; i <= 20; i++) {

    const product = faker.commerce.product()
    const price = faker.finance.amount(0,100,2,'R$ ', true)
 
    if (!listProducts.includes(product)){
        listProducts.push({id: Math.random(parseInt()), name: product, price: price})
    }
}



