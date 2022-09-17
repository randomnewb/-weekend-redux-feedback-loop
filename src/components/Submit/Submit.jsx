import { useHistory } from "react-router-dom";

const Submit = () => {
    const history = useHistory();

    return (
        <>
            <h4> Feedback submitted successfully! </h4>
            <div>
                <button onClick={() => history.push("/")}>
                    Click here to submit new feedback
                </button>
            </div>
        </>
    );
};

export default Submit;
