import { showcaseUrl } from "..";

interface IShowcaseLang{
    tag: string;
}

export const urlLang = ({tag}:IShowcaseLang) => `${showcaseUrl}/${tag}`;