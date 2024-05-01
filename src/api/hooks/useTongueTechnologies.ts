import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { urlTag } from "../urls/programmingLang";
import { IProgrammingTongue } from "../interfaces/IProgrammingTongue";
import fetchData from "../fetch/fetchData";
import mapData from "../fetch/mapData";
import elements from "../fetch/elements/skills";

const useListProgramLang = (tongue: string) =>{

    const { t } = useTranslation();
    
    const [data, setData] = useState<IProgrammingTongue[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    
    useEffect(()=>{
        
        const response = fetchData<any, IProgrammingTongue[]>({tag: tongue}, urlTag, setData, setError, setLoading, t);
        mapData<IProgrammingTongue,IProgrammingTongue>(response, elements ,setError, t).then( data => setData(data ?? []));
        return;

    },[tongue, t]);

    return {data, loading, error};

}

export default useListProgramLang;