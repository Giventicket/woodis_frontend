export default function getParsedTransList(tranList, year, month) {
  let lastDay = new Date(year, month, 0).getDate();
  if (!tranList) {
    let parsedList = [];
    for (let i = 0; i < lastDay; i++) {
      parsedList.push([]);
    }
    return parsedList;
  }
  let list = tranList.slice();
  lastDay += 1;
  let parsedList = [];
  for (let i = 0; i < lastDay; i++) {
    parsedList.push([]);
  }

  while (list.length !== 0) {
    let next = list.shift();
    if (next) {
      let date = new Date(next.TRN_DT).getDate();
      if (!parsedList[date]) {
        console.log(
          "baasdkfaksdfjasdk!!!!!!!!!!",
          date,
          new Date(year, month, 0).getDate()
        );
      } else {
        parsedList[date].push(next);
      }
    }
  }
  return parsedList;
}
