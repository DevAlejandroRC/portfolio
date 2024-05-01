import { IShowcases } from "../../interfaces/IShowcases";

const elements = (project:IShowcases) => ({
    name: project.name,
    overview: project.overview,
    image: `/assets/images/showcases/${project.name.toLowerCase()}.png`,
    url: project.url,
    category: project.category,
    progress: project.progress,
    technology: project.technology
});

export default elements;