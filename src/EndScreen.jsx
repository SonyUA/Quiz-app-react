/* eslint-disable react/prop-types */

const EndScreen = (props) => {
    const { point, QuestionAnswer, newStart } = props;
    return (
        <>
            <div className='block__questions'>
                <h1>Вітаю !!!</h1>
                <p>
                    Ти відповів(ла) правильно на {point} з {QuestionAnswer.length} запитань.
                </p>
            </div>
            <div className='block__answers'>
                <ul>
                    <li onClick={newStart}>Спробувати ще раз</li>
                </ul>
            </div>
        </>
    );
};

export default EndScreen;
