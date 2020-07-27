// var angka=60
// var angkab=90
// var nama='robin'
// if(angka >= 60){
//     console.log('halo')
//     nama='niko'
//     // console.log(nama)
//     if(angkab>69){
//         console.log('gg')
//         nama='oki'
//     }
//     if(angkab>80){
//         console.log('bail')
//         nama='salim'
//     }
//     console.log("mantap")
// }else if(angka==20){
//     console.log('tidak')
//     nama='nibor'
// }

// console.log(nama)



// console.log('sesuatu')

// var job='Sopir'.toLowerCase()
// switch (job) {
//     case 'guru':
//         console.log('kerjaannya ngajar')       
//         break;
//     case 'sopir':
//         console.log('kerjaannya nyetir')       
//         break;
//     case 'polisi':
//         console.log('kerjaannya nilang')
//         break
//     default:
//         console.log('ada aja kerjaanya')
//         break;
// }
// if(job==='sopir'){
//     console.log('kerjaannya ngajar')       
// }else if(job==='guru'){

// }else if(job ==='polisi'){

// }else{
//     console.log('ada aja kerjaanya')

// }
var massa=70
var tinggi=1.73
var imt=massa/(tinggi**2)

if(imt<=18.5){
    console.log('berat anda kurang')
}else if(imt>18.5&&imt<25){
    console.log('ideal')
}else if(imt>=25&&imt<30){
    console.log('berlebih')
}else if(imt>=30&&imt<40){
    console.log('sangat berlebih')
}else{
    console.log('obesitas')
}