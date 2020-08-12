// var a=0.6-0.2
// console.log(a)
// var b=a==0.3
// console.log(b)

// 1    10 var kiri=  [9,7,5,3,1]
// 3    8  var kanan= [2,4,6,8,10]
// 5    6
// 7    4
// 9    2

// function jalan(address,n){
//     var nomersemua=[]
//     for(let i=1;i<=n*2;i++){
//         nomersemua.push(i)
//     }

// }


//orang jalan u,s,t,b berada diposisi 0 [u,u,s,t,b] //false

function posisi(arr=[]){
    var posx=0
    var posy=0
    for(let i=0;i<arr.length;i++){
        switch (arr[i]) {
            case 'u':
                posy++
                break;
            case 's':
                posy--
                break;
            case 't':
                posx++
                break
            default:
                posx--
                break;
        }
    }
    return posx===0 && posy===0
}   
// var b= posisi(['u','u','s','t','b'])
// console.log(b)

var modus=[1,2,2,2,2,3,4,4,5,6,7,7,7,7,1,8]
// var setaja=new Set(modus)
// console.log(setaja)

const modusin=(array)=>{
    var obj={}//{1:1}
    array.forEach((val)=>{
        if(!obj[val]){ //obj['1']
            obj[val]=1
        }else{
            obj[val]++
        }
    })
    // return obj
    var frequesimaks=0
    var modusa=[]
    for(let isi in obj){
        if(obj[isi]>frequesimaks){
            modusa=[isi]//[1] [2]
            frequesimaks=obj[isi]//2 //4
        }
        else if (obj[isi] === frequesimaks) {
            modusa.push(isi);
        }
    }
    return modusa
}
console.log(modusin(modus))

// const ganjilgenap=(input)=>{
//     var ganjilataugenap=input.split(' ')
//     // console.log(ganjilataugenap)
//     var tanggal=new Date().getDate()
//     // console.log(tanggal)
//     var isodd=tanggal%2===1?'ganjil':'genap'
//     var nomerplat=ganjilataugenap[1]
//     var nomergangenap
//     if(nomerplat%2==0){
//         nomergangenap='genap'
//     }else{
//         nomergangenap='ganjil'
//     }
//     return isodd==nomergangenap?'boleh lewat':"nggak boleh lewat woy"
// }

// var plat='b123kg'.replace(/\D/g,'')
// console.log(plat)


// password harus ada huruf besar,kecil,number

// console.log(ganjilgenap('B 1123 KVD'))//true //false
// console.log(ganjilgenap('BH 1234 ED')) 





class Hero{
    constructor(a,_armor){
        this.hp=a
        this.armor=_armor
    }
}

class Strength extends Hero{
    constructor(a,_armor,_str){
        super(a,_armor)
        this.str=_str
    }
}

// class Intelegence extends Hero{
//     constructor(a,armor,intel){
//         super(a,armor)
//         this.int=intel
//     }
//     kalimat=(namahero)=>{
//         return `${namahero} punya intelliegence ${this.int}`
//     }
//     static isintellegence=(intel)=>{
//         return intel>25?'hero intel':'noob'
//     }
// }

// var a=Intelegence.isintellegence(30)
// console.log(a)
// var axe=new Strength(100,5,20)

// var crystalmaiden=new Intelegence(40,1,30).kalimat('Crystal Maiden')
// console.log(axe)
// console.log(crystalmaiden)


// const anggi=(boll)=>{
//     return boll? 'rafi':'hana'
// }

// const robin=(cb,boold)=>{
//     if(cb(boold)==='rafi'){
//         return ()=>{
//             return {
//                 hasian:['marcellino']
//             }
//         }
//     }else if(cb(boold)==='hana'){
//         return ()=>{
//             return{
//                 hasian:['mag']
//             }
//         }
//     }
// }


// console.log(robin(anggi,false)().hasian[0])//marcelino //mag



console.log(isNaN('a'))


function kekuatanpass(input=''){
    var hurufbesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var output=0
    var hurufbesars=false
    var hurfkecil=false
    var angka=false
    for(var i=0;i<input.length;i++){
        if(isNaN(input[i])){
            for(var j=0;j<hurufbesar.length;j++){
                if(input[i]===hurufbesar[j].toUpperCase()&&!hurufbesars){
                    output++
                    hurufbesars=true
                    continue
                }else if(input[i]===hurufbesar[j].toLowerCase()&&!hurfkecil){
                    output++
                    hurfkecil=true
                    continue
                }
            }
        }else if(!angka){
            output++
            angka=true
        }
    }
    return output

}

console.log(kekuatanpass('Ab1a'))
console.log(kekuatanpass('Abaa'))
console.log(kekuatanpass('abaa'))





















