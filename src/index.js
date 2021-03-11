module.exports = function reverse (n) {
    if( n < 0){
        a = Math.abs(n);
        return parseInt(a.toString().split('').reverse().join('')) * Math.sign(a)
    }
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}
