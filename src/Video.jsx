import {Composition, useCurrentFrame} from 'remotion';
import {ChessDemo} from './ChessDemo';
import {EndCard} from './EndCard';
import {Intro} from './Intro';
import {Main} from './Main';

export const RemotionVideo = () => {
	return (
		<>
			{/* <Composition
				id="Intro"
				component={Intro}
				fps={30}
				durationInFrames={120}
				width={1920}
				height={1080}
		  /> */}
			<Composition
				id="Main"
				component={Main}
				durationInFrames={70}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="ChessDemo"
				component={ChessDemo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="EndCard"
				component={EndCard}
				durationInFrames={70}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};