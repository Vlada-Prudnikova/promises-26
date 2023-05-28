const buttonShow = document.querySelector(".show");
const inputById = document.querySelector(".input");
const divWrap = document.querySelector(".wrap");
const divPost = document.querySelector(".post");
const commentList = document.querySelector(".commentList");
const addComment = document.createElement("button");
addComment.innerHTML = "Показать коментарии";
addComment.className = "comment";

function fillPost(post) {
  const title = document.createElement("span");
  const body = document.createElement("span");
  title.innerHTML = post.title;
  body.innerHTML = post.body;
  divPost.appendChild(title);
  divPost.appendChild(body);
  divPost.appendChild(addComment);
}

buttonShow.addEventListener("click", function () {
  if (
    parseInt(inputById.value) != isNaN &&
    parseInt(inputById.value) >= 1 &&
    parseInt(inputById.value) <= 100
  ) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${inputById.value}`)
      .then((response) => response.json())
      .then((response) => {
        fillPost(response);
      })
      .catch((error) => console.log(error));
  } else {
    inputById.value = "";
    inputById.placeholder = "only numbers from 1 to 100";
  }
});

addComment.addEventListener("click", function () {
  fetch(
    `https://jsonplaceholder.typicode.com/posts/${inputById.value}/comments`
  )
    .then((response) => response.json())
    .then((response) => {
      fillComments(response, divPost);
    })
    .catch((error) => console.log(error));

  try {
    throw new Error("error");
  } catch (e) {
    console.log("error");
  }

  const fillComment = new Promise((resolve, reject) => {
    resolve("Succces");
    reject(new Error("error"));
  });

  fillComment
    .then((divParent) => {
      divParent.append(fillComment(element));
      fillComment(element);
    })
    .catch((error) => {
      console.log("error");
    })
    .finally((cuurentComment) => {
      const divWrap = document.createElement("div");
      divWrap.className = "currentComment";
      const name = document.createElement("span");
      const email = document.createElement("span");
      const body = document.createElement("span");
      name.innerHTML = currentComment.name;
      email.innerHTML = currentComment.email;
      body.innerHTML = currentComment.body;
      divWrap.appendChild(name);
      divWrap.appendChild(email);
      divWrap.appendChild(body);
      return divWrap;
    });
});
