import { projectsReducer } from './projects/Reducer';
import { openSourceProjectsReducer } from './open-source/Reducer';
import { socialMediaReducer } from './home/Reducer';
import { blogReducer } from './blog/Reducer';

export const rootReducer = (state, action) => {
  return {
    projects: projectsReducer(state.projects, action),
    openSourceProjects:
      openSourceProjectsReducer(state.openSourceProjects, action),
    socialMedia: socialMediaReducer(state.socialMedia, action),
    blog: blogReducer(state.blog, action),
  };
};
