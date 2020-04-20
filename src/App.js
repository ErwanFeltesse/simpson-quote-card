import React from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';
import QuoteCardApi from './components/QuoteCardApi';
import QuoteForm from './components/QuoteForm'


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quoteCard:''
      };
      this.getQuoteCard = this.getQuoteCard.bind(this)
    }
    getQuoteCard() {
      // Send the request
      axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state
        .then(data => {
          console.log(data)
          this.setState({
            quoteCard: data[0],
          });
      });}
  
    render() {
  return (
    <div className="App">
      <Navbar />
      <QuoteForm/>
      <QuoteCardApi data = {this.state.quoteCard}/>
      <button type="button" onClick={this.getQuoteCard}>Get QuoteCard</button>
    </div>
  );
}}
export default App;