export type SequenceCallback<T extends any[]> = (sequence: T) => void;

export type PageLoader<T extends any[]> = (page: number) => Promise<T>;

export type OnData<T extends any[]> = (date: T) => void;

export interface InfiniteScrollOptions<T extends any[]> {
  buffer: number;
  pageSize: number;
  onData: OnData<T>;
  currentPage?: number;
  loadNextSequence: PageLoader<T>;
}
