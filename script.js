// a <p> with red text that says “Hey I’m red!”
const container = document.querySelector('#container');
const redParagraph = document.createElement('p');
redParagraph.classList.add('red');
redParagraph.textContent = 'Hey I’m red';
redParagraph.style.cssText = 'color: red';

container.appendChild(redParagraph);

// an <h3> with blue text that says “I’m a blue h3!”

const blueH3 = document.createElement('H3');
blueH3.classList.add('blue');
blueH3.textContent = 'I’m a blue h3';
blueH3.style.cssText = 'color: blue';

container.appendChild(blueH3);

// a <div> with a black border and pink background color:

const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pink');
pinkDiv.style.padding = '3em';
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.style.border = '10px';
pinkDiv.style.borderStyle = 'solid';

container.appendChild(pinkDiv);

// with the following elements inside of it:

// another <h1> that says “I’m in a div”
const aHeading = document.createElement('H1');
aHeading.classList.add('heading');
aHeading.textContent = 'I’m in a div';

pinkDiv.appendChild(aHeading);

// a <p> that says “ME TOO!”

const meTooParagraph = document.createElement('p');
meTooParagraph.classList.add('red');
meTooParagraph.textContent = 'ME TOO!';

pinkDiv.appendChild(meTooParagraph);
