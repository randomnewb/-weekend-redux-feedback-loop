import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Feedback.css";
import Axios from "axios";

const Feedback = () => {
    const history = useHistory();

    // We want to return all the things that are in our store
    // and let the user review them before clicking submit
    const feedback = useSelector((store) => store);
    const dispatch = useDispatch();

    const submitFeedback = () => {
        console.log("Submitting feedback...");
        Axios({
            method: "POST",
            url: "/feedback",
            data: {
                feeling: feedback.feeling,
                understanding: feedback.understanding,
                support: feedback.support,
                comments: feedback.comments,
            },
        })
            .then((response) => {
                dispatch({ type: "CLEAR_ALL" });
                history.push("/submit");
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong");
            });
    };

    // Axios POST goes here

    return (
        <div>
            <h4>Review Your Feedback</h4>
            <ul>
                <li>Feeling: {feedback.feeling}</li>
                <li>Understanding: {feedback.understanding}</li>
                <li>Support: {feedback.support}</li>
                <li>Comments: {feedback.comments}</li>
            </ul>

            <button onClick={() => submitFeedback()}>Submit Feedback</button>
        </div>
    );
};

export default Feedback;
