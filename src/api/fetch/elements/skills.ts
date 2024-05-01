import { IProgrammingTongue } from "../../interfaces/IProgrammingTongue";

const elements = (skill:IProgrammingTongue) => ({
    name: skill.name,
    text: skill.text,
    image: `/assets/images/technologies/${skill.name.toLowerCase()}.png`
});

export default elements;