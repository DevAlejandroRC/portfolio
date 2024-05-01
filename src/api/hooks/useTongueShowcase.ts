import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { urlLang } from "../urls/showcases";
import { IShowcases } from "../interfaces/IShowcases";
import fetchData from "../fetch/fetchData";
import mapData from "../fetch/mapData";
import elements from "../fetch/elements/showcases";

const useLangShowcases = (language: string) =>{
    
    const { t } = useTranslation();

    const [data, setData] = useState<IShowcases[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    
    useEffect(()=>{

        const response = fetchData<any, IShowcases[]>({tag: language}, urlLang, setData, setError, setLoading, t);
        mapData<IShowcases,IShowcases>(response, elements ,setError, t).then( data => setData(data ?? []));
        return;

    },[language, t]);

    return {data, loading, error};

}

export default useLangShowcases;