
const checkpass2=(input)=>{
    var input1=input.replace(' ','')
    if(input1.length<6){
        return 'input harus enam character'
    }
    var angka=false
    var huruf=false
    for(var i=0;i<input1.length;i++){
        if(isNaN(input1[i])){
            huruf=true
        }else{
            angka=true
        }
    }
    return angka&&huruf?'berhasil':angka?'kurang huruf':'kurang angka'
}


// const a=[2,5,6,6,3]
// const max=Math.max(...a)
// var newarr=a.filter((val)=>val!==max)
// console.log(newarr)
// console.log(newarr.sort((a,b)=>a-b)[newarr.length-1])
var a='a'
// console.log(ab)
try{
    console.log(ab)
}catch(error){
    console.log('aaa')
    // console.log(error)
    throw(error)
}
finally{
    console.log('jajaja')
}
    
        console.log('sss')