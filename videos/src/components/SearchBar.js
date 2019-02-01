import _ from 'lodash';
import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term: '' }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>User Input</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                            onKeyPress={_.debounce(this.onFormSubmit, 250, { 'maxWait': 500 })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
