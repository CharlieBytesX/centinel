export type Callback<T> = (data: T) => void;

export class Observable<T> {
  private subscribers: Set<Callback<T>>;
  private item: T;

  constructor(item: T) {
    this.subscribers = new Set();
    this.item = item;
  }

  get(): Readonly<T> {
    return (this.item);
  }

  getCopy():T{
    return structuredClone(this.item)
  }

  subscribe(callback: Callback<T>): void {
    this.subscribers.add(callback);
  }

  unsubscribe(callback: Callback<T>): void {
    this.subscribers.delete(callback);
  }

  set(data: T): void {
    this.item = data;
    this.subscribers.forEach((callback) => callback(this.item));
  }
}
