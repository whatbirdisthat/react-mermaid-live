import React from "react";
import ReactDOM from "react-dom";
import mermaid from "mermaid";

import "./styles.css";

mermaid.initialize({
  startOnLoad: true
});

class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}

function App() {
  return (
    <div className="App">
      <h1>react mermaid 2</h1>
      <Mermaid
        chart={`graph LR;
A-->B;
B-->C;
B-->D(plop lanflz eknlzeknfz);

      `}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
