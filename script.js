let myLibrary = [];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // this.info = () =>{
    //     return(`${this.title} by ${this.author} is ${pages} pages long. It ${read} been read.`)
    // }
};

Book.prototype.info = function(){return(`${this.title} by ${this.author} is ${this.pages} pages long. Read? ${this.read}.`)}

let addToLibrary = (newBook) => {
    myLibrary.push(newBook);
    return;
}





let book2 = new Book("The red dog", "Me", "123", "Read");
let book3 = new Book("The blue dog", "NotMe", "99", "Not Read");


addToLibrary(book2);
addToLibrary(book3);


let fillTable = () =>{
    // document.getElementById("bookCard").insertAdjacentHTML("beforeend","<p>Hello World</p>")
    for (let i = 0; i < myLibrary.length; i++){
        
        document.getElementById("bookCard").insertAdjacentHTML("beforeend", `<div class="book"> 
                                                                                <div id="infoContainer">
                                                                                    <div id="textContainer">
                                                                                    <div id="bookTitle">
                                                                                    ${myLibrary[i].title}
                                                                                    </div>
                                                                                     by ${myLibrary[i].author} has ${myLibrary[i].pages} pages.
                                                                                    </div>
                                                                                    <button class="readButton" id="button${myLibrary[i].title}${myLibrary[i].author}" onclick="changeRead(this)"></button> 
                                                                                    <button class="removeButton" id="${myLibrary[i].title}${myLibrary[i].author}removeButton" onclick="removeBook(this)">X</button>
                                                                                </div>
                                                                            </div>`)
    }
}

let clearTable = () =>{
    document.getElementById('bookCard').innerText = "";
    return;
}

let buttonColor = () =>{
    let buttons = document.getElementsByClassName('readButton');

    for (let i = 0; i < buttons.length; i++){
        if (myLibrary[i].read == 'Read'){
            buttons[i].style.backgroundColor = "green"
        } else if(myLibrary[i].read == true){
            buttons[i].style.backgroundColor = "green"
        } 
         else{
            buttons[i].style.backgroundColor = "red"
        }
    }
}

let changeRead = (ele) => {
    let myElement = ele.id;

    if (document.getElementById(myElement).style.backgroundColor == "green"){
        document.getElementById(myElement).style.backgroundColor = "red";
    } else {
        document.getElementById(myElement).style.backgroundColor = "green";
    }
    
}

let removeBook = (ele) => {
    let myElement = ele.id;
    let myIndex ;

    for (let i = 0; i < myLibrary.length; i++){
        let currentId = `${myLibrary[i].title}${myLibrary[i].author}removeButton`;
        if (currentId == myElement){
            myIndex = i
        }
    }

    console.log(myElement)
    console.log(myLibrary.indexOf(myElement))
    myLibrary.splice(myIndex, 1)
    clearTable();
    fillTable();
    buttonColor();
    console.log(myLibrary)
}

let addBookButton = () =>{
    document.getElementById("formContainer").style.zIndex = "1";
}

let submitButtonf = () =>{
    let thisBook = new Book(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('read').checked)
    addToLibrary(thisBook)
    clearTable();
    fillTable();
    buttonColor();
    document.getElementById('form').reset()
    document.getElementById("formContainer").style.zIndex = "-1";
    console.log(document.getElementById('read').checked)
    console.log(myLibrary)

}

let cancelButton = () =>{
    document.getElementById("formContainer").style.zIndex = "-1";
}

let preventReload = () =>{
    let form = document.getElementById('form');
    form.addEventListener('submit', function(Event){Event.preventDefault()})
}




preventReload()
fillTable();
buttonColor();
