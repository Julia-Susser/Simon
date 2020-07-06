//the problem right now is that it shows u only the first one and then the new one
let actual = [0]
let person = []

function get_one(){

  let num1 = Math.floor(Math.random() * 4)
  if (num1 === 0){

    setTimeout(function(){

      red.innerHTML ="this"
      red.style.backgroundColor = "pink"


    }, 100);
    setTimeout(function(){

      red.innerHTML =""
      red.style.backgroundColor = "red"


    }, 1000);
  }
  if (num1 === 1){

    setTimeout(function(){

      blue.innerHTML ="this"
      blue.style.backgroundColor = "Aqua"


    }, 100);
    setTimeout(function(){

      blue.innerHTML =""
      blue.style.backgroundColor = "blue"


    }, 1000);
  }
  if (num1 === 2){

    setTimeout(function(){

      yellow.innerHTML ="this"
      yellow.style.backgroundColor = "yellow"


    }, 100);
    setTimeout(function(){

      yellow.innerHTML =""
      yellow.style.backgroundColor = "gold"


    }, 1000);
  }
  if (num1 === 3){

    setTimeout(function(){

      green.innerHTML ="this"
      green.style.backgroundColor = "lime"


    }, 100);
    setTimeout(function(){

      green.innerHTML =""
      green.style.backgroundColor = "green"


    }, 1000);
  }
  actual.push(num1)
}

get_one()

var num = 0








function thing(actual){
  person = []
  for (var i = 0; i < actual.length; i++){
    num = actual[i]

    if (num === 0){

      setTimeout(function(){

        red.innerHTML ="this"
        red.style.backgroundColor = "pink"


      }, 100);
      setTimeout(function(){

        red.innerHTML =""
        red.style.backgroundColor = "red"


      }, 1500);
    }
    if (num === 1){

      setTimeout(function(){

        blue.innerHTML ="this"
        blue.style.backgroundColor = "Aqua"


      }, 500);
      setTimeout(function(){

        blue.innerHTML =""
        blue.style.backgroundColor = "blue"


      }, 1500);
    }
    if (num === 2){

      setTimeout(function(){

        yellow.innerHTML ="this"
        yellow.style.backgroundColor = "yellow"


      }, 500);
      setTimeout(function(){

        yellow.innerHTML =""
        yellow.style.backgroundColor = "gold"


      }, 1500);
    }
    if (num === 3){

      setTimeout(function(){

        green.innerHTML ="this"
        green.style.backgroundColor = "lime"


      }, 500);
      setTimeout(function(){

        green.innerHTML =""
        green.style.backgroundColor = "green"


      }, 1500);
    }


  }

}






























var choice = 0

red.onmousedown = function(){
  red.style.backgroundColor = "pink"


}

red.onmouseup = function(){
  red.style.backgroundColor = "red"
  person.push(0)

  choice = person.length-1
  if (person[choice] === actual[choice] && person.length === actual.length){
    txt.innerHTML = "yay"
    thing(actual)




  }else if (person[choice] === actual[choice]){
    txt.innerHTML = "first"
  }else{
    txt.innerHTML = "wrong"
  }
txt2.innerHTML = actual
txt3.innerHTML = person
}

blue.onmousedown = function(){
  blue.style.backgroundColor = "Aqua"

}

blue.onmouseup = function(){
  blue.style.backgroundColor = "Blue"
  person.push(1)

  choice = person.length-1
  if (person[choice] === actual[choice] && person.length === actual.length){
    thing(actual)
    txt.innerHTML = "yay"



  }else if (person[choice] === actual[choice]){
    txt.innerHTML = "first"
  }else{
    txt.innerHTML = "wrong"
  }
txt2.innerHTML = actual
txt3.innerHTML = person
}

yellow.onmousedown = function(){
  yellow.style.backgroundColor = "yellow"

}

yellow.onmouseup = function(){
  yellow.style.backgroundColor = "Gold"
  person.push(2)

  choice = person.length-1
  if (person[choice] === actual[choice] && person.length === actual.length){
    thing(actual)
    txt.innerHTML = "yay"



  }else if (person[choice] === actual[choice]){
    txt.innerHTML = "first"
  }else{
    txt.innerHTML = "wrong"
  }
txt2.innerHTML = actual
txt3.innerHTML = person
}

green.onmousedown = function(){
  green.style.backgroundColor = "Lime"

}

green.onmouseup = function(){
  green.style.backgroundColor = "Green"
  person.push(3)

  choice = person.length-1
  if (person[choice] === actual[choice] && person.length === actual.length){
    thing(actual)
    txt.innerHTML = "yay"



  }else if (person[choice] === actual[choice]){
    txt.innerHTML = "first"
  }else{
    txt.innerHTML = "wrong"
  }
txt2.innerHTML = actual
txt3.innerHTML = person
}
