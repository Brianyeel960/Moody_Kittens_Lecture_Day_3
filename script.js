/* put a kitten on the screen
allow my user to name their kitten
show my user the mood of their kitten
allow the user to pet the cat -- will change the cat's mood
allow the user to give the cat catnip to cheer it up -- will change
show user the cat's mood with some color
*/

console.log(document)

let catName = prompt ("please name your cat")
// console.log(catName)


let catNameElement = document.getElementById("catname")

// console.log(catNameElement)

catNameElement. innerText =catName

let catMood = 5
//  We draw the cat's mood once the page loads
function drawCatMood() {
document. getElementById("cat-mood"). innerText = catMood + "/10"
}
function pettingTheCat(){

// TODO randomise the mood change (either add one or subtract the mood)
let changeMoodArray =[1, -2]
let randomIndex = math.round(math.random())
let upOrDown = changeMoodArray [randomIndex]
catMood = catMood + 1
// console.log("cat's mood:", catMood)
// TODO draw the mood to the page whenever it changes
drawCatMood()
}

function giveALotOfCatnip() {
// set the cat's mood back to netural (5)
// draw the mood to the page
catmood = 5
drawCatMood()
}
// TODO if the cat's mood goes below 0, GAME OVER sign


// function that checks the cat's mood number and add's a class depending on that mood
Id("cat")let catImageElement = document.getElementBy
function moodColorchange(){
    catImageElement.classList.add("nuetral")
}
else if (catMood < 5 && catMood > 6) {
    catImageElement.classList. add ("angry")
}
else if
    catImageElement