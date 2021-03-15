import {AbsoluteFill, Audio, Sequence, useCurrentFrame} from 'remotion';
import {Transition} from './Transition';
import {ChessDemo} from './ChessDemo';
import {EndCard} from './EndCard';
import {Intro} from './Intro';
import {background} from '../backgrounds/1.jpg'
import {useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';

const handle = delayRender();

export const Main: React.FC = () => {
	const frame = useCurrentFrame();
  	
  const fetchData = async () => {
    const response = await fetch('https://unsplash.it/1920/1080?random');
    const json = await response.json();
    continueRender(handle);
  }

  useEffect(() => {
    fetchData();
  }, []);

	return (
		<div style={{flex: 1, backgroundImage: `url("https://unsplash.it/1920/1080?random")`}}>
			<div>
				<Sequence from={0} durationInFrames={50 + 8}>
					<Transition type="out">
						<ChessDemo />
					</Transition>
				</Sequence>
				<Sequence from={50} durationInFrames={20}>
					<Transition type="in">
						<EndCard />
					</Transition>
				</Sequence>
				</div>
		</div>
	);

};