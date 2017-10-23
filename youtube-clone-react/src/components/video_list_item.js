import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;

  //Grabe the onVideoSelect prop from parent component
  const onVideoSelect = props.onVideoSelect;

  //Grab the thumbnail image of the video
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={ () => onVideoSelect(video) } className="video-list-item">
      <div className="thumbnail">
        <img src={ imageUrl } />
      </div>
      <div className="title">
        <span className="publish">Published by: <span className="publish-name">{ video.snippet.channelTitle }</span></span>
        { video.snippet.title }
      </div>
    </li>
  );
}

export default VideoListItem;