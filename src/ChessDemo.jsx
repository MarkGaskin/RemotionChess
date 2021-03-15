import Chess from 'chess.js';
import Chessboard from 'chessboardjsx';
import React, {Component} from 'react';
import {random} from 'remotion';
import text from "../pgn/game.js";
import squareStyleDefault from "../src/SquareStyleDefault"
import {AbsoluteFill, Img} from 'remotion';
import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';

class ChessGameComponent extends Component {
	state = {fen: 'start', moveIndex: 0, duration: 8000, squareStyle: squareStyleDefault, whitePlayerName: "Default", blackPlayerName: "Default"};


	componentDidMount() {

		this.gameObj = JSON.parse(text)

		this.setState({whitePlayerName: this.gameObj.WhitePlayerName, blackPlayerName: this.gameObj.BlackPlayerName})

		console.log(this.gameObj.SquareStylesArray.length)
		console.log(this.gameObj.SquareStylesArray[this.gameObj.SquareStylesArray.length-1])
		console.log(this.gameObj.FENArray.length)
		console.log(this.gameObj.CastleMoveNumbers)

		setTimeout(() => this.makeNextMove(), 20000);
	}

	componentWillUnmount() {
		window.clearTimeout(this.timer());
	}

	timer = () => window.setTimeout(this.makeNextMove, 20000);

	makeNextMove = () => {
		console.log("Making next move");

		var index = this.state.moveIndex;
		console.log(index);
		

		const currentFEN = this.gameObj.FENArray[index];
		const currentStyle = this.gameObj.SquareStylesArray[index];

		console.log(currentFEN);
		console.log(currentStyle);

		if (this.gameObj.CastleMoveNumbers.includes(index-1))
		{
			this.setState({moveIndex: index+1});
			setTimeout(() => this.handleCastle(currentFEN, currentStyle), 12000);
			
		}
		else if (index == this.gameObj.FENArray.length - 1)
		{
			this.setState({fen: currentFEN, moveIndex: index+1});
			setTimeout(() => this.updateSquareStyle(currentStyle), 5000);
		}
		else
		{
			this.setState({fen: currentFEN, moveIndex: index+1});
			setTimeout(() => this.updateSquareStyle(currentStyle), 15500);
		}

		if (index < this.gameObj.FENArray.length - 1)
		{
			this.timer();
		}
	};

	updateSquareStyle = (currentStyle) => {
		this.setState({squareStyle: currentStyle})
	}

	handleCastle = (currentFen, currentStyle) => {
		this.setState({squareStyle: currentStyle, fen: currentFen})
	}

	render() {
		const {fen, duration, squareStyle, whitePlayerName, blackPlayerName} = this.state;
		return this.props.children({position: fen, duration: duration, squareStyle: squareStyle, whitePlayerName: whitePlayerName, blackPlayerName: blackPlayerName});
	}
}

const boardsContainer = {
  display: "flex",
	flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
};

const namesContainer = {
	display: "flex",
	flexDirection: "column",
	height: 1080,
	marginLeft: -200,
	marginRight: -550,
	justifyContent: "space-around",
  flexWrap: "wrap"
}

const boardsStyle = {
	marginTop: 20,
	marginBottom: 20,
	marginLeft: -300 }

const blackNameStyle = {
	width: 400,
	marginTop: "80px",
	marginBottom: "auto",
	padding: "20px",
	borderRadius: "20px",
	backgroundColor: "rgba(170,210,255,0.8)"
}

const whiteNameStyle = {
	width: 400,
	marginTop: "auto",
	marginBottom: "80px",
	padding: "20px",
	borderRadius: "20px",
	backgroundColor: "rgba(255,160,160,0.8)"
}

const Subtitle = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 400;
	font-size: 40px;
	line-height: 1.5;
	font-weight: 700;
	text-align: center;
`;

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	padding: 40px;
`;

const ChessGame = () => {
	return (
		
				<ChessGameComponent>
					{({position, duration, squareStyle, whitePlayerName, blackPlayerName}) => (
						<div
						style={boardsContainer}	
						width={1920}
						height={1080}>
							<div
								style={namesContainer}
								height={1080}
								width={400}>
								<Container>
									<Subtitle
										style={blackNameStyle}>
										{blackPlayerName}
									</Subtitle>
								</Container>
								<Container>
									<Subtitle
										style={whiteNameStyle}>
										{whitePlayerName}
									</Subtitle>
								</Container>
							</div>
						<Chessboard
							width={980}
							id="random"
							style={boardsStyle}
							transitionDuration={duration}
							position={position}
							showNotation={false}
							squareStyles={squareStyle}
							boardStyle={{
								borderRadius: '20px',
								boxShadow: `20px 20px 20px 20px rgba(0, 0, 0, 0.5)`,
							}}
							lightSquareStyle={{ backgroundColor: 'rgb(255, 255, 255)'}}
							darkSquareStyle={{ backgroundColor: 'rgb(220, 220, 220)'}}
						/>
					</div>
					)}
				</ChessGameComponent>
		
	);
};

export const ChessDemo = () => {
	return (
		<>
			<ChessGame />
		</>
	);
};
