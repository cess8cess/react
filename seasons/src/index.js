import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '', loading: true }
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude, loading: false }),
            (error) => this.setState({ errorMessage: error, loading: false })
        );
    }

    renderContent() {
        if (this.state.loading) {
            return <Spinner message="Please accept location request" />;
        }
        return (<SeasonDisplay lat={this.state.lat}></SeasonDisplay>);
    }

    render() {
        return <div className="border red">
            {this.renderContent()}
        </div>
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));