console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let star = 1; star <= 5; star++) {
    const img = document.createElement("img");
    img.src = (star <= filledStars) ? ('./assets/star-filled.svg') : ('./assets/star-empty.svg');
    
    img.dataset.index = star;

    img.addEventListener('click', () => {
      const userStars = img.dataset.index;
      renderStars(userStars);
    });

    starContainer.append(img);


  }
  //--^-- your code here --^--
}

// Part 1
//Without parameter call
//renderStars();

// Part 2:
//With parameter call
// renderStars(4);

// Part 3:
//With parameter call
renderStars(0);

