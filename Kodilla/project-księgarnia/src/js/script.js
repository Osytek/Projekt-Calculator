{
    

  const bookList = document.querySelector('.books-list');
  const templates = {
    bookProduct: Handlebars.compile(document.querySelector('#template-book').innerHTML),
  };
  function render(){

    for(let book of dataSource.books){
      const generatedHTML = templates.bookProduct(book);

      this.element = utils.createDOMFromHTML(generatedHTML);

      bookList.appendChild(this.element);

            
    }

  }

  render();
  initActions();

  const favoriteBooks = [];

  function initActions(){
    const bookImages = bookList.querySelectorAll('.book__image');
    

    for(let bookImage of bookImages){
            
      bookImage.addEventListener('dblclick', function(event){
        if(!bookImage.classList.contains('favorite')){ 
          event.preventDefault();
          bookImage.classList.add('favorite');
          const bookId = bookImage.getAttribute('data-id');
                    
          favoriteBooks.push(bookId);
        }else if(bookImage.classList.contains('favorite')){
            
          const bookId = bookImage.getAttribute('data-id');  
          bookImage.classList.remove('favorite');
          favoriteBooks.pop(bookId);
        }
      });
      
    }
  }
  console.log('asdasda', favoriteBooks);
    
}