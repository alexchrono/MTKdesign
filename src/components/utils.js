export const MakeButton = ({ type = "button", onClick, text, buttonId }) => {
    let imageSrc = `${process.env.PUBLIC_URL}/images/Blue-Button.png`;

    return (
        <button
            type={type}
            className="realButtonz"
            onClick={onClick}
            {...(buttonId && { id: buttonId })} // Conditionally apply the id attribute
        >
            <img
                src={imageSrc}
                alt={text}
                className="object-contain w-[auto] h-[70%]" // Adjust the width and height as needed
            />
            {text === 'loading' ?
                <img src={`${process.env.PUBLIC_URL}/images/loading.gif`}
                    className='absolute'
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /> :






                <p
                    className="buttonMaster"

                >
                    {text}
                </p>}
        </button>
    );
};
