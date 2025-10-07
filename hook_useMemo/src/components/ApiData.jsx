import { useState, useEffect, useMemo } from "react";
import axios from "axios";

function ApiData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      console.log("Fetched");
    };

    fetchData();
  }, []);

  const longPosts = useMemo(() => {
    console.log("Calculating long posts...");
    return posts.filter((post) => post.body.length > 100);
  }, [posts]);

  return (
    <div>
      <h2>Post Titles</h2>
      <h3>Total posts → {posts.length}</h3>
      <h4>Posts with long content → {longPosts.length}</h4>

      {longPosts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default ApiData;
