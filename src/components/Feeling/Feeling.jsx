// import useSelector and useDispatch so we connect to the reducer
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Feeling = () => {
    const feeling = useSelector((store) => store.feeling);
    const dispatch = useDispatch();

    const validate = () => {
        if (feeling === "") {
            alert("Input required!");
        } else {
            history.push("/understanding");
        }
    };

    const handleEvent = (e) => {
        dispatch({ type: "SET_FEELING", payload: e.target.value });
    };

    const history = useHistory();

    return (
        <>
            <h4> How are you feeling today? </h4>
            <div>
                <input
                    value={feeling}
                    onChange={handleEvent}
                    type="number"></input>
                <button onClick={validate}>Next</button>
            </div>
        </>
    );
};

export default Feeling;
