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

const render = (containerId, stuff) => {
  const container = document.getElementById(containerId);
  const [users, posts, comments] = stuff;
  posts.forEach((post) => {
    post.user = findUser(post.id, users);
    post.comments = findComments(post.id, comments);
    let postVisual = mkElem("div", { class: "post" });

    let postUser = mkElem("div", { class: "header" });
    postUser.innerHTML = `Post by: ${post.user.name}, username: ${post.user.username}`;

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

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users"),
  fetch("https://jsonplaceholder.typicode.com/posts"),
  fetch("https://jsonplaceholder.typicode.com/comments"),
])
  .then((r) => Promise.all(r.map((x) => x.json())))
  .then((x) => render("main", x));
