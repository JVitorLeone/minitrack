import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--main-accent-color: rgb(72, 219, 99);
		--sec-accent-color: rgb(57, 201, 84);
		--opc-accent-color: rgb(102, 185, 121);
		--main-light-color: rgb(238, 243, 244);
		--sec-light-color: rgb(228, 228, 228);
		--main-dark-color: rgb(90, 86, 85);
		--sec-dark-color: rgb(61, 59, 59);
	}

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	body {
		background-color: var(--sec-light-color);
		min-height: 100vh;
	}

	@media only screen and (max-width: 580px) {
		body {
			display: flex;
			flex-direction: column;

			min-height: 100%;
		}

	}
`;
