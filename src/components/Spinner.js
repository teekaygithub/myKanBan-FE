const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <span style={{display: "none"}}>Loading</span>
            </div>
            <h3>Loading...</h3>
        </div>
    );
}

export default Spinner;