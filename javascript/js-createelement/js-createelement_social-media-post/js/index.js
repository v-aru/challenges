console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//First social media post
const postContainer = document.createElement("article");
postContainer.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent = "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@username";

const postLikeButton = document.createElement("button");
postLikeButton.classList.add("post__button");
postLikeButton.textContent = "♥ Like";
postLikeButton.addEventListener('click', handleLikeButtonClick);

postFooter.append(postUsername, postLikeButton);
postContainer.append(postContent, postFooter);
document.body.append(postContainer);

//Second social media post

const postContainer2 = document.createElement("article");
postContainer2.classList.add("post");

const postContent2 = document.createElement("p");
postContent2.classList.add("post__content");
postContent2.textContent = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

const postFooter2 = document.createElement("footer");
postFooter2.classList.add("post__footer");

const postUsername2 = document.createElement("span");
postUsername2.classList.add("post__username");
postUsername2.textContent = "@username";

const postLikeButton2 = document.createElement("button");
postLikeButton2.classList.add("post__button");
postLikeButton2.textContent = "♥ Like";
postLikeButton2.addEventListener('click', handleLikeButtonClick);

postFooter2.append(postUsername2, postLikeButton2);
postContainer2.append(postContent2, postFooter2);
document.body.append(postContainer2);
