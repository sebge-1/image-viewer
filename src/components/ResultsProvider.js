import React, { Component } from 'react';
import { ResultsContext } from '../contexts/ResultsContext';
import { env } from '../../env.js'

export default class ResultsProvider extends Component {
  state = {
    query: "",
    results: []
  }

  fetchImages = () => {
    const { BASE_URL, apiKeyPrepend, API_KEY, queryPrePend } = env;
    const queryURL = encodeURI(BASE_URL + apiKeyPrepend + API_KEY + queryPrePend + this.state.query);
    fetch(queryURL)
      .then(response => response.json())
      .then(data => this.setState({results: data.hits }))
    };

    updateQuery = query => {
      this.setState({ query} )
    }

  render() {
    return (
      <ResultsContext.Provider value={{
        query: this.state.query,
        results: this.state.results,
        fetchImages: this.fetchImages,
        updateQuery: this.updateQuery
      }}>
        {this.props.children}
      </ResultsContext.Provider>

    )
  }
}