window.onload = function(){

const booksContainer = document.querySelector("#books-container");
const fictionBtn = document.querySelector('#fiction-btn');
const nonFictionBtn = document.querySelector("#non-fiction-btn");
const bioBtn = document.querySelector("#")


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
      console.log(booksArray);
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
      console.log(booksArray);
      booksArray.forEach(createBookCard);

})




function createBookCard(book){
    var bookCard = document.createElement('div');
    var nameHeader = document.createElement('h5');
    var image = document.createElement('img');
    var priceHeader = document.createElement('h5');

    bookCard.classList.add('book-card');
    bookCard.setAttribute("id", book.ISBN);

    nameHeader.textContent = book.title;

    image.setAttribute("class", "book");
    image.src = book.src;

    priceHeader.setAttribute("id", "book-price");
    priceHeader.classList.add("price-tag")
    priceHeader.textContent = "$" + book.price

    bookCard.append(nameHeader, image, priceHeader);
    booksContainer.append(bookCard);

}

}