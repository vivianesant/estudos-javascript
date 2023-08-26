export function media (n1,n2,n3,n4,n5) {
    let op = (n1 + n2 + n3+ n4 + n5)/5;

    if (op >= 6) {
        console.log('Aprovado');
    }

    else {
        console.log('Reprovado/Recuperação');
    }

    return op;
}