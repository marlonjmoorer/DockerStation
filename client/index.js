import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'react-desktop/windows';
class HelloMessage extends React.Component {
    render() {
        return <div>
            <div className="container">
                <h1>Hello {this.props.name}</h1>
                <Button push color={"red"} onClick={() => console.log('Clicked!')}>
                    Press me  
                </Button>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yomi" />, App);