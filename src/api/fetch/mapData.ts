

const mapData = async<T,K> (fetch:Promise<T[]|undefined>, elements:(value: T) => K, setError: Function, t:Function) => {
    
    try {
        const response = await fetch;
        const data = response?.map(elements) ?? [];
        return data;
    } catch (error) {
        setError(t('error.serverResponse'));
    }

}

export default mapData;