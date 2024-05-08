

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
console.log(a);