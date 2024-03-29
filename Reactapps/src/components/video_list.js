import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props)=>{
  const videoItems = props.videos.map((video)=>{
    console.log(props.onVideoSelect)
    return (<VideoListItem
      video = {video}
      key={video.etag}
      onVideoSelect={props.onVideoSelect}
    />)
  });
console.log(props.videos)
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;
