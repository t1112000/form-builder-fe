declare interface Pagination {
  page?: number;
  pageSize?: number;
}

declare interface ListState<T> extends Pagination {
  data?: T[];
  total?: number;
}

declare interface CommonResponse {
  statusCode: number;
}
