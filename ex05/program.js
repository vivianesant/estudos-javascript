import prompt from 'prompt-sync'
let ler = prompt();
import {retangulo} from './function.js'

console.log('Informe o tamanho da base do retangulo: ');
let b1 = ler();

console.log('Informe a altura do retangulo: ');
let h1 = ler();

console.log('Informe o tamanho da base do segundo retangulo: ');
let b2  = ler();

console.log('Informe a altura do segundo retangulo: ');
let h2  = ler();

let res = retangulo(b1, h1, b2, h2);

console.log(res);