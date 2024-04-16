/*
console.log( " MENENTUKAN BILANGAN PRIMA DARI 1-100 " )
for (let a = 1; a <= 100; a++) {
    let bipam = true;
    if (a === 1){
        bipam = false;
    } else {
        for (let b = 2; b < a; b++){
            if (a % b === 0) {
                bipam = false;
                break;
            }
        }
    }
    if (bipam){
        console.log(a + " adalah bilangan prima ");
    } else {
        console.log(a);
    }
}
*/
