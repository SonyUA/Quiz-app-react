import { useState } from "react";
import "./App.css";
import { QuestionAnswer } from "./QuestionAnswer";
const App = () => {
    const [pageNumber, setPageNumber] = useState(-1);
    const [point, setPoint] = useState(0);
    let question = QuestionAnswer[pageNumber];

    console.log(pageNumber >= QuestionAnswer.length);
    const start = () => {
        setPageNumber((prev) => prev + 1);
    };
    const nextPage = (e) => {
        const name = e.target.innerText;
        if (name === question.correctAnswer) {
            setPoint((prev) => prev + 1);
        }
        if (pageNumber + 1 >= QuestionAnswer.length) {
            question = false;
        }
        setPageNumber((prev) => prev + 1);
    };
    const newStart = () => {
        setPageNumber(-1);
        setPoint(0);
    };
    return (
        <div className='wrapper'>
            {pageNumber === -1 && (
                <>
                    <div className='block__questions'>
                        <h1>Привіт !!!</h1>
                        <p>Вікторина: 5 питань зі світу спорту , справишся ?</p>
                    </div>
                    <div className='block__answers'>
                        <ul>
                            <li onClick={start}>Розпочати</li>
                        </ul>
                    </div>
                </>
            )}
            {question && (
                <>
                    <div className='block__questions'>
                        <h1>
                            Питання {pageNumber + 1} / {QuestionAnswer.length}
                        </h1>
                        <p>{question.question}</p>
                    </div>
                    <div className='block__answers'>
                        <ul>
                            <li onClick={nextPage}>{question.answers[0]}</li>
                            <li onClick={nextPage}>{question.answers[1]}</li>
                            <li onClick={nextPage}>{question.answers[2]}</li>
                            <li onClick={nextPage}>{question.answers[3]}</li>
                        </ul>
                    </div>
                </>
            )}

            {!question && pageNumber !== -1 && (
                <>
                    <div className='block__questions'>
                        <h1>Вітаю !!!</h1>
                        <p>
                            Ти відповів(ла) правильно на {point} з {QuestionAnswer.length} відповідей
                        </p>
                    </div>
                    <div className='block__answers'>
                        <ul>
                            <li onClick={newStart}>Спробувати ще раз</li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
