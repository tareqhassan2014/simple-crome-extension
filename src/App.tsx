import "./App.css";
import onclick from "./action";
import nexlevLogo from "./assets/nexlev.png";

function App() {
    return (
        <>
            <div>
                <a href="https://nexlev.io" target="_blank">
                    <img src={nexlevLogo} className="logo" alt="NexLev Logo" />
                </a>
            </div>
            <h1>NexLev</h1>
            <p>Youtube analytic platform</p>
            <div className="card">
                <button onClick={onclick}>Action</button>
            </div>
        </>
    );
}

export default App;
