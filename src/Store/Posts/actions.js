import { createAction } from "redux-actions";
import { getNewPost } from "../../api.js";

const updatePostFeed = async () => {
  try {
    const response = await getNewPost();
    return response;
  } catch (exception) {
    const error = exception.message;
    return console.log("fail");
  }
};

export { updatePostFeed };
