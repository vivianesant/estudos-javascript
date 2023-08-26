import prompt from 'prompt-sync'
let ler = prompt();
import {semestre} from './function.js'

console.log('Informe qual é o mês: ');
let mes = ler();

let resp = semestre(mes);

console.log(resp);