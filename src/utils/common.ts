import type { GetProp, UploadProps } from 'antd';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import saveAs from 'file-saver';
import { toast } from 'react-toastify';

import baseApi from './baseApi';

type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default';
export type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const notify = (message: string, type?: ToastType): void => {
  if (type === 'info') {
    toast.info(message);
  }
  if (type === 'success') {
    toast.success(message);
  }
  if (type === 'warning') {
    toast.warning(message);
  }
  if (type === 'error') {
    toast.error(message);
  }
  if (!type || type === 'default') {
    toast(message);
  }
};

export const readVietnameseCurrency = (amount: number): String => {
  if (amount >= 1000000000) {
    if (amount % 1000000000 === 0) {
      return `${amount / 1000000000} tỷ`;
    }
    return `${(amount / 1000000000).toFixed(2)} tỷ`;
  }
  if (amount >= 1000000) {
    if (amount % 1000000 === 0) {
      return `${amount / 1000000} triệu`;
    }
    return `${(amount / 1000000).toFixed(2)} triệu`;
  }
  return `${amount.toLocaleString('vi-VN')} đồng`;
};

// so sánh thời gian hiện tại với thời gian truyền vào , trả về kiều 1 ngày trước, 1 giờ trước ....
export const checkTimeAgo = (time: string) => {
  const now = dayjs();
  const differenceInHours = now.diff(time, 'hour');
  const differenceInDays = now.diff(time, 'day');

  if (differenceInDays > 0) {
    return `${differenceInDays} ngày trước`;
  }
  if (differenceInHours >= 1) {
    return `${differenceInHours} giờ trước`;
  }
  return 'Vài phút trước';
};

