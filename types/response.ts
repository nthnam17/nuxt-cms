export interface IResponse<T = any> {
    code: number;
    message: string;
    errors: any;
    status: boolean;
    data: T;
}

export interface IResponseHasPage<T> {
    pageIndex: string;
    pageSize: string;
    totalPages: number;
    totalItems: number;
    items: T[];
}
