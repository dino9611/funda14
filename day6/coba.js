  
// let q='*****'
// for(let j=0;j<5;j++){
//     console.log(q)
//     q=q.substr(0,4-j)
// }
// console.log(q)
let kata = "michaez";
let hasil = "";
for (i = 0; i < kata.length; i++) {
    hasil += String.fromCharCode(kata.charCodeAt(i) + 1);
}
console.log(hasil)