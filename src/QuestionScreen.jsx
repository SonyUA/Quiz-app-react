/* eslint-disable react/prop-types */
const QuestionScreen = (props) => {
    const { pageNumber, QuestionAnswer, question, nextPage } = props;
    return (
        <>
            <div className='block__questions'>
                <h1>
                    Питання {pageNumber + 1} / {QuestionAnswer.length}
                </h1>
                <p>{question.question}</p>
            </div>
            <div className='block__answers'>
                <ul>
                    {question.answers.map((el) => (
                        <li key={el} onClick={nextPage}>
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default QuestionScreen;
