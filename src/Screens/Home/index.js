import React, { useState } from "react";
import Input from "../../Components/Input";

import "./home.scss";
import { createNewPost } from "../../api";

const Home = ({ updatePostFeed }) => {
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();
  const handleSubmitButton = async () => {
    await createNewPost(content, author);
  };

  const handleFormChange = (event, key) => {
    key === "content"
      ? setContent(event.target.value)
      : setAuthor(event.target.value);
  };

  return (
    <div className="form">
      <div>
        <Input
          className="form__author-field"
          name="author"
          placeholder="Please insert a cool name! Actually we don't care which name gonna be yours!"
          onChange={event => handleFormChange(event, "author")}
        />
      </div>
      <Input
        className="form__content-field simple-margin-top"
        name="content"
        placeholder="Please insert what you want to say here!"
        onChange={event => handleFormChange(event, "content")}
      />
      {content && author && (
        <button onClick={handleSubmitButton}>Submit</button>
      )}
    </div>
  );
};

export default Home;
