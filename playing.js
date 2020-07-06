//this is working but only goes to 10.
let actual = []
let person = []
var nummy = 0

function get_one(){
  red.innerHTML =""
  red.style.backgroundColor = "red"
  blue.innerHTML =""
  blue.style.backgroundColor = "blue"
  yellow.innerHTML =""
  yellow.style.backgroundColor = "gold"
  green.innerHTML =""
  green.style.backgroundColor = "green"
  let num1 = Math.floor(Math.random() * 4)
  nummy = actual.length -1
  while (num1 === actual[nummy]){
    num1 = Math.floor(Math.random() * 4)
  }

  if (num1 === 0){
    red.innerHTML = "this"
    red.style.backgroundColor = "pink"
    setTimeout(function(){
      red.innerHTML =""
      red.style.backgroundColor = "red"
    }, 1000);
  }
  if (num1 === 1){
    blue.innerHTML = "this"
    blue.style.backgroundColor = "Aqua"
    setTimeout(function(){
      blue.innerHTML =""
      blue.style.backgroundColor = "blue"
    }, 1000);
  }
  if (num1 === 2){
    yellow.innerHTML = "this"
    yellow.style.backgroundColor = "yellow"
    setTimeout(function(){
      yellow.innerHTML =""
      yellow.style.backgroundColor = "gold"
    }, 1000);
  }
  if (num1 === 3){
    green.style.backgroundColor = "Lime"
    green.innerHTML = "this"
    setTimeout(function(){
      green.innerHTML =""
      green.style.backgroundColor = "green"
    }, 1000);
  }
  actual.push(num1)
}

get_one()


var count = -1

var my_var = 0
function thing(){
person = []
count = -1

my_var = setInterval(myTimer ,1000);

}
var t = 2
function myTimer() {

  if (count === 0){
    txt.innerHTML = ""
  }

  num = actual[count]
  red.innerHTML =""
  red.style.backgroundColor = "red"
  blue.innerHTML =""
  blue.style.backgroundColor = "blue"
  yellow.innerHTML =""
  yellow.style.backgroundColor = "gold"
  green.innerHTML =""
  green.style.backgroundColor = "green"
  if (num === 0){
    red.innerHTML = "this"
    red.style.backgroundColor = "pink"

  }
  if (num === 1){
    blue.innerHTML = "this"
    blue.style.backgroundColor = "Aqua"

  }
  if (num === 2){
    yellow.innerHTML = "this"
    yellow.style.backgroundColor = "yellow"

  }
  if (num === 3){
    green.style.backgroundColor = "Lime"
    green.innerHTML = "this"

  }
  count ++

  if (count === t){
  clearInterval(my_var)
  get_one()
  }

}







var choice = 0

red.onmousedown = function(){
  red.style.backgroundColor = "pink"
  person.push(0)

  choice = person.length-1
  if (person[choice] === actual[choice] && person.length === actual.length && t === 10){
    txt.innerHTML = "you won the entire thing!"
  }
  if (person[choice] === actual[choice] && person.length === actual.length){
    if (actual.length === 1){
      t = 2
    }
    if (actual.length === 2){
      t = 3
    }
    if (actual.length === 3){
      t = 4
    }
    if (actual.length === 4){
      t = 5
    }
    if (actual.length === 5){
      t = 6
    }
    if (actual.length === 6){
      t = 7
    }
    if (actual.length === 7){
      t = 8
    }
    if (actual.length === 8){
      t = 9
    }
    if (actual.length === 9){
      t = 10
    }
    thing()
    txt.innerHTML = "yay"



  }else if (person[choice] === actual[choice]){

  }else{
    txt.innerHTML = "wrong"
    link.innerHTML = "press here to try again"
  }


}

red.onmouseup = function(){
  red.style.backgroundColor = "red"
}

blue.onmousedown = function(){
  blue.style.backgroundColor = "Aqua"
  person.push(1)
  choice = person.length-1
  if (person[choice] === actual[choice] && person.length === actual.length && t === 10){
    txt.innerHTML = "you won the entire thing!"
  }
  if (person[choice] === actual[choice] && person.length === actual.length){
    if (actual.length === 1){
      t = 2
    }
    if (actual.length === 2){
      t = 3
    }
    if (actual.length === 3){
      t = 4
    }
    if (actual.length === 4){
      t = 5
    }
    if (actual.length === 5){
      t = 6
    }
    if (actual.length === 6){
      t = 7
    }
    if (actual.length === 7){
      t = 8
    }
    if (actual.length === 8){
      t = 9
    }
    if (actual.length === 9){
      t = 10
    }
    thing()
    txt.innerHTML = "yay"



  }else if (person[choice] === actual[choice]){

  }else{
    txt.innerHTML = "wrong"
    link.innerHTML = "press here to try again"
  }

}

blue.onmouseup = function(){
  blue.style.backgroundColor = "Blue"
}

yellow.onmousedown = function(){
  yellow.style.backgroundColor = "yellow"
  person.push(2)
  choice = person.length-1
  if (person[choice] === actual[choice] && person.length === actual.length && t === 10){
    txt.innerHTML = "you won the entire thing!"
  }
  if (person[choice] === actual[choice] && person.length === actual.length){
    if (actual.length === 1){
      t = 2
    }
    if (actual.length === 2){
      t = 3
    }
    if (actual.length === 3){
      t = 4
    }
    if (actual.length === 4){
      t = 5
    }
    if (actual.length === 5){
      t = 6
    }
    if (actual.length === 6){
      t = 7
    }
    if (actual.length === 7){
      t = 8
    }
    if (actual.length === 8){
      t = 9
    }
    if (actual.length === 9){
      t = 10
    }
    thing()
    txt.innerHTML = "yay"



  }else if (person[choice] === actual[choice]){

  }else{
    txt.innerHTML = "wrong"
    link.innerHTML = "press here to try again"
  }

}

yellow.onmouseup = function(){
  yellow.style.backgroundColor = "Gold"
}

green.onmousedown = function(){
  green.style.backgroundColor = "Lime"
  person.push(3)
  choice = person.length-1
  if (person[choice] === actual[choice] && person.length === actual.length && t === 10){
    txt.innerHTML = "you won the entire thing!"
  }
  if (person[choice] === actual[choice] && person.length === actual.length){
    if (actual.length === 1){
      t = 2
    }
    if (actual.length === 2){
      t = 3
    }
    if (actual.length === 3){
      t = 4
    }
    if (actual.length === 4){
      t = 5
    }
    if (actual.length === 5){
      t = 6
    }
    if (actual.length === 6){
      t = 7
    }
    if (actual.length === 7){
      t = 8
    }
    if (actual.length === 8){
      t = 9
    }
    if (actual.length === 9){
      t = 10
    }
    thing()
    txt.innerHTML = "yay"



  }else if (person[choice] === actual[choice]){

  }else{
    txt.innerHTML = "wrong"
    link.innerHTML = "press here to try again"
  }

}

green.onmouseup = function(){
  green.style.backgroundColor = "Green"
}
