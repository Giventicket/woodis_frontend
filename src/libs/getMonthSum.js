export default function getMonthSum(parsedTranList) {
  return parsedTranList.reduce((prev1, next1) => {
    if (next1) {
      let sum = next1.reduce((prev2, next2) => {
        return prev2 + next2.PAY_AM;
      }, 0);
      return prev1 + sum;
    }
    return prev1;
  }, 0);
}
