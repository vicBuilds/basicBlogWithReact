import { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPost] = useState();

  useEffect(() => {
    firestore
      .collection("post")
      .orderBy("createdAt")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }, []);

        setPost(posts);
      });
  }, []);

  //console.log(posts);
  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Victor Mitra</div>

      {/* {posts.map((post) => {
        return (
          <div className="post" key={`post-${post.id}`}>
            <h3>{post.title}</h3>
            <p></p>
          </div>
        );
      })} */}

      {posts &&
        posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>{post.subTitle}</p>
            </div>
          );
        })}

      {/* {console.log("Inside Div", posts)} */}
    </div>
    // <></>
  );
}

export default Home;
