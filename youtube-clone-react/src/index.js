import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import YTSearch from 'youtube-api-search';

//Import the external components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//YouTube API Key
const API_KEY = 'AIzaSyCaGoZUdH3KRUzieyQy0p9461X90oDu66o';

class App extends Component {
  constructor(props) {
    super(props);

    //Declare initial state variables
    this.state = {
      videos: [],
      selectedVideo: null
    };

    //Set an initial search term so that it doesn't show up blank
    this.videoSearch('URBN Campus');
  }


  //Method for the actual handling of the search terms
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    //Ease up on the search so that it doesnt keep refreshing as you type
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <SearchBar onSearchTermChange={ videoSearch } />
            <div className="max-container">
              <div className="row">
                <div className="col-md-8 video-playing">
                  <VideoDetail video={ this.state.selectedVideo } />
                </div>
                <div className="col-md-4 video-lists">
                    <VideoList
                      onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo })}
                      videos={ this.state.videos } />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
