var namakelas=[
    {nama:'bingris',guru:"pak a"},
    {nama:'bindo',guru:"pak b"},
]

var output=namakelas.map((val)=>{
    return val.nama+val.guru
})

// console.log(namakelas)
// console.log(output)

// for(let i=0;i<namakelas.length;i++){
//     namakelas[i]
//     i
// }

namakelas.forEach((bebas,a)=>{
   console.log(bebas,a)
})