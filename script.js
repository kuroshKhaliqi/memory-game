// const flip = function flip(e) {
//   e.target.style.transform = "rotateY(180deg)";
//   //check if cards match
//   //if theyt match leave them opened and disabled
//   //if the dont match it will flip over agian
//   console.log(e.target);
//   setTimeout(() => {
//     e.target.src = "basketball.jpeg";
//   }, 600);
// };
// let card1 = 0;
// let card2 = 0;
// const flip1 = function flip1(e) {
//   if (card1 === card2) {
//     card1.removeEventListener("click", flip1);
//   }
//   if (card1 === 0) {
//     card1 = document.getElementById("card1");
//   }
//   if (card2 === 0) {
//     card2 = document.getElementById("card1");
//   }
//   if (card1 !== card2) {
//     flip1(flip2);
//   }

//   e.target.style.transform = "rotateY(180deg)";
//   console.log(e.target);
//   setTimeout(() => {
//     e.target.src = "basketball.jpeg";
//   }, 600);
// };
// let card1Element = document.getElementById("card1");
// let img1Element = document.getElementById("img1");
// card1Element.addEventListener("click", flip1);

// const flip2 = function flip2(e) {
//   e.target.style.transform = "rotateY(180deg)";
//   console.log(e.target);
//   setTimeout(() => {
//     e.target.src = "bulbOfLight.jpeg";
//   }, 600);
// };

// let card2Element = document.getElementById("card2");
// let img2Element = document.getElementById("img2");
// card2Element.addEventListener("click", flip2);
let fish1Element = document.getElementById("fish1");
let fish2Element = document.getElementById("fish2");
let computer1Element = document.getElementById("computer1");
let computer2Element = document.getElementById("computer2");
let basketball1Element = document.getElementById("basketball1");
let basketball2Element = document.getElementById("basketball2");
let dora1Element = document.getElementById("dora1");
let dora2Element = document.getElementById("dora2");
let hershys1Element = document.getElementById("hershys1");
let hershys2Element = document.getElementById("hershys2");
let bulbOfLight1Element = document.getElementById("bulbOfLight1");
let bulbOfLight2Element = document.getElementById("bulbOfLight2");
let count = 0;
let card1;
let card2;
let hasFlipedCard = false;
function disable(e) {}
function handleClick(event) {
  //flipping the card
  event.target.style.transform = "rotateY(180deg)";
  console.log(event.target);
  setTimeout(() => {
    event.target.src = event.target.className + ".jpeg";
  }, 600);
  //checking if we dont have flipped card
  if (hasFlipedCard === false) {
    hasFlipedCard = true;
    card1 = this;
    return;
  }
  card2 = this;
  hasFlipedCard = false;
  if (card1.className === card2.className) {
    card1.addEventListener("click", disable);
    card2.addEventListener("click", disable);
    count = count + 1;
    if (count === 6) {
      alert("YOU WON");
    }
    return;
  }
  //flipping over
  setTimeout(() => {
    card1.style.transform = "rotateY(180deg) scaleX(-1)";
    card2.style.transform = "rotateY(180deg) scaleX(-1)";
    setTimeout(() => {
      card1.src = "x.jpeg";
      card2.src = "x.jpeg";
    }, 350);
  }, 1000);
}
fish1Element.onclick = handleClick;
fish2Element.onclick = handleClick;
computer1Element.onclick = handleClick;
computer2Element.onclick = handleClick;
basketball1Element.onclick = handleClick;
basketball2Element.onclick = handleClick;
hershys1Element.onclick = handleClick;
hershys2Element.onclick = handleClick;
dora1Element.onclick = handleClick;
dora2Element.onclick = handleClick;
bulbOfLight1Element.onclick = handleClick;
bulbOfLight2Element.onclick = handleClick;
