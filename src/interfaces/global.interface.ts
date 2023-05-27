export interface IGetAll<T> {
  totalItems: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  nextPage?: number;
  previousPage?: number;
  data: T[];
}

export interface IPagination {
  totalPages: number;
  pageNumber: number;
  nextPage?: number;
  previousPage?: number;
}
