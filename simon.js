let red = document.createElement("p")
red.id = "red"
document.getElementById("first").appendChild(red)

let blue = document.createElement("p")
blue.id = "blue"
document.getElementById("first").appendChild(blue)

let yellow = document.createElement("p")
yellow.id = "yellow"
document.getElementById("sec").appendChild(yellow)

let green = document.createElement("p")
green.id = "green"
document.getElementById("sec").appendChild(green)
let txt = document.createElement('h1')
txt.id = "txt"
document.body.appendChild(txt)

let txt2 = document.createElement('h1')
txt2.id = "demo"
document.body.appendChild(txt2)
let txt3 = document.createElement('h1')
txt3.id = "demo2"
document.body.appendChild(txt3)
red = document.getElementById("red")
blue = document.getElementById("blue")
yellow = document.getElementById("yellow")
green = document.getElementById("green")
txt = document.getElementById("txt")
txt2 = document.getElementById("demo")
txt3 = document.getElementById("demo2")
let link = document.createElement('a')
link.id = "link"
link.href = "simon.html"

document.body.appendChild(link)

link = document.getElementById("link")
