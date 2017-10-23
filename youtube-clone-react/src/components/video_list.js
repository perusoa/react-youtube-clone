import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

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