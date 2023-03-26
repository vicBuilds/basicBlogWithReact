import { useState } from "react";
import { firestore } from "../firebase";

function CreatePost() {
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [content, setContent] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(subTitle);
    console.log(content);

    firestore.collection("post").add({
      title,
      content,
      subTitle,
      createdAt: new Date(),
    });
  };

  return (
    <div className="create-post">
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="form-field">
          <label>Sub-Title</label>
          <input
            onChange={(e) => {
              setSubTitle(e.target.value);
            }}
          />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>

        <button className="create-post-btn">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
