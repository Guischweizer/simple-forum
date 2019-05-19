import React, { useState } from "react";
import Input from "../../Components/Input";

import "./home.scss";
import { createNewPost } from "../../api";
import TextBox from "../../Components/TextBox";
import Button from "../../Components/Button";
import Timeline from "../../Components/Timeline";

const Home = () => {
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
    <div>
      <div className="form">
        <div>
          <Input
            className="form__author-field"
            name="author"
            suffix={" "}
            placeholder="Please insert a cool name!"
            onChange={event => handleFormChange(event, "author")}
          />
        </div>
        <div>
          <TextBox
            className="form__content-field simple-margin-top"
            name="content"
            suffix={" "}
            maxlength={250}
            columns="40"
            rows="5"
            placeholder="Please insert what you want to say here!"
            onChange={event => handleFormChange(event, "content")}
          />
        </div>
        <Button
          onClick={handleSubmitButton}
          textButton="Submit"
          theme="primary"
        >
          Submit
        </Button>
      </div>
      <Timeline />
    </div>
  );
};

export default Home;
