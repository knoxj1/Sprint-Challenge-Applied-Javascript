// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


function Header() {
  // Define new elements
  const header = document.createElement('div');
  const date = document.createElement('span');
  const lambdaTimes = document.createElement('h1');
  const temp = document.createElement('span');

  // Set up structure of elements
  header.append(date);
  header.append(lambdaTimes);
  header.append(temp);

  // Set class names
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  // Set content
  date.textContent = 'MARCH 28, 2019';
  lambdaTimes.textContent = 'Lambda Times';
  temp.textContent = '98°';

  return header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.append(Header());