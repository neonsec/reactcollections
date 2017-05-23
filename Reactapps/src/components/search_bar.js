import React, { Component } from 'react';
import _ from 'lodash';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
        term: ''
      }
  }

  onInputChange(input){
console.log(input.target.value)
this.setState({term: input.target.value})
this.props.onSeachTermChange('this.state.term')
  }
  render(){
    
console.log(this.props)
    return (
      <div className="search-bar">
      <input onChange={event => this.onInputChange(event.target.value)} value={this.state.term}/>

    </div>
    )
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSeachTermChange(term)
  }
}

export default SearchBar;
