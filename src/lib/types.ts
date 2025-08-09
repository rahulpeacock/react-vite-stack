// Generic types
export type FetchJsonResponse<T = never> = {
  status: 'SUCCESS' | 'ERROR';
  message: string;
  data: T;
};

export type ProtectedRouteFetchError<T = never> =
  | {
      type: 'FAILED_TO_FETCH';
    }
  | {
      type: 'UNAUTHORIZED';
    }
  | {
      type: 'CLIENT_ERROR';
      error: string;
    }
  | {
      type: 'INTERNAL_SERVER_ERROR';
    }
  | {
      type: 'UNKNOWN_ERROR';
    }
  | T;

export type PublicRouteFetchError<T = never> =
  | {
      type: 'FAILED_TO_FETCH';
    }
  | {
      type: 'CLIENT_ERROR';
      error: string;
    }
  | {
      type: 'INTERNAL_SERVER_ERROR';
    }
  | {
      type: 'UNKNOWN_ERROR';
    }
  | T;

// Auth
export type LoginResposne = FetchJsonResponse<void>;
