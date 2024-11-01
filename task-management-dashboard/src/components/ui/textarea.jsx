import { useState, useEffect, useRef } from "react";

const TextArea = ({ placeholder }) => {
    const [content, setContent] = useState(''); // div 내부 내용
    const divRef = useRef(null);

    const handleInput = () => {
        const text = divRef.current.textContent; // 공백을 제거한 텍스트
        setContent(text);
    }

    useEffect(() => {
        if(!content) divRef.current.textContent = "";
    }, [content]);

    return (
        <div data-placeholder={placeholder} ref={divRef} onInput={handleInput} className={`comment`} contentEditable suppressContentEditableWarning={true} />
    )
}

export default TextArea;