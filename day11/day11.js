// Init value
var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
  ];
  
// init value
var arrCategory = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

let tampilkanawal=(arr)=>{
    var outputprod=arr.map((val,index)=>{
        return (
            ` <tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
            </tr>`
        )
    }).join('')
    var outputcategory=arrCategory.map((val)=>{
        return (
            `<option value='${val}'>${val}</option>`
        )
    }).join('')
    document.getElementById('categoryFilter').innerHTML=outputcategory
    document.getElementById('categoryInput').innerHTML=outputcategory
    document.getElementById('render').innerHTML=outputprod
}
let funInputData=()=>{
    var _name = document.getElementById("nameInput").value;
    var _price = document.getElementById("priceInput").value;
    var _category = document.getElementById("categoryInput").value;
    var _stock = document.getElementById("stockInput").value;
    // create date instance
    var time = new Date().getTime()
    arrProduct.push(
        { 
            id: time,
            category:_category , 
            name: _name, 
            price: _price, 
            stock : _stock
        },
    )
    document.getElementById("nameInput").value='';
    document.getElementById("priceInput").value='';
    document.getElementById("categoryInput").value='';
    document.getElementById("stockInput").value='';
    tampilkanawal()
}

let filter=()=>{
    var nameinput=document.getElementById('keyword').value
    var minprice=document.getElementById('min').value
    var maxprice=document.getElementById('max').value
    var category=document.getElementById('categoryFilter').value
    var newarr=arrProduct.filter((val)=>{
        var inputname=val.name.toLowerCase().includes(nameinput.toLowerCase())
        if(!nameinput){
            inputname=true //kalo inputnya kosong
        }
        var inputprice=val.price>=minprice&&val.price<=maxprice
        if(!minprice||!maxprice){
            inputprice=true// klo inputannya kosong
        }
        var inputcategory=val.category==category&&category!=='All'
        if(category=='All'){
            inputcategory=true //klo inputannta kosong
        }
        return inputname && inputprice && inputcategory //true 
    })
    document.getElementById('render').innerHTML=Showfilter(newarr).join('')
}
let funFilterName=()=>{
    var nameinput=document.getElementById('keyword').value
    var newarr= arrProduct.filter((val)=>{
        return val.name.toLowerCase().includes(nameinput.toLowerCase())
    })
    document.getElementById('render').innerHTML=Showfilter(newarr).join('')

}
let funFilterPrice=()=>{
    var minprice=document.getElementById('min').value
    var maxprice=document.getElementById('max').value
    var newarr=arrProduct
    if(minprice!='' && maxprice!=''){
        newarr=arrProduct.filter((val)=>val.price>=minprice&&val.price<=maxprice)
    }
    document.getElementById('render').innerHTML=Showfilter(newarr).join('')
}
let funFilterCategory=()=>{
    var category=document.getElementById('categoryFilter').value
    // document.getElementById('categoryFilter').value
    console.log(category)
    var newarr
    if(category!=='All'){
        console.log('ass')
        newarr= arrProduct.filter((val)=>{
            return val.category==category&&category!=='All'
        })
    }else{
        newarr= arrProduct
        console.log('aaa')
    }
    document.getElementById('render').innerHTML=Showfilter(newarr).join('')

}
function Showfilter(filterarr){
    return filterarr.map((val,index)=>{
        return(
            `<tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
            </tr>`
        )
     })
 }
tampilkanawal(arrProduct)