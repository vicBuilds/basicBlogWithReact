import React from "react";

function CreatePost() {
  return (
    <div className="create-post">
      <h1>Create a Post</h1>
      <form>
        <div className="form-field">
          <label>Title</label>
          <input />
        </div>

        <div className="form-field">
          <label>Sub-Title</label>
          <input />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea />
        </div>

        <button className="create-post-btn">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
