// if(Number('1')){
//     console.log('aa')
// }

const kekuatan=(input='')=>{
    var huruf='abcdefghijklmnopqrstuvwxyz'.split('')
    var output=0
    var hurufbesar=false
    var hurufkecil=false
    var angka=false
    for(let i=0;i<input.length;i++){
        for (let j = 0; j < huruf.length; j++) {
            const element = huruf[j];
            if(input[i]===element&& !hurufkecil){
                output++
                hurufkecil=true// coding yang didalam if hanya dieksekusi sekali
            }else if(input[i]===element.toUpperCase()&&!hurufbesar){
                output++
                hurufbesar=true
            }
        }
        if(Number(input[i])&&!angka){
            output++
            angka=true
        }
    }
    return output ===3?'Kuat':output===2?'sedang':'lemah'

}






// console.log(kekuatan('1BAaAaa'))//3 kuat
// console.log(kekuatan('bBaaa'))//2 sedang
// console.log(kekuatan('1aaaa'))//2 sedang
// console.log(kekuatan('asdsadsad'))//1 lemah
// console.log(kekuatan('1111111'))//1 lemah
// console.log(kekuatan('AAAAAAA'))//1 lemah



// *
// 12
// ***
// 3456
// *****


function buatsegitiga(baris){
    var output=''
    var angka=1
    for (let i = 0; i < baris; i++) {
        for (let j = 0; j <= i; j++) {
            if(i%2==1){
                output+=angka
                angka++
            }else{
                output+='*'
            }
        }
        output+='\n'
    }
    return output
}
console.log(buatsegitiga(5))


//   1
//  *3*
// *5*7*

const segitagabesar=(baris)=>{
    var output=''
    var angka=1
    for (let i = 0; i < baris; i++) {
        for(j=i;j<baris;j++){
            output+=' '
        }
        for(k=0;k<=i;k++){
            if(k==0&&i==0){
                output+=angka
                angka+=2
            }else if(k==0){
                output+='*'
            }else{
                if(k%2==0){
                    angka+='*'
                }else{
                    output+=angka
                    angka+=2
                }
            }
        }
        for(l=0;l<i;l++){
            output+='*'
        }
        output+='\n'
    }
    return output
}

const huruftengah=(input)=>{
    var strlen=input.length
    if(strlen%2==0){
        return input[strlen/2-1]+input[strlen/2]
    }else{
        return input[(strlen+1)/2-1]
    }
}


// hitungvocal('abcdefghi')//3


// mengubahdata(`1 dino 12 jl.b
// 2 robin 123 jl.a
// 3 hasia 234 jl.rere`)

var data=`1 dino 12 jl.b
2 robin 123 jl.a
3 hasia 234 jl.rere`

var a=data.split('\n').map((val)=>{
    var a=val.split(' ')
    return 
})
// console.log(a)


// console.log(huruftengah('abc'))//b
// console.log(huruftengah('abcd'))//bc
