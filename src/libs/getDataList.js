export default function getDataList(year, month) {
  let firstDay = new Date(`${year}-${month}-01`).getDay();
  let lastDay = new Date(year, month, 0);
  let lastDate = lastDay.getDate();
  let data = [];
  if (firstDay) for(let i=0; i<firstDay; i++) data.push(null);

  for (let i = 1; i <= lastDate; i++) data.push(i);
  while (data.length % 7) data.push(null);
  let dataList = [];
  let ele = [];
  while (data.length !== 0) {
    ele = [];
    for (let i = 0; i < 7; i++) ele.push(data.shift());
    dataList.push(ele);
  }

  return dataList;
}
