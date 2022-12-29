import { faker } from '@faker-js/faker';

export const listProducts = []

for (var i = 0; i <= 10; i++) {

    const product = faker.commerce.product()

    if (!listProducts.includes(product)){
        listProducts.push(product)
    }
}



