import React, {Component} from 'react';
import {random} from 'remotion';
import {AbsoluteFill, Img} from 'remotion';
import styled from 'styled-components';
import endCard from './EndText.png';

const Container = styled(AbsoluteFill)`
	background-color: white;
	justify-content: center;
	align-items: center;
`;

const Subtitle = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 400;
	font-size: 65px;
	line-height: 1.5;
	font-weight: 700;
	text-align: center;
`;

export const EndCard: React.FC = () => {
	return (
		<Container>
			<Img src={endCard} style={{width: 1920}} />
		</Container>
	);
};