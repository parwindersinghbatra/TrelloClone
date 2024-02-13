const br = document.createElement('br');
const addBoard = document.getElementById("AddBoard")

const newBoard = document.querySelectorAll(".board")

let listIndex = 0;

function hiddenInput(){
  addBoard.style.display= 'none';
  // const board = document.getElementById("board");
  const inputDiv = document.createElement("p");
  const btnDiv = document.createElement("p");
  
  inputDiv.className="divs"
  btnDiv.className="divs"
  const InputType = document.createElement("input");
  InputType.type= "text" 
  InputType.className="Inputtype"
  var newButton = document.createElement('button');
  newButton.className="newbutton"

  inputDiv.appendChild(InputType)
newButton.textContent = 'Add Board';


btnDiv.appendChild(newButton);


app.appendChild(inputDiv);
app.appendChild(btnDiv);

newButton.addEventListener('click', () => {
  if(InputType.value == ""){
    InputType.style.borderColor="red"
    InputType.placeholder="Please Enter Value"
    InputType.focus();
  } else{
    addData(InputType)
    InputType.style.display="none";
    newButton.style.display="none"; 
  }
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

    <div id="cards-${listIndex}" draggable="true" class='cardMovable'> </div>
    <div class="add-card-button" onclick="addCard(${listIndex})">+ Add Card</div>
  `;
  board.appendChild(list);
  listIndex++;
}

function addCard(index) {
  const cardsContainer = document.getElementById(`cards-${index}`);

  // const cardType = document.createElement("input");
  // cardType.type= "text"
  // cardsContainer.appendChild(cardType)

  const cardName = prompt("Enter card name:");

  if (cardName) {
    const card = document.createElement("div");
    card.className = "card";
    card.draggable = true;
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
