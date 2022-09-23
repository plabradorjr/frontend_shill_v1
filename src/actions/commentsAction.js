import axios from "axios";
// note to self, if not using axios, you need to delete ".data" on the payload dispatch

export const fetchComments = () => async (dispatch) => {
  const allComments = await axios.get("http://localhost:3030/comments");
  // production site: https://api.shill.lol

  //   const allComments = await fetch("https://api.shill.lol/comments").then(
  //     (res) => res.json()
  //   );

  dispatch({
    type: "FETCH_COMMENTS",
    payload: {
      comments: allComments,
    },
  });
};