const refreshAccessToken = async (token: string): Promise<any> => {
  const res = await baseApi.post(
    '/security-service/oauth/token',
    {
      grant_type: 'refresh_token',
      refresh_token: token,
    },
    {
      headers: {
        Authorization: `Basic d2ViYXBwOmVuYW9AMTIz`,
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res;
};

const handleRefreshToken = (refreshToken: string) => {
  refreshAccessToken(refreshToken);
};

export const handleError = async (error: any): Promise<void> => {
  console.error("API Error:", error);

  if (error.code === "ERR_NETWORK") {
    toast.error("Không thể kết nối tới server. Vui lòng kiểm tra kết nối mạng.");

  } else if (error.response) {
    const { status, data } = error.response;
    if (status === 404) {
      toast.error("Không tìm thấy API. Vui lòng kiểm tra URL.");
    } else if (status === 500) {
      toast.error("Lỗi server. Vui lòng thử lại sau.");
    } else {
      toast.error(data?.message || "Đã xảy ra lỗi.");
    }
  } else {
    toast.error("Lỗi không xác định. Vui lòng thử lại.");
  }
};

export const getRequest = (url: string, config?: AxiosRequestConfig): Promise<any> => {
  return new Promise((resolve, reject) => {
    baseApi
      .get(url, config)
      .then((res: AxiosResponse) => resolve(res?.data))
      .catch((err: AxiosError) => reject(err));
  });
};

export const getFileRequest = (url: string, config?: AxiosRequestConfig, fileName?: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    baseApi
      .get(url, config)
      .then((res: AxiosResponse) => {
        const contentDispositionHeader = res.headers['content-disposition'];

        // if (contentDispositionHeader) {
        //   // Xử lý thông tin trong header Content-Disposition ở đây
        //   console.log(decodeURIComponent(contentDispositionHeader));
        // } else {
        //   console.log('Không tìm thấy dữ liệu.');
        // }
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;

        const matches = filenameRegex.exec(contentDispositionHeader);

        const filename = matches && matches[1] ? matches[1].replace(/['"]/g, '') : fileName || 'unknown';

        // console.log('Tên tệp tin:', decodeURIComponent(filename));
        const blob = new Blob([res.data], {
          type: res.headers['content-type'],
        });
        saveAs(blob, decodeURIComponent(filename) || 'File lỗi');
        return resolve(res?.data);
      })
      .catch((err: AxiosError) => reject(err));
  });
};

export const postFileRequest = (
  url: string,
  data: any,
  fileName?: string,
  config?: AxiosRequestConfig,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    baseApi
      .post(url, data, config)
      .then((res: AxiosResponse) => {
        const contentDispositionHeader = res.headers['content-disposition'];

        // if (contentDispositionHeader) {
        //   // Xử lý thông tin trong header Content-Disposition ở đây
        //   console.log(decodeURIComponent(contentDispositionHeader));
        // } else {
        //   console.log('Không tìm thấy dữ liệu.');
        // }
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;

        const matches = filenameRegex.exec(contentDispositionHeader);

        const filename = matches && matches[1] ? matches[1].replace(/['"]/g, '') : fileName || 'unknown';

        // console.log('Tên tệp tin:', decodeURIComponent(filename));
        const blob = new Blob([res.data], {
          type: res.headers['content-type'],
        });
        saveAs(blob, decodeURIComponent(filename) || 'File lỗi');
        return resolve(res?.data);
      })
      .catch((err: AxiosError) => reject(err));
  });
};

export const postRequest = (url: string, data: any, config?: AxiosRequestConfig): Promise<any> => {
  return new Promise((resolve, reject) => {
    baseApi
      .post(url, data, config)
      .then((res: AxiosResponse) => resolve(res?.data))
      .catch((err: AxiosError) => reject(err));
  });
};

export const putRequest = (url: string, data: any, config?: AxiosRequestConfig): Promise<any> => {
  return new Promise((resolve, reject) => {
    baseApi
      .put(url, data, config)
      .then((res: AxiosResponse) => resolve(res?.data))
      .catch((err: AxiosError) => reject(err));
  });
};

export const downloadFile = (data: any, fileName: string): void => {
  const blob = new Blob(data);
  saveAs(blob, fileName);
};

//  hàm convert string sang number
export const convertStringToNumber = (input: string): number | null => {
  const numberValue: number = parseFloat(input);
  if (!numberValue) {
    return null;
  }
  return numberValue;
};

// hàm convert từ string sang boolean
export const stringToBoolean = (value: string): boolean => {
  const lowerCaseValue = value && value.toLowerCase().trim();
  if (lowerCaseValue === 'true' || lowerCaseValue === '1') {
    return true;
  }
  if (lowerCaseValue === 'false' || lowerCaseValue === '0') {
    return false;
  }
  return false;
};

export const formatDate = (value: any, condition: string) => {
  return value ? dayjs(value).format(condition || 'DD/MM/YYYY') : null;
};

export const deleteRequest = (url: string, config?: AxiosRequestConfig): Promise<any> => {
  return new Promise((resolve, reject) => {
    baseApi
      .delete(url, config)
      .then((res: AxiosResponse) => resolve(res?.data))
      .catch((err: AxiosError) => reject(err));
  });
};

export const onCheckErrorCode = (val?: string, messageId?: string) => {
  if (val && messageId) {
    const codes: any = sessionStorage?.getItem('code');
    const value = JSON.parse(codes);
    const errorCodeMatchedItem = value?.find((itm: any) => itm?.errorCode === val);
    const messageIdMatchedItem = value?.find((itm: any) => itm?.messageId === messageId);

    if (errorCodeMatchedItem && messageIdMatchedItem) {
      const message = value.find((item: any) => item.messageId === messageId).messageVI;
      return notify(`${message}`, 'error');
    }

    if (messageId === 'Access denied') {
      return notify(`Người dùng không có quyền`, 'error');
    }

    return notify(`${messageId}`, 'error');
  }
  return notify('Lỗi hệ thống, xin vui lòng thử lại', 'error');
};

// Disabled ngày hiện tại
export const disabledDateToDay = (current: Dayjs | null) => {
  // Lấy ngày hôm nay
  const today = dayjs().startOf('day');
  // Chuyển current thành đối tượng Day.js
  const currentDay = dayjs(current).startOf('day');
  // So sánh nếu currentDay trước today
  return currentDay.isAfter(today);
};

export const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const getCookie = (name: any) => {
  const value = `; ${document.cookie}`;
  const parts: any = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
