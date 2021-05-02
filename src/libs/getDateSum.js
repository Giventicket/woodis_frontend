export default function getDateSum(parsedTranList, date) {
  return parsedTranList[date].reduce((prev, next) => prev + next.PAY_AM, 0);
}
