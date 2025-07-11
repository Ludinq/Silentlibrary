document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const bookId = params.get("id");

  const books = {
    book1: {
      title: "Whispers of the Mind",
      author: "Elaine Stephens",
      year: 1990,
      description:
        "Elaborates the techniques of self-hypnosis and hypnotic regression to help individuals fully utilize their brain's creative powers to uncover possible past lives",
      image: "/assets/whisper.avif",
    },

    book2: {
      title: "Deep End",
      author: "Ali Hazelwood",
      year: 2025,
      description:
        "A competitive diver and an ace swimmer jump into forbidden waters in this steamy college romance from the New York Times bestselling author of The Love Hypothesis.",
      image: "/assets/deepend.avif",
    },

    book3: {
      title: "The Lost Bookshop",
      author: "Evie Woods",
      year: 2023,
      description:
        "The Keeper of Stories meets The Lost Apothecary in this evocative and charming novel full of mystery and secrets.",
      image: "/assets/lost.avif",
    },
    // ... other books here ...
  };

  const book = books[bookId];

  if (book) {
    document.getElementById("book-detail").innerHTML += `
      <div class="card mb-4">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${book.image}" class="img-fluid rounded-start" alt="${book.title}" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text"><strong>Author:</strong> ${book.author}</p>
              <p class="card-text"><strong>Year:</strong> ${book.year}</p>
              <p class="card-text">${book.description}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    document.getElementById("book-detail").innerHTML += `
      <p class="text-danger">Book not found.</p>
    `;
  }
});
