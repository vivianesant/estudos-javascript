import prompt from 'prompt-sync'
let ler = prompt();
import {quadrado} from './function.js'

console.log('Informe o tamanho da base e altura do quadrado: ');
let l1 = ler();

console.log('Informe o tamanho da base e altura do segundo quadrado: ');
let l2 = ler();

let res = quadrado(l1, l2);

console.log(res);