import React, { Component } from 'react';
import './Quote.css';

const axios = require('axios');

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    };
    this.getQuoteFromRandomQuote = this.getQuoteFromRandomQuote.bind(this);
  }

  componentDidMount = () => {
    this.getQuoteFromRandomQuote();
    setInterval(() => this.getQuoteFromRandomQuote(), 10000);
  };

  getQuoteFromRandomQuote() {
    axios('https://talaikis.com/api/quotes/random/')
      .then(data => {
        const { author, quote } = data.data;
        this.setState({ quote: `{${author}} ${quote} @Random Quote` });
      })
      .catch(err => new Error(err));
  }

  render() {
    return <div class="quote">{this.state.quote}</div>;
  }
}

export default Quote;
