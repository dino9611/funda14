//harga awal 10000 -12000 -14400-17280
//tiap menit naik 20%
//tiap kelipatan 4 naiknya 10%
// if,96, be, 25 ,go ,715, up, 2116
//harganya diatas 30 juta return 'barang sudah dibeli'
const lelang=(menit)=>{
    var awal=10000
 
    var hitunganmenit=1
    while(hitunganmenit<=menit){
        if(hitunganmenit%4==0){
            awal+=Math.ceil(awal*0.1)
        }else{
            awal+=Math.ceil(awal*0.2)
        }
        hitunganmenit ++
    }
    // do {
     
    // } while (hitunganmenit<=menit);

    // console.log(awal)
    return awal >30000000?'barang sudah dibeli':awal
}
console.log(lelang(0))

console.log(lelang(2))

var harihari=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']

console.log(harihari.findIndex((val)=>val==='Senin'))

function findindexalala(arr,cb){
    for(var i=0;i<arr.length;i++){
        if(cb(arr[i],i)){
            return i
        }
    }
}

// 0,1,2,3  0+1=1 1+2=3 2+4=6 3+7=
//1,3,6,10
//1,2,4,7
console.log('  *\n **+\n***++\n')
var output=''
// for(let i=0;i<3;i++){
//     for(let j=i;j<3-1;j++){
//         output+=' '
//     }
//     for(let k=i;k<)
// for
//     output+='\n'
// }




console.log(findindexalala(harihari,(val)=>val==='Senin'),'alala')

