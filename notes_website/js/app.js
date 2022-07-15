shownotes(); //because on reload every note disppear
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes != null) {

        Obj = JSON.parse(notes);
    }
    else {
        Obj = [];
    }

    Obj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(Obj));
    addTxt.value = "";
    // console.log(Obj);
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes != null) {

        Obj = JSON.parse(notes);
    }
    else {
        Obj = [];
    }
    let html = "";
    Obj.forEach((elements, index) => {
        html += `
        <div class="noteCard card mx-2 my-2 text-bg-warning shadow p-3 mb-5  rounded " style="width: 18rem;  ">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${elements}</p>
          <button href="#"id="${index}" onclick="dltNotes(this.id)" class="btn btn-outline-dark opacity-80">Delete Note</button>
        </div>
      </div> `
    })
    let notesElement = document.getElementById('notes');
    if (Obj.length != 0) {
        notesElement.innerHTML = html;

    } else {
        notesElement.innerHTML = 'Nothing to Show'
    }
}
function dltNotes(index) {
    // console.log('deleting',index)
    let notes = localStorage.getItem("notes");
    if (notes != null) {

        Obj = JSON.parse(notes);
    }
    else {
        Obj = [];
    }
    Obj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(Obj));
    shownotes();

}

//adding search functionality

let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener('input', function () {
    let inputVal = searchTxt.value.toLowerCase();
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

})
