import prompt from 'prompt-sync'
let ler = prompt();
import {cores} from './function.js'

console.log('Informe a cor: ');
let cor = ler();

let resp = cores(cor);

console.log(resp);