# 우리은행 온택트 해커톤: <a href="https://woodis.netlify.app/">WOODIS</a>
<p align="center">
  <video src="https://user-images.githubusercontent.com/39179946/146949615-5e4c4512-0107-48b9-8622-b7b698e9912d.mp4"/>
</p>

## 서비스 개요
‘우디스’는 개개인의 카드사용 데이터를 기반으로 맞춤형 ‘할인방법 추천서비스’를 제공하는 서비스입니다. 사용자의 카드 별 사용내역 분석서비스를 제공하며 ‘사용자 할인내역 데이터’를 통해 같은 구매 범주 내에서 더 많은 할인을 받을 수 있는 방법 까지 비교, 추천하는 ‘개인화’ 큐레이션을 제공합니다. 추가적으로 선택적 구독방식을 통해 카드 별 할인 내역, 추천 할인 서비스, 금융관련 이슈 등을 메일로 발송합니다. 

## 기술 스택
<p align="center">
  <img src="https://img.shields.io/badge/React-3766AB?style=flat-square&logo=React&logoColor=white"/></a>&nbsp 
  <img src="https://img.shields.io/badge/Nginx-007396?style=flat-square&logo=Nginx&logoColor=white"/></a>&nbsp 
  <img src="https://img.shields.io/badge/aws-00599C?style=flat-square&logo=amazon&logoColor=white"/></a>&nbsp
</p>
<p align="center">
  <img src="https://img.shields.io/badge/javascript-3766EE?style=flat-square&logo=javascript&logoColor=white"/></a>&nbsp 
  <img src="https://img.shields.io/badge/mysql-0073EE?style=flat-square&logo=mysql&logoColor=white"/></a>&nbsp 
  <img src="https://img.shields.io/badge/express-0059EE?style=flat-square&logo=express&logoColor=white"/></a>&nbsp
</p>





## 로그인 전 화면
<p align="center">
  <img src="https://user-images.githubusercontent.com/50386630/137581997-49cd1f4c-abc6-4d4b-813c-d0216dd4acea.jpg"/>
</p>
로그인 완료 후부터 “내 소비 달력 확인하기”, “우리카드로 알아보는 내 소비 혜택”, “더 많은 할 할인을 위한 카드 정보 구독” 서비스를 열람할 수 있습니다.

## 로그인 후 화면
<p align="center">
  <img src="https://user-images.githubusercontent.com/50386630/137582130-9736185b-942c-4d45-876f-701a89d4baf6.png"/>
</p>
로그인 후에 회원의 이름과 함께 서비스 항목을 변형시켜 노출합니다.

## 소비 달력 확인하기
<p align="center">
  <img src="https://user-images.githubusercontent.com/50386630/137582148-7d74912a-8faf-4932-ad6d-0e8eff031d79.png"/>
</p>
회원의 소비 달력을 확인해서 각 달 별로 소비내역을 간편하게 출력(왼쪽)하고 특정 날짜를 클릭하면 상세 소비내역을 출력(오른쪽)합니다.

## 우리카드로 알아보는 소비 혜택
<p align="center">
  <img src="https://user-images.githubusercontent.com/50386630/137582173-91216546-4bf1-421c-a44d-0def4c42293c.png"/>
</p>
각 카드별로 주요 특징을 노출시키고 “내가 이 카드를 썼더라면", "자세히 보기”, “카드신청” 버튼을 우측에 배치합니다. “자세히 보기”와 “카드신청”은 우리은행의 페이지로 redirect합니다.

## 할인 혜택 비교
<p align="center">
  <img src="https://user-images.githubusercontent.com/50386630/137582228-fa817f97-4bae-4c72-9edf-8979d7697ca2.png"/>
</p>
선택한 우리카드와 현재의 나의 카드의 할인 혜택을 비교해서 어떤 카드를 썼을 때 더 많은 혜택을 받을 수 있는지 한 눈에 알기 쉽게 확인할 수 있도록 합니다.

## 벡엔드 git book
https://kdh5163.gitbook.io/api/
