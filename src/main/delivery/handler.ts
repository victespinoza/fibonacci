import { APIGatewayProxyHandler } from "aws-lambda";
import GetFibonacciIndex from "../action/GetFibonacciIndex";
import MemoizeFibonacci from "../fibonacci/MemoizeFibonacci";

const headers = { "Access-Control-Allow-Origin": "*" };

export const getFiboIndex: APIGatewayProxyHandler = async (event) => {
  const { index } = event.pathParameters || {};
  const getFibonacciIndex = new GetFibonacciIndex(new MemoizeFibonacci());
  const result = getFibonacciIndex.execute(parseInt(index || "0"));
  return {
    statusCode: 200,
    body: JSON.stringify(result),
    headers,
  };
};
