console.log('*\n**\n***\n')

//    *
//   **


var output=''
for(let i=0;i<8;i++){
    for(let j=i;j<8;j++){
        output+=' '
    }
    for(let k=0;k<=i;k++){
        output+='*'
    }
    for(let l=0;l<=i-1;l++){
        output+='*'
    }
    output+='\n'
}


var g=[[1,[2,[3]]],[4],[6,7,[2,35]]]
// console.log(g[0][1][1][0])
console.log(g[2][1])
var angka=[1,2,3,4]

function kaliin(val){
    return val*10
}

// var output1=angka.map((val)=>{
    //     return`
    //     <tr>
    //         <td>${val}</td>
    //     </tr>`
    // })
    // var output2=angka.map((val)=>{
        //     return val*10
        // })
        
var fillal=(val)=>{
    return val %2==3
}
var output=[]
for(let i=0;i<angka.length;i++){
    if((fillal(angka[i],i))){
        output.push(angka[i])
    }
}

var output1=angka.filter((val)=>val%2==3)//return array
var output2=angka.findIndex((val)=>val==4)

// console.log(output)
// console.log('==============')
// console.log(output1)
// console.log(output2)
var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
];
var id=1579581081130
var indexaja=arrProduct.findIndex((val)=>val.id===id)
arrProduct[indexaja].name='weebs'//contoh untuk ngubah bagian kecil dari array of objext
// arrProduct.splice(indexaja,1)
// console.log(arrProduct)

function tampilan(){
    var out=arrProduct.map((val)=>{
        return `
        <tr>
            <td>${val.id}</td>
            <td>${val.category}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td>${val.stock}</td>
        </tr>
        `
    })
    return out.join('')
}




// console.log(tampilan())

// class Orang{
//     constructor(_nama,_usia,_id){
//         this.id=_id
//         this.nama=_nama
//         this.usia=_usia
//     }
// }
// var manusia=new Orang('robin','40',2)
// console.log(manusia.nama)
// manusia.nama='brian'
// // manusia.usia='brian'
// console.log(manusia)
// manusia={...manusia,nama:'rbian',usia:'20'}
// console.log(manusia)
// var obj={id:1,name:'dino',usia:23}
// var a='name'
// console.log(obj.name)
// // console.log(obj.a)
// console.log(obj[a])



// var indexaja=arrProduct.findIndex((val)=>val.id==1579581081342)
// console.log(arrProduct[indexaja])
// arrProduct[indexaja].name='weebs'
// console.log(arrProduct)
// angka.forEach((val)=>{
//     console.log(val)
// })
// // console.log(angka)
// console.log(output1.join(''))
// console.log(output2)




//*\n**\n***

// var a=
// while(){

// }

function robin(){
    return {
        brian:()=>{
            return ()=>{
                return [,,{
                    hasian:'marchellino'
                }]
            }
        }
    }
}


console.log(robin().brian()()[2].hasian)//marchellino