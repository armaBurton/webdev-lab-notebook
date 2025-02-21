const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');



const fetchData = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json();

    json.map((book) => {
      app.classList.remove("text-center")
      app.classList.add("text-start")
      const bookObj = document.createElement('p');
      bookObj.innerHTML = `
      <strong>Title:</strong> ${book.name}<br>
      <strong>Author:</strong> ${book.authors[0]}<br>
      <strong>Release Date:</strong> ${new Intl.DateTimeFormat('en-US',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(book.released))}<br>
        <strong>Pages:</strong> ${book.numberOfPages}
      `
      app.appendChild(bookObj);
    })
  } catch (err) {
    console.error(err.message);
  }
  document.getElementById("loading").style.visibility = 'hidden';
};

window.onload = fetchData(url);
// window.addEventListener("load", fetchData)