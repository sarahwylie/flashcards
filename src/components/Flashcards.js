import { useState } from "react";
import '../index.css'

const Flashcards = ({ query }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={open ? 'open' : 'closed'}>
                <div className='front'>
                    {query.question}
                </div>
                <button onClick={() => setOpen(!open)}>{open ? "-" : "+"}</button>
                {open &&
                <div className="back">
                    <div>{query.answer}</div>
                    <div className="source">Source: {query.source}</div>
                </div>}
            </div>
    );
}

export default Flashcards;