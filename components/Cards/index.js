// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    for (let key in response.data.articles) {
      if (response.data.articles.hasOwnProperty(key)) {
        const articleArray = response.data.articles[key];
        articleArray.forEach(article => {
          const cardsContainer = document.querySelector('.cards-container');
          cardsContainer.append(createArticle(article));
        });
      }
    }
  })
  .catch(err => console.log(err));

function createArticle(obj) {
  // Define new elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  // Set up structure of elements
  card.append(headline);
  card.append(author);
  author.append(imgContainer);
  imgContainer.append(img);
  author.append(authorName);

  // Set class names
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  // Set content
  headline.textContent = obj.headline;
  img.src = obj.authorPhoto;
  authorName.textContent = `By ${obj.authorName}`;

  return card;
}