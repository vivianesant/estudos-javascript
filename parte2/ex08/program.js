import prompt from 'prompt-sync';
let ler = prompt();
import {signo} from './function.js'

console.log('Informe o seu mês de nascimento: ');
let mes = ler();

console.log('Informe o seu dia de nascimento: ');
let dia = ler();

let resp = signo(mes,dia);

console.log(resp);