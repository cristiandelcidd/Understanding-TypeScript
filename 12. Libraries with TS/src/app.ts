// import _ from 'lodash';

// console.log(_.shuffle([1, 2, 3]));

// declare var GLOBAL: any;

// console.log(GLOBAL);

import 'reflect-metadata';

import { plainToClass } from 'class-transformer';

import { validate } from 'class-validator';

import { Product } from './product.model';

const products = [
   { title: 'Chicken', price: 23 },
   { title: 'Rice', price: 10 },
];

const newProduct = new Product('', -3.66);
validate(newProduct).then((errors) => {
   if (errors.length > 0) {
      console.log('VALIDATION ERRORS');
      console.log(errors);
   } else {
      console.log(newProduct.getInformation());
   }
});

// const loadedProducts = products.map((product) => {
//    return new Product(product.title, product.price);
// });

let loadedProducts = plainToClass(Product, products);

for (const product of loadedProducts) {
   console.log(product.getInformation());
}
