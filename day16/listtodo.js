class Todo{
    constructor(a,b,h){
        this.kegiatan=a
        this.foto=b
        this.hari=h
    }
}

var indexedit=-1
var indexdelete=-1

var harihari=['pilihhari','Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']

var datakegiatan=[
    new Todo('lari trail','https://miro.medium.com/max/720/1*GlgYUkjsYquyI2ugNF5dBQ.jpeg',harihari[2]),
    new Todo('rampok','https://miro.medium.com/max/720/1*GlgYUkjsYquyI2ugNF5dBQ.jpeg',harihari[4]),
]



var tampilanawal=()=>{
    var tampilan=datakegiatan.map((val,index)=>{
        if(index==indexdelete){
           return ` <tr>
                <td>${index+1}</td>
                <td>${val.kegiatan}</td>
                <td><img src=${val.foto} alt=${val.kegiatan} height='150'/></td>
                <td>${val.hari}</td>
                <td><input type='button' value='Yes'/> &nbsp; <input type='button'value='Cancel' onclick='onCancledeleteclick()'/></td>
            </tr>`
        }
        if(index==indexedit){
            return `<tr>
                        <td>${index+1}</td>
                        <td>${val.kegiatan}</td>
                        <td><img src=${val.foto} alt=${val.kegiatan} height='150'/></td>
                        <td>${val.hari}</td>
                        <td><input type='button' value='save'/> &nbsp; <input type='button' value='cancel' onclick='onCancleditclick()'/></td>
                    </tr>`
        }
        return ` <tr>
                    <td>${index+1}</td>
                    <td>${val.kegiatan}</td>
                    <td><img src=${val.foto} alt=${val.kegiatan} height='150'/></td>
                    <td>${val.hari}</td>
                    <td><input type='button' onclick='onEditClick(${index})' value='edit'/> &nbsp; <input type='button' onclick='ondeleteClick(${index})' value='delete'/></td>
                </tr>`
    })
    document.getElementById('isi').innerHTML=tampilan.join('')
}

const onEditClick=(indexkiriman)=>{
    indexedit=indexkiriman
    tampilanawal()
}
const ondeleteClick=(indexkiriman)=>{
    indexdelete=indexkiriman
    tampilanawal()
}
const onCancledeleteclick=()=>{
    indexdelete=-1
    tampilanawal()
}

// document.getElementById('cancel').addEventListener(onCancledeleteclick)

const onCancleditclick=()=>{
    indexedit=-1
    tampilanawal()
}
const tampilanhari=()=>{
    const hari=harihari.map((val,index)=>{
        if(val=='pilihhari'){
            return `<option value=${index} selected hidden>${val}</option>`
        }
        return `<option value=${index}>${val}</option>`
    })
    document.getElementById('Hari').innerHTML=hari.join('')
}


const onaddClick=()=>{
    var kegiatan=document.getElementById('kegiatan').value
    var hari=document.getElementById('Hari').value
    var gambar=document.getElementById('gambar').value
    // datakegiatan.push({kegiatan,hari:harihari[hari],foto:gambar})
    datakegiatan.push(new Todo(kegiatan,gambar,harihari[hari]))
    tampilanawal()
}
tampilanawal()
tampilanhari()