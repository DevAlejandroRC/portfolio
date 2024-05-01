import { programmingUrl } from "..";
interface IProgrammingLang{
    tag: string;
}

export const urlTag = ({tag}:IProgrammingLang) => `${programmingUrl}/${tag}`;