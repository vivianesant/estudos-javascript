export function bissexto(ano) {

    let op = ano % 4 == 0;


    if (ano % 4 == 0) {
        
        console.log('É um ano bissexto')
    }

    else {
        console.log('Não é um ano bissexto')
    }

    
}