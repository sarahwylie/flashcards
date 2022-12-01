import { useState } from "react";
import '../index.css'

const Flashcards = ({ query, cardStyle }) => {
    const [flip, setFlip] = useState(false);

    return (
        <div className={`current-card ${cardStyle}`}>
            <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)} style={{ width: '100%' }}>
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
