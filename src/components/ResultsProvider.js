import React, { Component } from 'react';
import { ResultsContext } from '../contexts/ResultsContext';
import { env } from '../../env.js'

export default class ResultsProvider extends Component {
  state = {
    results: []
  }

  fetchImages = () => {
    const { BASE_URL, apiKeyPrepend, API_KEY, queryPrePend } = env;
    const queryURL = encodeURI(BASE_URL + apiKeyPrepend + API_KEY + queryPrePend + this.state.query);
    fetch(queryURL)
      .then(response => response.json())
      .then(data => this.setState({results: data.hits }))
    };

  render() {
    return (
      <ResultsContext.Provider value={{
        results: this.state.results,
        fetchImages: this.fetchImages
      }}>
        {this.props.children}
      </ResultsContext.Provider>

    )
  }
}