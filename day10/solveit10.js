class SoalSoal{
    constructor(a,b,c){
        this.soal=a
        this.jawaban=b
        this.pilihan=c
    }
}

let soal=[
    new SoalSoal('Siapa presiden ketiga RI?',0,['bj.habibie','abdurrahman wahid','megawati','sby']),
    new SoalSoal('berikut adalah nama bahasa pemrograman',1,['python','html','typescript','javascript']),
    new SoalSoal('apakah liverpool sudah juara?',2,['belum','next year','udah','masih puasa']),
    new SoalSoal('jagoan giannnis atau kawhi',3,['giannis lebih','kawhi lebih','imbang','nggak duaduanya'])
]

const tampilkanSoal=()=>{ 
    var output=''
    for(let i=0;i<soal.length;i++){
        output+=`<li>
                    ${soal[i].soal} <br>
                    <input type="radio" name="soal${i}" value="0"> ${soal[i].pilihan[0]}
                    <input type="radio" name="soal${i}" value="1">${soal[i].pilihan[1]}
                    <input type="radio" name="soal${i}" value="2"> ${soal[i].pilihan[2]}
                    <input type="radio" name="soal${i}" value="3"> ${soal[i].pilihan[3]}
                </li>`
    }
    document.querySelector('ol').innerHTML=output
}

tampilkanSoal()

const cekaja=()=>{
    var skor=0
    // for(let i=0;i<soal.length;i++){
    //     soal[i]===val
    //     index===i
    // }
    var inputjawaban
    soal.forEach((val,index)=>{
        inputjawaban=document.getElementsByName('soal'+index)
            if(inputjawaban[val.jawaban].checked){
                skor+=25
            }
    })
    document.getElementById('output').innerHTML=skor
}

