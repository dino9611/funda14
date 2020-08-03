let arrProduct=[],arrAnimal=[]



const submitProduct=(e)=>{
    e.preventDefault()
    var nama=document.getElementById('name').value
    var price=document.getElementById('price').value
    // var kondisiaw=document.getElementsByName('condition')
    // var kondisi=kondisiaw[0].checked?kondisiaw[0].value:kondisiaw[1].value
    var kondisi=document.querySelector('input[name=condition]:checked').value
    var kategori=document.getElementById('category').value

    // console.log(nama,price,kondisi,kategori)
    var obj={nama,price,kondisi,kategori}
    // console.log(obj)
    arrProduct.push(obj)
    // console.log(arrProduct)
    tampilkanProduct()
}

const submitAnimal=(e)=>{
    e.preventDefault()
    var nama=document.getElementById('nameH').value
    var price=document.getElementById('priceH').value
    var sex=document.querySelector('input[name=sex]:checked').value
    var stat=document.querySelector('input[name=stat]:checked').value


    // console.log(nama,price,kondisi,kategori)
    var obj={nama,price,sex,stat}
    // console.log(obj)
    arrAnimal.push(obj)
    // console.log(arrProduct)
    tampilkanAnimal()
}

const tampilkanProduct=()=>{
    var output=arrProduct.map((val,index)=>{
        return (
            `<tr>
                <td>${val.nama}</td>
                <td>${val.price}</td>
                <td>${val.kondisi}</td>
                <td>${val.kategori}</td>
            </tr>`
        )
    })
    document.getElementById('product').innerHTML=output.join('')
}

const tampilkanAnimal=()=>{
    var output=arrAnimal.map((val,index)=>{
        return (
            `<tr>
                <td>${val.nama}</td>
                <td>${val.price}</td>
                <td>${val.sex}</td>
                <td>${val.stat}</td>
            </tr>`
        )
    })
    document.getElementById('animal').innerHTML=output.join('')
}