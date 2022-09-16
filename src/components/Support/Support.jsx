// import useSelector and useDispatch so we connect to the reducer
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Support = () => {
    const support = useSelector((store) => store.support);
    const dispatch = useDispatch();

    const validate = () => {
        if (support === "") {
            alert("Input required!");
        } else {
            history.push("/");
        }
    };

    const handleEvent = (e) => {
        dispatch({ type: "SET_SUPPORT", payload: e.target.value });
    };

    const history = useHistory();

    return (
        <>
            <h4> How well are you being supported? </h4>
            <div>
                <input
                    value={support}
                    onChange={handleEvent}
                    type="number"></input>
                <button onClick={validate}>Next</button>
            </div>
        </>
    );
};

export default Support;
