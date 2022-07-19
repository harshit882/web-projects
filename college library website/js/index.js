//creating blue of adding book
function addBook(bookName, booktype, author) {
  this.bookName = bookName
  this.booktype = booktype
  this.author = author
}
//creating prototype
function Display() {

}
Display.prototype.add = function (book) {
  // console.log("hi")
  let tableBody = document.getElementById("tableBody")
  let uiString = ` <tr>
    <td>${book.bookName}</td>
    <td>${book.author}</td>
    <td>${book.booktype}</td>
  </tr>`
  tableBody.innerHTML += uiString
}

Display.prototype.alert = function (book) {
  let alert = document.getElementById('alert')
  let str = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </symbol>
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
  </svg>
    <div class="alert alert-success d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div>
    <b>Successfully Added</b> Book ${book.bookName} by Author ${book.author}
    </div>
  </div>`
  alert.innerHTML = str
  setTimeout(() => {
    alert.innerHTML = ''
    // alert.style.
  }, 1200);
}
Display.prototype.clear = function () {
  let submit = document.getElementById("library_form")
  submit.reset()

}
Display.prototype.local = function (book) {
  // let objList =[]
  let storage = localStorage.getItem(`storage`)
  if (storage != null) {
    myobj = JSON.parse(storage)
    objList =JSON.parse(storage)
  } else {
    myobj = {}
    objList=[]
  }
 
  myobj.bookName = book.bookName
  myobj.booktype = book.booktype
  myobj.author = book.author
  objList.push(myobj)

  localStorage.setItem(`storage`, JSON.stringify(objList))


}

//adding submit functionality to form without reloading
let submit = document.getElementById("library_form")
submit.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {
  e.preventDefault()
  let bookName = document.getElementById('bookName').value
  let author = document.getElementById('author').value
  let booktype
  let fiction = document.getElementById('fiction')
  let programming = document.getElementById('Programming')
  let biography = document.getElementById('Biography')

  if (programming.checked) {
    booktype = programming.value
  }
  else if (fiction.checked) {
    booktype = fiction.value
  }
  else if (biography.checked) {
    booktype = biography.value
  }
  let book = new addBook(bookName, booktype, author)
  console.log(book)
  let display = new Display()
  display.add(book)
  display.alert(book)
  display.clear()
  display.local(book)
}



