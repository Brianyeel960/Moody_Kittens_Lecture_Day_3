let catName = prompt("Please name your cat")

// let catName = "Fido"

document.getElementById("cat-name").innerText = catName

let catMood = 5

drawCatMood()
showMood()



function drawCatMood() {
  document.getElementById("cat-mood").innerText = catMood
}

function petCat() {
  let changeMoodArray = [1, -1]
  let randomIndex = Math.round(Math.random())
  let upOrDown = changeMoodArray[randomIndex]
  // console.log(upOrDown)
  catMood += upOrDown
  // console.log(catMood)
  drawCatMood()
  showMood()
}

function giveCatnip() {
  catMood = 5
  drawCatMood()
  showMood()
}

function showMood() {
  let kittenHTMLElement = document.getElementById("cat-image")

  kittenHTMLElement.classList.remove(...kittenHTMLElement.classList)
  console.log(kittenHTMLElement)
  if (catMood < 0) {
    kittenHTMLElement.classList.add("gone")
  }
  else if (catMood < 3) {
    kittenHTMLElement.classList.add("angry")
    // console.log(...kittenHTMLElement.classList)
  }
  else if (catMood < 6) {
    kittenHTMLElement.classList.add("neutral")
    // console.log(...kittenHTMLElement.classList)
  }
  else if (catMood < 9) {
    kittenHTMLElement.classList.add("happy")
    console.log(kittenHTMLElement)
  }
  else {
    kittenHTMLElement.classList.add("exuberant")
  }
}


