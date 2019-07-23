import React from "react"
import ReactDOM from 'react-dom';
import LoadableBar from "./IssueUI"

function App(){
    return(
        <LoadableBar />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));