function add(a){
    return function(b){
        return a+b;
    };
}

const add2 = a => b => a+b;

const add1 = add(1);
add1(1)(5)
////
import { compose, pipe } from 'lodash/fp';
let input = "    JavaScript   ";
let output = "<div>"+ input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const wrapInSpan = str => `<span>${str}</div>`;
const wrap = type => str =>  `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("span"))
console.log(transform(input));