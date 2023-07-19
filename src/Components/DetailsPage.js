import { useSelector } from "react-redux";
const DetailsPage = () => {
  const post = useSelector((state) => {
    return state.selected_post_reducer;
  });
  console.log(post);

  return (
    <div id="details-box">
      <div className="details">
        <h1 id="readfullpost">Read full post</h1>
        <strong id="postid">{post.id}</strong>
        <div className="box-img">
          <img
            className="img-in-box"
            src={`https://picsum.photos/200?random=${post.id}`}
            alt=""
          />
        </div>
        <h2>
          {post.title.slice(0, 1).toUpperCase()}
          {post.title.slice(1)}
        </h2>
        <p>
          {post.body.slice(0, 1).toUpperCase()}
          {post.body.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
