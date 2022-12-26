import React, { useState, useMemo } from "react";

const CodePost = ({ posts }) => {
  const [rerender, setRerender] = useState(false);

  const orderedPostWithTitle = useMemo(() => {
    console.log("Generating posts...");
    return posts.map((post) => ({
        ...post, 
        date: new Date(post.date),
        title: post.slug.split("-").join(" ").toUpperCase()
    })).sort((a,b) => a.date.getTime() - b.date.getTime())
    .map((post) => ({
        ...post,
        date: new Intl.DateTimeFormat("es-ES").format(post.date)
    }))
  }, [posts]);
  return (
    <div>
        <ul>
            {
             orderedPostWithTitle.map((post) => (
                <li key={post.slug}>
                    <h3>{post.title}</h3> {post.date}
                    <p>{post.data}</p>
                </li>
             ))
            }
        </ul>

      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </div>
  );
};

export default CodePost;
