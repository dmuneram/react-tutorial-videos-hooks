import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video) => {
    const key = video.id.videoId ? video.id.videoId : video.id.channelId;

    return <VideoItem key={key} video={video} onVideoSelect={onVideoSelect} />;
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
