import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as allActionCreators from "../redux/action/Fetch_DataCreator";
import { useNavigate } from "react-router-dom";
import { action_selected_post } from "../redux/action/action_selected_post";
import { NavLink } from "react-router-dom";

const HomePage = (props) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("working");
    dispatch(allActionCreators.fetch_data_asynchronously());
  }, []);
  console.log("working");

  const products = useSelector((state) => {
    return state.fetch_data_reducer.data;
  });
  //   console.log(products);
  return (
    <>
      <h1 id="postapp">POST APP</h1>
      <div id="card">
        {products.length > 0 ? (
          products.map((obj, index) => {
            return (
              <div
                className="cards"
                key={index}
                onClick={() => {
                  dispatch(action_selected_post(obj));
                  navigator(`/item/${obj.id}`);
                  props.ID.setId(obj.id);
                }}
              >
                <strong>{obj.id}</strong>
                <div className="img">
                  <img
                    src={`https://picsum.photos/200?random=${obj.id}`}
                    alt=""
                  />
                </div>
                <h2>
                  {obj.title.slice(0, 1).toUpperCase()}
                  {obj.title.slice(1, 11)}
                  <NavLink>...readmore</NavLink>{" "}
                </h2>
                <p>
                  {obj.body.slice(0, 1).toUpperCase()}
                  {obj.body.slice(1, 90)}
                  <NavLink>...readmore</NavLink>{" "}
                </p>
              </div>
            );
          })
        ) : (
          <div id="loader"></div>
        )}
      </div>
    </>
  );
};

export default HomePage;
