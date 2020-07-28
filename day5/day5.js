var arr=[1,30,5]

// console.log(arr[4])
// console.log(arr.length)
console.log(arr.sort((a,b)=>b-a))
// console.log(arr.toString())
// console.log(arr.join('*'))
var buah=['jeruk','pisang','nanas','apple','jambu']
var buah2=['hhahaha','hihih']
buah=[...buah,'buah manggis']
var buah4=[...buah2,...buah]
console.log(buah)
// console.log(buah4)
// buah.splice(0,2,"jambu")
// console.log(buah)
// buah[buah.length+10]='duku'
// console.log(buah)
// var a=buah.pop()
// console.log(a)
// buah.push('jambu')
// console.log(buah)
var arrbaru=[['a','b','c'],['g',1,2,[4,5,6,12]]]
var arrst ='halo dunia' //ibkp evoja
// console.log(arrst.split('').reverse().join(''))
var arrbaru=arrst.split(' ')
console.log(arrbaru)

var output=''
for(let i=arrst.length-1;i>=0;i--){
    output+=arrst[i]
}
// console.log(output)
// var hitung=0
// for(let i=0;i<arrst.length;i++){
//     if (arrst[i]==='a') hitung++
// }
// console.log(hitung)
// var angka=1996 //seribu sembilan ratus sembilan puluh enam
// angka+=''
// var arrangka='1234567890'.split('')
// var ribuan=['seribu','dua ribu',]
// var output=''
// if(angka.length==4){
//     for(let i=0;i<angka.length;i++){
//         for(let j=0;j<arrangka.length;j++){
//             if(angka[i]===j){
                
//             }
//         }
//     }
// }else if(angka.length==3){

// }else if(angka.length==2){

// }else{

// }
// var output=0
// for(let i=0;i<angka.length;i++){
//     output+=angka[i]
// }
// console.log(output)






// var alpha='abcdefghijklmnopqrstuvwxyz'.split('')



console.log('   *\n  **+\n ***++\n')



var output=''

for(let i=0;i<3;i++){
    for(let j=i;j<3;j++){
        output+=' '
    }
    for(let bintang=0;bintang<=i;bintang++){
        output+='*'
    }
    for(let plusplus=1;plusplus<=i;plusplus++){
        output+='^'
    }
    output+='\n'
}

console.log(output)