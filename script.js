// const inputValue = document.getElementById("listNameInput")
const addBoard = document.getElementById("AddBoard")

let listIndex = 0;

function hiddenInput(){
  addBoard.style.display= 'none';
  const board = document.getElementById("board");
 
  const InputType = document.createElement("input");
  InputType.type= "text"
  board.appendChild(InputType)
  
var newButton = document.createElement('button');
newButton.textContent = 'Add Board';

board.appendChild(newButton);
newButton.addEventListener('click', () => {
  addData(InputType)
InputType.style.display="none";
newButton.style.display="none"; 
});
} 

function addData(InputTypeValue, addBoardValue) {
  addBoard.style.display= 'block';
  const board = document.getElementById("board");
  const list = document.createElement("div");
  list.className = "list";
  list.id = "list-" + listIndex;

  list.innerHTML = `
    <h3>${InputTypeValue.value}</h3>

    <div id="cards-${listIndex}" draggable="true">
    </div>
    <div class="add-card-button" onclick="addCard(${listIndex})">+ Add Card</div>
  `;

  board.appendChild(list);
  listIndex++;
 
}

function addList() {
  const board = document.getElementById("board");
  
  const list = document.createElement("div");
  list.className = "list";
  list.id = "list-" + listIndex;

  list.innerHTML = `
    <h3>${inputValue}</h3>

    <div id="cards-${listIndex}" draggable="true">
    </div>
    <div class="add-card-button" onclick="addCard(${listIndex})">+ Add Card</div>`;

  board.appendChild(list);
  listIndex++;
}

function addCard(index) {
  const cardsContainer = document.getElementById(`cards-${index}`);
  // const IType = document.createElement("input");
  // IType.type= "text"
  // list.appendChild(IType)

  const cardName = prompt("Enter card name:");

  if (cardName) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = cardName;
    card.onclick = function() {
      showCardDetails(cardName);
    };

    cardsContainer.appendChild(card);
  }
}

function showCardDetails(cardContent) {
  alert(`Card Details: ${cardContent}`);
}