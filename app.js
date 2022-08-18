// return masked string
function maskify(cc) {
    let myHash = '';
    let last4 = cc.substr(cc.length - 4);
    let last3 = cc.substr(cc.length - 3);
    if (cc.length == 3) {
        return last3;
    } else if (cc.length < 5 && cc.length != 3) {
        return last4;
    } else {
        for (let i = 0; i < cc.length; i++) {
            myHash = myHash + '#';
        }
        return myHash.slice(0, -4) + last4;
    }
}

console.log(maskify('4556364607935616')); // '############5616'
console.log(maskify('1')); // '1'
console.log(maskify('11111')); // '#1111'
console.log(maskify('117')); // '117'
console.log(maskify('s17')); // 's17'
console.log(maskify('1')); // '1'
console.log(maskify('12')); // '12'
console.log(maskify('123')); // '123'
console.log(maskify('1234')); // '1234'