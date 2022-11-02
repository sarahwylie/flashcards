import { useState } from "react";
import '../index.css'

const Flashcards = ({ query }) => {
    const [flip, setFlip] = useState(false);

    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className='front'>
                {query.question}
            </div>
            <div className="back">
                <div>{query.answer}</div>
                <div className="source">Source: {query.source}</div>
            </div>
        </div>
    );
}

export default Flashcards;
