import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;

	width: 100%;
	max-width: 700px;

	border: 0.5px solid lightgray;
	border-radius: 12px;
	/* box-shadow: 8px 8px 15px rgba(0,0,0, 0.3),
				-8px -8px 15px rgba(255, 255, 255, 0.8); */
	background-color: var(--main-light-color);

	color: black;

	@media only screen and (max-width: 580px) {
		.default-container {
			padding: 10px;
			border-radius: 8px;
			background-color: var(--main-light-color);
		}
	}
`;

export const Header = styled.div`

	display: flex;
	align-items: center;
	justify-content: space-evenly;

	height: 80px;

	background: linear-gradient(90deg, rgb(46, 43, 43) 80% , var(--sec-dark-color));

	color: var(--main-light-color);
	font-weight: bold;
	font-size: 26pt;

	@media only screen and (max-width: 580px) {
		.header {
			margin: -10px -10px 10px -10px;
		}
	}
`;