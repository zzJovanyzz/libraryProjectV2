let libraryModule = (()=>{

    let myLibrary = [{title: 'The red dog', author: 'Me', pages: '123', read: 'Read'},
                     {title: 'The blue dog', author: 'NotMe', pages: '99', read: 'Not Read'},
                     {title: 'Best Book Ever', author: 'Me', pages: '999', read: false}];

    addToLibrary = (newBook) => {
        myLibrary.push(newBook);
    }

    buttonColor = () =>{
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

    changeRead = (ele) => {
        let myElement = ele.id;
    
        if (document.getElementById(myElement).style.backgroundColor == "green"){
            document.getElementById(myElement).style.backgroundColor = "red";
        } else {
            document.getElementById(myElement).style.backgroundColor = "green";
        }
        
    }

    clearTable = () =>{
        document.getElementById('bookCard').innerText = "";
        return;
    }

    fillTable = () =>{
        // document.getElementById("bookCard").insertAdjacentHTML("beforeend","<p>Hello World</p>")
        for (let i = 0; i < myLibrary.length; i++){
            
            document.getElementById("bookCard").insertAdjacentHTML("beforeend", 
            `<div class="book"> 
                <div id="infoContainer">
                    <div id="textContainer">
                        <div id="bookTitle">${myLibrary[i].title}</div> by ${myLibrary[i].author} has ${myLibrary[i].pages} pages.
                    </div>
                    <button class="readButton" id="button${myLibrary[i].title}${myLibrary[i].author}" onclick="changeRead(this)"></button> 
                    <button class="removeButton" id="${myLibrary[i].title}${myLibrary[i].author}removeButton" onclick="removeBook(this)">X</button>
                </div>
            </div>`)
        }
    }

    removeBook = (ele) => {
        let myElement = ele.id;
        let myIndex ;
    
        for (let i = 0; i < myLibrary.length; i++){
            let currentId = `${myLibrary[i].title}${myLibrary[i].author}removeButton`;
            if (currentId == myElement){
                myIndex = i
            }
        }
    

        myLibrary.splice(myIndex, 1)
        clearTable();
        fillTable();
        buttonColor();
    }

    return {
        
        addBookButton (){
            document.getElementById("formContainer").style.zIndex = "1";
        },

        cancelButton (){
            document.getElementById("formContainer").style.zIndex = "-1";
        },

        
        submitButtonf (){
            document.getElementById('form').reset()
            document.getElementById("formContainer").style.zIndex = "-1";
            // console.log(document.getElementById('read').checked)
            // console.log(myLibrary)
            let thisBook = new Book(document.getElementById('title').value, 
                                    document.getElementById('author').value, 
                                    document.getElementById('pages').value, 
                                    document.getElementById('read').checked)    
            addToLibrary(thisBook)
            clearTable();
            fillTable();
            buttonColor();
        }
        
    }
})();

class Book {
    
    constructor(title, author, pages, read){
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read; 
    }

    info(){return(`${this.title} by ${this.author} is ${this.pages} pages long. Read? ${this.read}.`)}
}

// 
// 
// START UP SCRIPT FOR SET UP

(()=>{
    let form = document.getElementById('form');

    form.addEventListener('submit', function(Event){Event.preventDefault()})

    fillTable();
    buttonColor();
})();

