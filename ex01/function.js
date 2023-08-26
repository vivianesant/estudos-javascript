export function febre(temperatura) {

    if (temperatura > 37) {
        console.log("Febre");
    }

    else if (temperatura <= 36.5 && temperatura >= 35) {
        console.log('Normal');
    }

    else {
        console.log('Hiportemia');
    }

    return temperatura;
}