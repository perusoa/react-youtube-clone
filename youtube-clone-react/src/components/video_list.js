import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  //If there are no video results, don't show the sidebar
  if ( !props.videos.length ) {
    return false;
  }

  //Iterate through the array of video results and make list items for each
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
              onVideoSelect={props.onVideoSelect}
              key={video.etag}
              video={video} />;
  });

  return (
    <ul className="video-list">
      <h3 className="video-list-title">Related Videos</h3>
      { videoItems }
    </ul>
  );
}

export default VideoList;