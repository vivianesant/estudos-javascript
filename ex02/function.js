export function parque(clima) {
    let g = '';

    if (clima >= 23 && clima <= 30) {
        let g = '';
        console.log('Você ganhou um passeio no parque! ');
    }

    else {
        let g = '';
        console.log('Infelizmente, o dia não está apropriado para passeios.');
    }

    return g;
}