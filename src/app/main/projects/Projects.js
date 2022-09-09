import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from './projectsState';
import styled from 'styled-components';
import { ProjectList } from '../../../lib/ProjectList';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import { projectsSelector } from './projectsState';

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
`;

export default function Projects() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProjects());
	}, []);

	const projects = useSelector(projectsSelector);

	return (
		<Main>
			<Title>Projects</Title>
			<Content>
				<ProjectList projects={projects}/>
				<ReadingSpace/>
			</Content>
		</Main>
	);
}
