import { useState } from "react";
import '../index.css'

const Flashcards = ({ query, width }) => {
    const [flip, setFlip] = useState(false);

    return (
        <div className="container">
            <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)} style={{ width: width }}>
                <div className='front'>
                    {query.question}
                </div>
                <div className="back">
                    <div>{query.answer}</div>
                    <div className="source">Source: {query.source}</div>
                </div>
            </div>
        </div>
    );
}

export default Flashcards;
