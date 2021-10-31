document.addEventListener('DOMContentLoaded',() => {

    const cardArray = [
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenID = [];
    var cardsWon = [];


    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            var card  = document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }  
    
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionsOneID = cardsChosenID[0];
        const optionsTwoID = cardsChosenID[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match");
            cards[optionsOneID].setAttribute('src','images/white.png');
            cards[optionsTwoID].setAttribute('src','images/white.png');
            cardsWon.push(cardsChosen);
        }
        else {
            cards[optionsOneID].setAttribute('src','images/blank.png');
            cards[optionsTwoID].setAttribute('src','images/blank.png');
            alert('Sorry, try again')
        }
        cardsChosen = [];
        cardsChosenID = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations!'
        }
    }

    function flipcard() {
        var cardID = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardID].name);
        cardsChosenID.push(cardID);
        this.setAttribute('src', cardArray[cardID].img);
        if(cardsChosenID.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})