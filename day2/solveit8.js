let x=120
let keca=60
let kecb=40


var jamtominute=(120/(60+40))*60
var jam=Math.floor(jamtominute/60)
var menit=jamtominute%60
var jaminit=9
var menitinit=0
console.log('bertabrakan jam '+(jaminit+jam)+'.'+(menitinit+menit)+' WIB')


//solveit4
var totalumur=49
var rasioadanb=0.4
var budi=49/(0.4+1)
var andi=totalumur-budi
console.log('budi',budi+2)
console.log('andi',andi+2)


//4
var harihari=485
var tahun=Math.floor(harihari/360)
var sisa=485%360
var bulan=Math.floor(sisa/30)
sisa%=30//sisa=sisa%30
var minggu=Math.floor(sisa/7)
sisa%=7
console.log(tahun,bulan,minggu,sisa)
