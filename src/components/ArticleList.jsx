import React from "react";

function ArticleList({ posts }) {
  return (
    <main>
      <h2>Latest Articles</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ArticleList;