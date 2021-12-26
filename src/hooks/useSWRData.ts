import { BASEURL_ENDPOINT } from "../constant";
import { fetcherGET } from "../utils";
import useSWR from 'swr';

export const useSWRData = (path: string) => {
  return useSWR(`${BASEURL_ENDPOINT}${path}`, fetcherGET);
}