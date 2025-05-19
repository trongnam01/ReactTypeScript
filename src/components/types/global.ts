
export type ApiResponseStatus = 0 | 1 | 400 | 401 | 500; // 0 : lỗi, 1: Success, 400: Bad Request, 401: Unauthorize, 500 Server Internal

export interface PostRequestResponse<T> {
    data: T;
    status: ApiResponseStatus;
}

export interface ApiStatusRespone {
    status: ApiResponseStatus;
    errorCode?: string;
    errorMsg?: string;
}
