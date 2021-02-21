import Fibonacci from "../fibonacci/Fibonacci";

export default class GetFibonacciIndex {
  constructor(private fibonacci: Fibonacci) {}

  execute(index: number) {
    return this.fibonacci.getByIndex(index);
  }
}
