// var angka=0
// while(angka<5){
//     console.log(angka)
//     angka++
// }
// do {
//     console.log('aja')
//     angka++
// } while (angka<10);

// console.log(angka,'ini angka')

// for(var i=0;i<=10;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// for(i=0;i<5;i++){
    //     x+='*'
    //     console.log(i)
    // }
    
// console.log('*****\n*****\n')
    
var x=''//x='*****\n******\n'
for(i=0;i<5;i++){
    for(j=0;j<i+1;j++){
        if(i==0){

        }else{
            x+='*'
        }
    }
    x+='\n'
}
console.log(x)
// console.log('***\n**\n*\n**\n***\n')
var y=''
for(let i=0;i<9;i++){
    if(i>=Math.ceil(9/2)){
        for(k=Math.floor(9/2);k<=i;k++){
            y+='*'
        }
    }else{
        for(j=Math.ceil(9/2)+i;j<=9;j++){
            y+='*'
        }
    }
    y+='\n'
}
console.log(y)
// console.log(x)


