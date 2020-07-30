var obj={head:1,eyes:2,hands:2,ears:2,Mouth:1}
var obj1={
    kaki:2
}
// const {Mouth,eyes} =obj
// const head=obj.head
// console.log(Mouth)
// console.log(eyes)
// console.log(obj)
// obj={...obj,...obj1}
// console.log(obj)

var newarr=['gg','wp','bla']

var [,,bebas1]=newarr
console.log(bebas1)
// console.log(bebas2)
// console.log(beba3)

var newfunc= input => `manusia punya ${input.head} kepala dan ${input.eyes} mata `

var topostif=(cb,input)=>{
    if(input<0){
        return cb(input)
    }
    return input
}

var angka=(cba,a)=>cba(a)*2
var angka2=(a)=>a*3

var keliling=(cb,p,l)=>{
    return cb(p)+cb(l)//angka(4)+angka(5)
}

// var kelilingper=(p,l)=>new Promise((resolve,reject)=>{
//     var hasil=keliling((a)=>{
//         return topostif((b)=>{
//             return b*-1
//         },a)*2
//     },p,l)
//     // console.log(hasil)
//     if(hasil){
//         resolve(hasil)
//     }
// })

// kelilingper(-3,-4).then((res)=>{
//     console.log(res)
// })
console.log('aaa')

// keliling(-3,-5).then((res)=>{
//     res
// })
// var hasil=keliling((a)=>{
//     return topostif((b)=>{
//         return b*-1
//     },a)*2
// },-4,-5)

// console.log(hasil,'ddd')





var newarr=[1,2,3,4,5]
var filteraar=newarr.filter((val,index)=>  val%2===0 )

const filteralala=(arr,cb)=>{
    
}
// console.log(filteraar)
// console.log(filteralala(newarr,(val)=> val%2===0))

var arrbaru=newarr.map((terserah,indexterserah)=>{
    if(indexterserah%2){
        return terserah*3
    }else{
        return terserah*2
    }
})

// for(i=0;i<newarr.length;i++){
//     console.log(`${i}.${newarr[i]}`)
// }
// console.log('=========================')
// newarr.forEach((val,index)=>{
//     console.log(`${index}.${val}`)
// })



// console.log(newarr)
// console.log(arrbaru)


// console.log(newfunc({head:3,eyes:10}))
// console.log(newfunc(obj))//{head:1,eyes:2,hands:2,ears:2,Mouth:1}
//f(x)=x+3
//a=4
//b=3
//f(a)=7
//f(b)=6