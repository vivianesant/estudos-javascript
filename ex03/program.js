import prompt from 'prompt-sync'
let ler = prompt();
import {par} from './function.js'

console.log('Informe um número para averiguar se este é par ou ímpar: ');
let num = ler();

let resp = par(num);

console.log(resp);