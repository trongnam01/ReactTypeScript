import { useQuery } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

import baseApi from '@/utils/baseApi';
import { getRequest, postRequest } from '@/utils/common';

interface QueryParams {
  type: string;
  level?: null | number;
  // onSuccessCallback?: (data: ApiListResponse<CommonList>) => void;
  // onErrorCallback?: (error: Error) => void;
}

export const getList = (url: string, type?: string): Promise<any> => {
  if (type === 'EXAMPLE') {
    return new Promise((resolve, reject) => {
      baseApi
        .get(url)
        .then((res: AxiosResponse) => resolve(res?.data))
        .catch((err: Error) => reject(err));
    });
  }
  return getRequest(url);
};

export const useGetCommon = ({
  type,
  // onSuccessCallback,
  // onErrorCallback,
}: QueryParams) => {
  const configRequest = {
    retry: 1,
    cacheTime: 5 * 24 * 60 * 60 * 1000, // 5 ngày
    staleTime: 5 * 24 * 60 * 60 * 1000, // 5 ngày
  };
  let url = '';
  switch (type) {
    case 'PROVINCE':
      url = 'share-service/api/v1/locate/find-province';
      break;
    default:
      url = '';
  }

  const QUERY_KEY = [url, type];
  const data = useQuery<any>({
    queryKey: QUERY_KEY,
    queryFn: () => {
      if (type === 'TITLE_TREE') {
        return postRequest(url, { type: 'TITLE' });
      }
      return getList(url, type);
    },
    ...configRequest,
  });
  return data;
};

export const useGetCategoryCommon = ({ type, level }: QueryParams) => {
  const configRequest = {
    retry: 1,
    cacheTime: 5 * 24 * 60 * 60 * 1000, // 5 ngày
    staleTime: 5 * 24 * 60 * 60 * 1000, // 5 ngày
  };
  let url = '';
  switch (type) {
    case 'SKILL':
    case 'TITLE':
      url = 'category/advance-search';
      break;

    default:
      url = '';
      break;
  }
  const QUERY_KEY = [url, type, level];
  const data = useQuery<any>({
    queryKey: QUERY_KEY,
    queryFn: () =>
      postRequest(url, {
        type: type || '',
        level: level || 1,
        page: 0,
        size: 9999,
      }),
    ...configRequest,
  });
  return data;
};
