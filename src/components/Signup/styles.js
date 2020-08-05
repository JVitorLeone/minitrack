import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	min-height: 100vh;
	min-width: 100vw;

	padding: 20px;
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;

	padding: 20px;
`;

export const InputCouple = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;

	margin-bottom: 16px;
`;

export const Label = styled.label`
	font-size: 16px;
	line-height: 18px;

	margin-bottom: 4px;
`;

export const FeedBack = styled.div`
	font-size: 14px;
	color: red;

	line-height: 16px;

	padding: 2px 8px;

	display: ${ props => props.invalid ? '' : 'none' };
`;
