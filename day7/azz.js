const majuhuruf=(kata='',langkah)=>{
    const alpha='abcdefghijklmnopqrstuvwxyz'.split('')
    const alphabesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    var output=''
    for(let i=0;i<kata.length;i++){
        if(kata[i]==' '){
            output+=' '
            continue
        }
        for(let j=0;j<alpha.length;j++){
            if(kata[i]===alpha[j]||kata[i]===alphabesar[j]){
                var index=j
                index+=langkah
                index%=26
                // output+=kata[i]===alpha[j]?alpha[index]:alphabesar[index]
                if(kata[i]===alpha[j]){
                    output+=alpha[index]
                }else{
                    output+=alphabesar[index]
                }
                break
            }
        }
    }
    return output
}

//26%25

console.log(majuhuruf('AA zz',4))

// dari aazz maju returnnya string bbaa