function requestAjax(callback){
    
    // inisialisasi library XML Http Request
    var xhr = new XMLHttpRequest();
  
    // set target request
    xhr.open('GET','https://jsonplaceholder.typicode.com/users/1')
  
    // terapkan callback
    xhr.onload = function(){
      if(xhr.status === 200){
        callback(xhr.responseText)
      }else{
        callback('Failed')
      }
    }
  
    // mulai request
    xhr.send()
    
  }
  
  function showResult(data){
    if (data != 'Failed'){
      //tampilkan Data
      data=JSON.parse(data)
      console.log(data)
    }
  }
  
  requestAjax(showResult)