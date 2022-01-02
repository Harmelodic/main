import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from './middleware';
import { ProjectList } from '../../../lib/ProjectList';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';


export default function Projects(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		props.updatePath();
		dispatch(fetchProjects());
	}, []);

	const projects = useSelector(store => store.projects);

	return (
		<Main>
			<ProjectList projects={projects} />
			<ReadingSpace />
		</Main>
	);
}
