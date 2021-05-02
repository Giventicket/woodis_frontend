export default function getParsedTransList(tranList, year, month) {
  if (!tranList || !tranList[month - 1]) {
    let lastDay = new Date(year, month, 0).getDate();
    let parsedList = [];
    for (let i = 0; i < lastDay; i++) {
      parsedList.push([]);
    }
    return parsedList;
  }
  let list = tranList[month - 1].tranList.slice();
  let lastDay = new Date(year, month, 0).getDate();
  lastDay += 1;
  let parsedList = [];
  for (let i = 0; i < lastDay; i++) {
    parsedList.push([]);
  }

  while (list.length !== 0) {
    let next = list.shift();
    if (next) {
      let date = new Date(next.tranDate).getDate();
      parsedList[date].push(next);
    }
  }
  return parsedList;
}
