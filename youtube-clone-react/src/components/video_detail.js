import React from 'react';

const VideoDetail = (props) => {
  const video = props.video;

  //If there is no video display the words loading
  if ( !video ) {
    return <div>Sorry, nothing matched your search terms. Try searching something else!</div>;
  }

  //If there is no video description display a simple message
  if ( video.snippet.description == '' ) {
    video.snippet.description = 'Sorry, there is no description available for this video.';
  }

  //Get the ID of the video
  const videoId = video.id.videoId;

  //Build the URL for the iframe embed
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="video-embed">
        <iframe className="video-player" src={ url }></iframe>
      </div>
      <div className="details">
        <span className="publisher">Published by: <span className="publisher-name">{ video.snippet.channelTitle }</span></span>
        <h1 className="video-title">{ video.snippet.title }</h1>
        <div className="video-description">{ video.snippet.description }</div>
      </div>
    </div>
  );
};

export default VideoDetail;