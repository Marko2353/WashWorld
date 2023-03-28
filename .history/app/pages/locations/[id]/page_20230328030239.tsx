import React, { Component } from "react";

class WashInProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1000000,
      message: "",
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.count === 0) {
        clearInterval(this.intervalId);
        this.setState({ message: "¡Tiempo acabado!" });
      } else {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="p-6 bg-white rounded-md">
        <h2 className="mb-4 text-2xl font-bold">Lavado en proceso</h2>
        <p className="mb-2 text-gray-600">
          Tiempo restante: {this.state.count} segundos
        </p>
        {this.state.message && <p className="text-red-500">{this.state.message}</p>}
      </div>
    );
  }
}

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <WashInProcess />
    </div>
  );
}

export default App;