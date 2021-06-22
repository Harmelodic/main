import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LoadingTextBlock } from './LoadingTextBlock';

const StyledPost = styled(Link)`
	display: flex;
	flex-flow: column nowrap;
	width: calc(100% - 60px);
	margin-bottom: 0;
	border-bottom: dashed 1px #666;
	padding: 30px;
	text-decoration: none;
	white-space: normal;
	text-align: left;
	transition: all 150ms;

	&:hover {
		color: #000;
		background: #eee;
	}

	&:active {
		background: #ddd;
	}
`;

const StyledTitle = styled.div`
	display: flex;
	font-size: 20px;
	color: #555;
`;


const StyledSubtitle = styled.div`
	display: flex;
	margin-top: 5px;
	font-size: 14px;
	color: #666;
	line-height: 1.6em;
	font-style: italic;
`;

export function Post(props) {
	if (props.loading) {
		return (
			<StyledPost to='#'>
				<StyledTitle>
					<LoadingTextBlock width={400} />
				</StyledTitle>
				<StyledSubtitle>
					<LoadingTextBlock width={150} color='#ddd' />
				</StyledSubtitle>
			</StyledPost>
		);
	} else {
		return (
			<StyledPost to={props.link}>
				<StyledTitle className="heading">{props.title}</StyledTitle>
				<StyledSubtitle>
					{
						props.datePosted
					}
				</StyledSubtitle>
				{
					props.lastUpdated !== props.datePosted &&
					<StyledSubtitle>
						{`Last Updated: ${props.lastUpdated}`}
					</StyledSubtitle>
				}
			</StyledPost>
		);
	}
}
