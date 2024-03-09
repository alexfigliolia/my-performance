export class QuickStack<K, T> extends Map<K, T> {
  private get maxIndex() {
    return this.size - 1;
  }

  public map<V>(callback: (item: T, index: number) => V) {
    const result: V[] = [];
    let pointer = -1;
    for (const [, value] of this) {
      result.push(callback(value, ++pointer));
    }
    return result;
  }

  public mapReverse<V>(callback: (item: T, index: number) => V) {
    const result: V[] = [];
    let pointer = -1;
    for (const [, value] of this) {
      result[this.maxIndex - ++pointer] = callback(value, pointer);
    }
    return result;
  }
}
