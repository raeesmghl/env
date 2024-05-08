

let str = 'this is a string';



let arr = str.split('');

// console.log(arr);

let newAr = [];

arr.forEach((v,i,a)=>{
    newAr.unshift(v);
})


let newstr = newAr.join('');
// console.log(newAr)
// console.log(newstr);

let arr2 = newstr.split(' ');


let newAr2 = [];

arr2.forEach((v,i,a)=>{
    newAr2.unshift(v);
});

console.log(newAr2);
console.log(newAr2.join(' '));