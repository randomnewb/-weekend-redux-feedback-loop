// import useSelector and useDispatch so we connect to the reducer
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Understanding = () => {
    const understanding = useSelector((store) => store.understanding);
    const dispatch = useDispatch();

    const validate = () => {
        if (understanding === "") {
            alert("Input required!");
        } else {
            history.push("/support");
        }
    };

    const handleEvent = (e) => {
        dispatch({ type: "SET_UNDERSTANDING", payload: e.target.value });
    };

    const history = useHistory();

    return (
        <>
            <h4> How well are you understanding the content? </h4>
            <div>
                <input
                    value={understanding}
                    onChange={handleEvent}
                    type="number"></input>
                <button onClick={validate}>Next</button>
            </div>
        </>
    );
};

export default Understanding;
