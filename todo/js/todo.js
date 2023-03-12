showNotes();
let addTxt = document.getElementById("txt");
let addBtn = document
  .getElementById("txtBtn")
  .addEventListener("click", function () {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    if (addTxt.value == '') {
        alert("Error");
    }

    else{showNotes();}
    addTxt.value = "";
    console.log(notesObj);
    
    
  });
//Function to shoe  notes on the app
function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
    notesObj.forEach(function (element, index) {
        
      html += ` <div id="notes" class=" row container-fluid ">
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p id="para" class="card-text"> ${element}</p>
            <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note </button>
          </div>
        </div> 
      </div> `;
    });

  
  

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show here! First add the note from above section`;
  }
}

//Function to delete notes
function deleteNote(index) {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  console.log("Im deleting", index);
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById('search');

search.addEventListener('input',function(){
    
    let val = search.value;
    let cardTxt = document.getElementsByClassName('noteCard');
    Array.from(cardTxt).forEach(function(element){
        let card = document.getElementsByTagName('p')[0].innerHTML;
        if (card.includes(val)) {
            element.style.display="block";
        }
        else
        {
            element.style.display="none";
        }

    });

});
