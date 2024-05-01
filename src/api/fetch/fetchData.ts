import axios from 'axios';

const fetchData = async <TRequest, TResponse> (request:TRequest, url: Function,
    setData:Function, setError:Function, setLoading:Function, t: Function): Promise<TResponse|undefined> => {

    try {
        const project = url(request);
        const response = await axios.get<TResponse>(project);
        setData(response.data);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            const axiosError = error;
            if (axiosError.response) {
                setError(`Error: ${axiosError.response.status} - ${axiosError.response.statusText}`);
            } else if (axiosError.request) {
                setError(`${t('error.serverResponse')}`);
            } else {
                setError(`${t('error.requestProcessing')}`);
            }
        } else {
            setError(`${t('error.request')}`);
        }
    } finally {
        setLoading(false);
    }

}

export default fetchData;
