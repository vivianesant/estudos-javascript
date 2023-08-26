import prompt from 'prompt-sync'
let ler = prompt();
import {media} from './function.js'

console.log('Informe a primeira nota: ');
let n1 = ler();

console.log('Informe a segunda nota: ');
let n2 = ler();

console.log('Informe a terceira nota: ');
let n3 = ler();

console.log('Informe a quarta nota: ');
let n4 = ler();

console.log('Informe a quinta nota: ');
let n5 = ler();

let resp = media(n1,n2,n3,n4,n5);

console.log(resp);
