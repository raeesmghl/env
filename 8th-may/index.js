

let myStr = 'this is a string';
function func(str) {
    
    
    let arr = str.split('');
    
    let newAr = [];
    
    arr.forEach((v,i,a)=>{
        newAr.unshift(v);
    })
    
    let newstr = newAr.join('');
    
    let arr2 = newstr.split(' ');
    
    
    let newAr2 = [];
    
    arr2.forEach((v,i,a)=>{
        newAr2.unshift(v);
    });

    return newAr2.join(' ');
    
}

let a = func(myStr);
// console.log(a);



function isPrime(n){
    if(n<2){
        return false;
    }

    for(let i = 2 ;i<n;i++){
        if(n%i==0){
            return false;
        }
    }

    return true;
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(7))
console.log(isPrime(8))
console.log(isPrime(9))
console.log(isPrime(10))
console.log(isPrime(11))