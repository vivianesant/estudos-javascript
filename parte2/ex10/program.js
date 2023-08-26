import prompt from 'prompt-sync'
let ler = prompt();
import {bissexto} from './function.js'

console.log('Informe o ano para saber se ele é bissexto ou não: ');
let ano = ler();


let resp = bissexto(ano);

console.log(resp);