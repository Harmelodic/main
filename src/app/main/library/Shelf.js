import styled from 'styled-components';

const ShelfBox = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
	
	margin: 0 10px 20px 10px;
	border: solid 1px ${props => props.theme.colors.softBorder};
	border-radius: 5px;
	padding: 0 20px 15px 20px;
	width: calc(50% - 60px);
`;

const ShelfTitle = styled.h3`
	font-weight: ${props => props.theme.font.weight};
	color: ${props => props.theme.font.titleColor};
`;

const Links = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
	line-height: 2rem;
	padding-left: 20px;
`;


export function Shelf(props) {
	return (
		<ShelfBox>
			<ShelfTitle>{props.title}</ShelfTitle>
			<Links>
				{props.children}
			</Links>
		</ShelfBox>
	);
}
