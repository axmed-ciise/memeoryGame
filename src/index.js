// card option 
const cardArray = [ 
    {
        name: 'fries',
        img: 'src/images/fries.png'

    },
    {
        name: 'cheeseburger',
        img: 'src/images/cheeseburger.png'
    },
    {
       name: 'ice-cream' ,
       img: 'src/images/ice-cream.png'
    },
    {
       name: 'pizza' ,
       img: 'src/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'src/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'src/images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'src/images/fries.png'

    },
    {
        name: 'cheeseburger',
        img: 'src/images/cheeseburger.png'
    },
    {
       name: 'ice-cream' ,
       img: 'src/images/ice-cream.png'
    },
    {
       name: 'pizza' ,
       img: 'src/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'src/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'src/images/hotdog.png'
    }
]

cardArray.sort(() => 0.5-Math.random())
console.log(cardArray)
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardChosenId = []
let cardWon = []

function createBoard(){
    for(let i = 0; i< cardArray.length; i++){
const card = document.createElement('img')
card.setAttribute('src', 'src/images/blank.png' )
card.setAttribute('data-id', i)
card.addEventListener('click', flipCard)
grid.appendChild(card)
    }
}

function flipCard(){
let cardId =  this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if(cardsChosen.length === 2){
setTimeout(checkForMatch, 500)
}
console.log(cardChosenId)
}
function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0] 
    const optionTwoId = cardChosenId[1]

    if( optionOneId == optionTwoId ){
        alert('you have clicked the same twice')
        cards[optionOneId].setAttribute('src', 'src/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
 }else if(cardsChosen[0] === cardsChosen[1]){
      alert('you found a match')
      cards[optionOneId].setAttribute('src', 'src/images/white.png')
        cards[optionTwoId].setAttribute('src', 'src/images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardsChosen)
        
 }else{
    cards[optionOneId].setAttribute('src', 'src/images/blank.png')
    cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
    alert('sorry, you didnot find the right one try again')

 }
 cardsChosen = []
 cardChosenId = []
 resultDisplay.textContent = cardWon.length
 if (cardWon.length == cardArray.length/2){
     resultDisplay.textContent = 'congratulation you have won'
 }

 console.log(cardsChosen)
 console.log(cardWon)


}
  createBoard()