import {AbsoluteFill, Audio, Sequence, useCurrentFrame} from 'remotion';
import {Transition} from './Transition';
import {ChessDemo} from './ChessDemo';
import {EndCard} from './EndCard';
import {Intro} from './Intro';


export const Main: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<div style={{flex: 1, backgroundImage: `url("https://unsplash.it/1920/1080?random")`}}>
			<div>
				<Sequence from={0} durationInFrames={4250}>
					<Transition type="out">
						<ChessDemo />
					</Transition>
				</Sequence>
				<Sequence from={4250} durationInFrames={200}>
					<Transition type="in">
						<EndCard />
					</Transition>
				</Sequence>
				</div>
		</div>
	);

};