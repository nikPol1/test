import React from 'react'

const Input = () => {
    const [text, setText] = React.useState('поле ввода');
    const [count, setCount] = React.useState(0)

    const handlerInput = (e) => {
        setText(e.target.value);
        setCount(String(e.target.value).length);
    }

    React.useEffect(() =>{
        console.log(text);
    }, [text])

    return (
        <div>
        <input type="text" value={text} onChange={handlerInput}/>
        <p>У вас статья {count} символов</p>
        </div>
    )
}

export default Input
