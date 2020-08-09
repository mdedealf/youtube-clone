import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
	return (
		<div className="recommendedVideos">
			<h2>Recommended</h2>
			<VideoCard />
		</div>
	);
}

export default RecommendedVideos;
