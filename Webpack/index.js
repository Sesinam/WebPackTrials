let add = require ('./sum.js')
let multiply = require('./multiply.js')

let addition = add(12, 3);

let times = multiply(3, 2);

document.getElementById('add').innerHTML=addition;
document.getElementById('multiply').innerHTML=times;
