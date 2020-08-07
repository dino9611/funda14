const fibo=(n)=>{
    if(n<3){
        return 1
    }else{
        return fibo(n-1)+fibo(n-2)
    }
}
// fibo(3)//2
// fibo(4)//3
// fibo(5)//5
// fibo(6)//5+3=8

var x = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]

const bubblesort=(array=[])=>{
    var angka=0
    for(let i=array.length;i > 0; i--){
        for(let j=0;j<i;j++){
            if(array[j]<array[j+1]){// klo pengen ubah besar kecil pake < kalo lebih besar >
                const temp=array[j] //6000 ke temp
                array [j]=array[j+1] //array 0 34 [34,34,....]
                array [j+1]=temp//array[34,6000]
            }
            angka++
        }
        angka++
    }
    console.log(angka)
    return array
}
console.log(bubblesort(x))


