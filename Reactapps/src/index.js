
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyAsGiZFVs1HlmHTtjFh3dfrARGj-M_TlOA'



class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      videos:[],
      selectedVideo: null
    }
    this.videoSearch('Kali Linux App Store')
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term},(videos)=>{
      this.setState({
      videos,
      selectedVideo: videos[1]})
    })
  }

  render(){
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)},300)
    console.log(this.state.videos)
    return (
      <div>
        <SearchBar onSeachTermChange={videoSearch}/>
        <VideoDetail video = {this.state.selectedVideo || this.state.videos[0]} />
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({ selectedVideo}) }/>
      </div>
    );
  }
}

ReactDOM.render( <App />, document.querySelector('.container'))
