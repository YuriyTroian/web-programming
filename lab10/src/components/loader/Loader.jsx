import './loader.css'

const Loader = () => {
    return(
    <div className="Loading">
        <div className="loader-wrapper">
            <div className="loader"></div>
            <p>Loading...</p>
        </div>
        <h1 className="LoadingText">The data is loading please wait</h1>
    </div>
    );
}

export default Loader;