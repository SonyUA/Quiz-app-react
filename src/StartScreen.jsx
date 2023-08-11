/* eslint-disable react/prop-types */
const StartScreen = (props) => {
    const { start } = props;
    return (
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
    );
};

export default StartScreen;
