
const booksContainer = document.querySelector("#books-container");
const fictionBtn = document.querySelector('#fiction-btn');
const nonFictionBtn = document.querySelector("#non-fiction-btn");
const bioBtn = document.querySelector("#bio-btn");
const sciFiButton = document.querySelector("#sci-btn");
const kidsButton = document.querySelector('#kids-btn');
const homeBtn = document.querySelector('#home-btn');


window.onload = async function(){
    booksContainer.innerHTML = "";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      };
      const response = await fetch('/home', options);
      const booksArray = await response.json();
      booksArray.forEach(createBookCard);

}



fictionBtn.addEventListener('click', async ()=>{
    booksContainer.innerHTML = "";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      };
      const response = await fetch('/fiction', options);
      const booksArray = await response.json();
      booksArray.forEach(createBookCard);

})

nonFictionBtn.addEventListener('click', async ()=>{
    booksContainer.innerHTML = "";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      };
      const response = await fetch('/non-fiction', options);
      const booksArray = await response.json();

      booksArray.forEach(createBookCard);

})

bioBtn.addEventListener('click', async ()=>{
    booksContainer.innerHTML = "";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      };
      const response = await fetch('/bio', options);
      const booksArray = await response.json();

      booksArray.forEach(createBookCard);

})

sciFiButton.addEventListener('click', async ()=>{
    booksContainer.innerHTML = "";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      };
      const response = await fetch('/sci-fi', options);
      const booksArray = await response.json();

      booksArray.forEach(createBookCard);

})

kidsButton.addEventListener('click', async ()=>{
    booksContainer.innerHTML = "";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      };
      const response = await fetch('/kids', options);
      const booksArray = await response.json();

      booksArray.forEach(createBookCard);

})


function createBookCard(book){
    var bookCard = document.createElement('div');
    var nameHeader = document.createElement('p');
    var image = document.createElement('img');
    var priceHeader = document.createElement('p');
    var authorHeader = document.createElement('p');
    var cartButton = document.createElement('button');

    cartButton.classList.add('add-cart');
    cartButton.textContent = "Add to Cart";
    cartButton.setAttribute("id", book.ISBN);
    cartButton.addEventListener('click', clickedBook)

    bookCard.classList.add('book-card');
    bookCard.setAttribute("id", book.ISBN);

    nameHeader.classList.add("bold-title");
    nameHeader.textContent = book.title;

    image.setAttribute("class", "book");
    image.src = book.src;

    priceHeader.setAttribute("id", "book-price");
    priceHeader.classList.add("price-tag")
    priceHeader.textContent = "$" + book.price

    authorHeader.textContent = "By: " + book.FirstName + " " + book.LastName; 
    bookCard.append(image, priceHeader, nameHeader, authorHeader, cartButton);
    booksContainer.append(bookCard);

}

 function clickedBook(){
    var ISBN = this.id;
    const data = {ISBN};
    console.log(data)
    const options = {
        method: 'POST', 
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = fetch('/cart', options);

}

function viewBookDescription(){
    //window.location.href = "/book-description"
}
