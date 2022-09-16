// import useSelector and useDispatch so we connect to the reducer
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Comments = () => {
    const comments = useSelector((store) => store.comments);
    const dispatch = useDispatch();

    const handleEvent = (e) => {
        dispatch({ type: "SET_COMMENTS", payload: e.target.value });
    };

    const history = useHistory();

    return (
        <>
            <h4> Any comments you want to leave? (optional) </h4>
            <div>
                <input
                    value={comments}
                    onChange={handleEvent}
                    type="text"></input>
                <button onClick={() => history.push("/feedback")}>Next</button>
            </div>
        </>
    );
};

export default Comments;
