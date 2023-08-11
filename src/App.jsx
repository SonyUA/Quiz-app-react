import { useCallback, useRef, useState } from "react";
import "./App.css";
import { QuestionAnswer } from "./QuestionAnswer";
import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import EndScreen from "./EndScreen";
const App = () => {
    const [pageNumber, setPageNumber] = useState(-1);
    const [point, setPoint] = useState(0);
    const linePercentagesRef = useRef(null);
    let question = QuestionAnswer[pageNumber];

    const start = () => {
        setPageNumber((prev) => prev + 1);
    };
    const nextPage = useCallback(
        (e) => {
            const name = e.target.innerText;
            if (name === question.correctAnswer) {
                setPoint((prev) => prev + 1);
            }

            setPageNumber((prev) => prev + 1);
            linePercentagesRef.current.style = `width: ${((pageNumber + 1) / QuestionAnswer.length) * 100}%`;
        },
        [pageNumber, question]
    );
    const newStart = () => {
        setPageNumber(-1);
        setPoint(0);
        linePercentagesRef.current.style = `width:0%`;
    };
    return (
        <div>
            <h1>Quiz-App</h1>

            <div className='wrapper'>
                <div className='line'>
                    <div ref={linePercentagesRef}></div>
                </div>
                {pageNumber === -1 && <StartScreen start={start} />}
                {question && <QuestionScreen pageNumber={pageNumber} QuestionAnswer={QuestionAnswer} question={question} nextPage={nextPage} />}
                {!question && pageNumber !== -1 && <EndScreen point={point} QuestionAnswer={QuestionAnswer} newStart={newStart} />}
            </div>
        </div>
    );
};

export default App;
