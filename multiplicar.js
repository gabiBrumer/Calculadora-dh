const multiplicar = (x,y) => {
    if (x == 0 || y == 0){
        return 0;
    } else {
        return x*y
    }
}

console.log (multiplicar(5,5))
module.exports = multiplicar;