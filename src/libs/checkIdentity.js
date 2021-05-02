export default function checkIdentity(num) {
  let arrNum1 = String(num).substr(0, 6); // 주민번호 앞자리숫자 6개를 담을 배열
  let arrNum2 = String(num).substr(6, 7); // 주민번호 뒷자리숫자 7개를 담을 배열
  console.log(arrNum1, arrNum2);
  let tempSum = 0;

  for (let i = 0; i < arrNum1.length; i++) {
    tempSum += Number(arrNum1[i]) * (2 + i);
  } // 주민번호 검사방법을 적용하여 앞 번호를 모두 계산하여 더함

  for (let i = 0; i < arrNum2.length - 1; i++) {
    if (i >= 2) {
      tempSum += Number(arrNum2[i]) * i;
    } else {
      tempSum += Number(arrNum2[i]) * (8 + i);
    }
  } // 같은방식으로 앞 번호 계산한것의 합에 뒷번호 계산한것을 모두 더함

  if ((11 - (tempSum % 11)) % 10 !== Number(arrNum2[6])) {
    return false;
  } else {
    return true;
  }
}
