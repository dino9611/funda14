var obj={
    nama:['dino','jijij'],
    umur:23,
    naamaumur(){
        return this.nama+this.umur
    }
}
// console.log(this)
// console.log(obj.nama)
// var aaa='nama'
obj.nama.push('doodo')
console.log(obj.nama)
console.log(obj.naamaumur)
class Human{
    constructor(a,b,c){
        this.nama=a
        this.age=b
        this.job=c
    }

    buatkalimat=()=>{
        return 'nama saya '+ this.nama + ' umur '+this.age
    }
}



//ini belajar extends
class Student extends Human{
    constructor(a,b,_nilai){
        super(a,b)
        this.nilai=_nilai
    }
}

class Guru extends Human{
    constructor(a,b,_job){
        super(a,b)
        this.kerja=_job
    }
}

var dino=new Guru('dino',23,'guru')
var robin=new Student('robin',19,60)

console.log(dino)
console.log(robin)
