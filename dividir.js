const dividir = (x,y) => {
    if (x == 0){
        return "Não se pode dividir por zero!";
    } else {
        return x/y
    }
}

console.log (dividir (9,3))
module.exports = dividir