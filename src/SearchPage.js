import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />

			<ChannelRow
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
				channel="MDedeAlfaruq"
				verified
				subs="100M"
				noOfVideos={321}
				description="This is my family friendly channel"
			/>

			<hr />

			<VideoRow
				views="100M"
				subs="100M"
				description="This is insane dude"
				timestamp="1 hour ago"
				channel="MDedeAlfaruq"
				title="THis dude is insane"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
			/>
			<VideoRow
				views="100M"
				subs="100M"
				description="This is insane dude"
				timestamp="1 hour ago"
				channel="MDedeAlfaruq"
				title="THis dude is insane"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
			/>
			<VideoRow
				views="100M"
				subs="100M"
				description="This is insane dude"
				timestamp="1 hour ago"
				channel="MDedeAlfaruq"
				title="THis dude is insane"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
			/>
			<VideoRow
				views="100M"
				subs="100M"
				description="This is insane dude"
				timestamp="1 hour ago"
				channel="MDedeAlfaruq"
				title="THis dude is insane"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
			/>
			<VideoRow
				views="100M"
				subs="100M"
				description="This is insane dude"
				timestamp="1 hour ago"
				channel="MDedeAlfaruq"
				title="THis dude is insane"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
			/>
			<VideoRow
				views="100M"
				subs="100M"
				description="This is insane dude"
				timestamp="1 hour ago"
				channel="MDedeAlfaruq"
				title="THis dude is insane"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
			/>
			<VideoRow
				views="100M"
				subs="100M"
				description="This is insane dude"
				timestamp="1 hour ago"
				channel="MDedeAlfaruq"
				title="THis dude is insane"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
			/>
			<VideoRow
				views="100M"
				subs="100M"
				description="This is insane dude"
				timestamp="1 hour ago"
				channel="MDedeAlfaruq"
				title="THis dude is insane"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
			/>
			<VideoRow
				views="100M"
				subs="100M"
				description="This is insane dude"
				timestamp="1 hour ago"
				channel="MDedeAlfaruq"
				title="THis dude is insane"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
			/>
		</div>
	);
}

export default SearchPage;
