const findUser = (id, users) => {
  let foundUser;
  users.forEach((user) => {
    if (user.id === id) {
      foundUser = user;
    }
  });
  return foundUser;
};

const findComments = (postId, comments) => {
  let postComments = [];
  comments.forEach((comment) => {
    if (comment.postId === postId) {
      postComments.push(comment);
    }
  });
  return postComments;
};

const renderUser = (user, albums) => {
  const container = document.getElementById("main");
  container.innerHTML = `USER DETAILS: ${JSON.stringify(
    user
  )}..... ALBUMS: ${JSON.stringify(albums)}`;
  console.log(albums);
  const button = mkElem("button");
  button.addEventListener("click", () => {
    r();
  });
  button.innerHTML = "nazad mome kalino";
  container.appendChild(button);
};

const render = (containerId, stuff) => {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const [users, posts, comments] = stuff;
  posts.forEach((post) => {
    post.user = findUser(post.userId, users);
    post.comments = findComments(post.id, comments);
    let postVisual = mkElem("div", { class: "post" });

    let postUser = mkElem("div", { class: "header" });
    let username = mkElem("a", { class: "username" });
    username.innerHTML = `username: ${post.user.username}`;
    postUser.innerHTML = `Post by: ${post.user.name} `;
    username.addEventListener("click", () => {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${post.userId}`)
        .then((albums) => albums.json())
        .then((json) => renderUser(post.user, json));
    });

    postUser.appendChild(username);

    let postTitle = mkElem("div", { class: "title" });
    postTitle.innerHTML = `Title: ${post.title}`;

    let postContent = mkElem("div", { class: "content" });
    postContent.innerHTML = `Content: ${post.body}`;

    let postComments = mkElem("ul", { class: "comments" });
    post.comments.forEach((comment) => {
      let currentComment = mkElem("li", { class: "comment" });
      currentComment.innerHTML = `Comment by ${comment.email}: 
      </br> Title: ${comment.name} 
      </br> CommentContent: ${comment.body}`;
      postComments.appendChild(currentComment);
    });

    postVisual.appendChild(postUser);
    postVisual.appendChild(postTitle);
    postVisual.appendChild(postContent);
    postVisual.appendChild(postComments);

    container.appendChild(postVisual);
  });
  console.log(posts);
};

const r = () =>
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/comments"),
    fetch("https://jsonplaceholder.typicode.com/albums"),
  ])
    .then((r) => Promise.all(r.map((x) => x.json())))
    .then((x) => render("main", x));

r();
