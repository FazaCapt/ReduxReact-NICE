import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render () {   
        return (                
        <div className="search-bar">                    
            <input 
            value={this.state.term}
            // onChange= { event => this.setState({ term: event.target.value })} 
            onChange= { event => this.oninputChange(event.target.value)}             
            />
        </div>
        );  
    }
    
    oninputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;