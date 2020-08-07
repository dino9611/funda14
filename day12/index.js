//foreach 
//map 
//filter
//method yang dimiliki oleh array jadi hanya bisa digunakan untuk sebuah array
var list=['1','2',3].filter((val)=>{
    return val%2==1
})

var abc='abc'.includes('')
console.log(abc)
// var list=[
//     {nama:}
// ]
console.log(list)
//filteralala
function filteralala(arr=['1','2'],cb){
    var output=[]
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i],i)){
            output.push(arr[i])
        }
    }
    return output
}


///map
var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
];
// console.log(arrProduct)
console.log(arrProduct[1]['category'])


const bubblesort=(array=[],props)=>{
    for(let i=array.length-1;i > 0; i--){
        for(let j=0;j<i;j++){
            if(array[j][props]>array[j+1][props]){// klo pengen ubah besar kecil pake < ,kalo kecil besar >
                const temp=array[j]
                array [j]=array[j+1] 
                array [j+1]=temp
            }
        }
    }
    return array
}
console.log(bubblesort(arrProduct,'stock'))
// var outputprod=arrProduct.map((val)=>{
//     return (
//         ` <tr>
//             <td>${val.id}</td>
//             <td>${val.category}</td>
//             <td>${val.name}</td>
//             <td>${val.price}</td>
//             <td>${val.stock}</td>
//         </tr>`
//     )
// })


// for(i=0;i<arrProduct.length;i++){
   
// }
// arrProduct.forEach((val,index)=>{
   
// })

// // console.log(outputprod)
// var obj=  { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9}

// // console.log(obj.hasOwnProperty('dasdsad'),'ddd');




// for (const props in arr) {
//    console.log('propertyna '+props+ '  '+arr[props])
// }