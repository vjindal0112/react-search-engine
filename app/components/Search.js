import React, { Fragment } from 'react';
import { SearchBar } from './SearchBar';
import Results from './Results';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleQuery(query) {
    this.setState({
      'query': query.toLowerCase().trim()
    });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar onQuery={this.handleQuery.bind(this)}/>
        <Results products={this.props.products} query={this.state.query}/>
      </React.Fragment>
    )
  };
}

export default Search;
