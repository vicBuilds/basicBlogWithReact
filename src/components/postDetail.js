import { firestore } from "../firebase";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PostDetail() {
  const [post, setPost] = useState({});
  let { postId } = useParams();
  console.log(postId);
  useEffect(() => {
    firestore
      .collection("post")
      .doc(postId)
      .get()
      .then((snapshot) => {
        setPost(snapshot.data());
      });
  }, [postId]);

  // console.log(post);
  return (
    <div className="container">
      <h1>{post && post.title}</h1>
      <h3>{post && post.subTitle}</h3>
      <p>{post && post.content}</p>
    </div>
  );
}

export default PostDetail;
