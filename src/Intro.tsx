import React, {Component} from 'react';
import {random} from 'remotion';
import {AbsoluteFill, Img} from 'remotion';
import styled from 'styled-components';

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

export const Intro: React.FC = () => {
	return (
		<Container>
				<Subtitle>www.remotion.dev</Subtitle>
				<br />
				<br />
				<Subtitle> Test </Subtitle>
		</Container>
	);
};