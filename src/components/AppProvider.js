import React, { Component } from 'react';
import { AppContext } from '../contexts/AppContext';
import { env } from '../../env.js'

export default class AppProvider extends Component {
  state = {
    query: "",
    results: [],
    selectedImage: {}
  }

  fetchImages = (callback) => {
    const { BASE_URL, apiKeyPrepend, API_KEY, queryPrePend } = env;
    const queryURL = encodeURI(BASE_URL + apiKeyPrepend + API_KEY + queryPrePend + this.state.query);
    fetch(queryURL)
      .then(response => response.json())
      .then(data => this.setState({results: data.hits}, () => callback()))
    };

  updateQuery = query => this.setState({ query })
    
  updateSelection = (image, callback) => this.setState({selectedImage: image}, () => callback())
    
  render() {
    return (
      <AppContext.Provider value={{
        query: this.state.query,
        results: this.state.results,
        fetchImages: this.fetchImages,
        updateQuery: this.updateQuery,
        selectedImage: this.state.selectedImage,
        updateSelection: this.updateSelection
      }}>
        {this.props.children}
      </AppContext.Provider>

    )
  }
}