var count = 0

var my_var = 0
function thing(){
my_var = setInterval(myTimer ,1000);
}

function myTimer() {
  var d = new Date();
  count ++
  if (count === 4){
  clearInterval(my_var)
  }
  document.getElementById("demo").innerHTML = count;
}
thing()
