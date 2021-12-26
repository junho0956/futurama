import axios from "axios";

export const fetcherGET = (url: string) => axios.get(url).then(res => res.data);