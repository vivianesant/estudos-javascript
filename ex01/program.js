import prompt from 'prompt-sync'
let ler = prompt();
import {febre} from './function.js'

console.log('Informe a temperatura obtida: ');
let temp = ler();

let res = febre(temp);

console.log(res);


