import Fibonacci from "./Fibonacci";

export default class MemoizeFibonacci implements Fibonacci {
  private memo: number[];

  constructor() {
    this.memo = [];
  }

  getByIndex(index: number) {
    if (!this.memo[index] && index >= 0) {
      if (index <= 1) this.memo[index] = index;
      else
        this.memo[index] =
          this.getByIndex(index - 1) + this.getByIndex(index - 2);
    }
    return this.memo[index];
  }
}
