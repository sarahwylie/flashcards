const Tracker = ({ queryLength, activeIndex, handlePageChange, index }) => {

    let dots = [];
    let classes = "";
    for (let index = 0; index < queryLength; index++) {
        classes = activeIndex === index ? "dot active" : "dot";
        dots.push(<div key={index} className={classes}></div>);
    }

    return (
        <div className="tracker" onClick={() => handlePageChange(index)}>
            <div className="hr"></div>
            {dots.map((dot) => dot)}
        </div>
    );
};

export default Tracker;