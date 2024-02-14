const br = document.createElement('br');
const addBoard = document.getElementById("AddBoard")

const newBoard = document.querySelectorAll(".board")

let listIndex = 0;

function hiddenInput(){
  addBoard.style.display= 'none';
  // const board = document.getElementById("board");
  const inputDiv = document.createElement("div");
  
  
  inputDiv.className="divs"
  const InputType = document.createElement("input");
  const spanX = document.createElement("span");
  InputType.type= "text" 
  InputType.className="Inputtype"
  var newButton = document.createElement('button');
  newButton.className="newbutton"

  inputDiv.append(InputType)
newButton.textContent = 'Add Board';

spanX.innerHTML = 'X'
spanX.className="spanx"
inputDiv.append(newButton);
inputDiv.append(spanX);

app.append(inputDiv);

newButton.addEventListener('click', () => {
  if(InputType.value == ""){
    InputType.style.borderColor="red"
    InputType.placeholder="Please Enter Value"
    InputType.focus();
  } else{
    addData(InputType)
    inputDiv.remove();
  }
});

spanX.addEventListener('click', () => {
  inputDiv.remove();
  addBoard.style.display= 'block';
})

} 
function addData(InputTypeValue, addBoardValue) {
  addBoard.style.display= 'block';
  const board = document.getElementById("board");
  const list = document.createElement("div");
  const deletefun = document.createElement("span")

  list.className = "list";
  list.id = "list-" + listIndex;
  
  list.innerHTML = `
  
  <h3 class='headingvalue'>${InputTypeValue.value} </h3>
      <div id="cards-${listIndex}" draggable="true" class='cardMovable'> </div>
    <div class="add-card-button" onclick="addCard(${listIndex},'list')">Add Card</div>
    
  `;
  board.appendChild(list);
  listIndex++;
}

// function adddetails(index,listname)
// {
//   const listnames = listname
//   const addDetailsDiv = document.createElement('div')
//   const addDetailsInput = document.createElement('input')
//   addDetailsInput.type="text"
//   const addDetailsButton = document.createElement('button')
//   addDetailsButton.textContent = "Add Card"
//   const addDetailsspan = document.createElement('span')
//   addDetailsspan.innerHTML = "X"

//   addDetailsDiv.appendChild(addDetailsInput)
//   addDetailsDiv.appendChild(addDetailsButton)
//   addDetailsDiv.appendChild(addDetailsspan)
//     listnames.appendChild(addDetailsDiv)
// console.log(listnames)
// //  addCard(index)
// }


function addCard(index) {
  const cardsContainer = document.getElementById(`cards-${index}`);
  // const cardName = document.createElement("input");
  // cardName.type = "text";

  // cardsContainer.appendChild(cardName);
  const cardName = prompt("Enter card name:");

  if (cardName) {
    const card = document.createElement("div");
    const carddelete = document.createElement("div")

    card.className = "card";
    carddelete.className="cardx"
    carddelete.innerHTML = "X"
    card.draggable = true;

    card.append(cardName)
    cardsContainer.append(carddelete);

    carddelete.addEventListener("click", () =>{
      carddelete.remove()
      card.remove()

    })
    card.onclick = function() {
      showCardDetails(cardName);
    };

    cardsContainer.appendChild(card);

    
  }
}

function showCardDetails(cardContent) {
  alert(`Card Details: ${cardContent}`);
}
