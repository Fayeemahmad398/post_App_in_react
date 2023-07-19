export const action_selected_post = (post) => {
  return {
    type: "SELECT_POST",
    payload: post,
  };
};
