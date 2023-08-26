import prompt from 'prompt-sync'
let ler = prompt();
import {parque} from './function.js'

console.log("Informe qual é a temperatura atual: ");
let clima =  ler();

let res = parque(clima);

console.log(res);