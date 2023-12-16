<h1 class="modal-title fs-5" id="exampleModalLabel" style="text-align: left; font-size: 2rem; padding: 1rem 0 0 1rem" >PETCHING 
	<a href="https://github.com/Petching/Petching" target="_blank" class="icon brands alt fa-github" ><span class="label">GitHub</span></a>
</h1>

</div>

<hr style="margin:0px 0px 1rem 0px;">
<div id="modal_inContent" style="position: inherit; text-align: left; font-family: 'KBO-Dia-Gothic_bold';">
<h3>🔗 URLs</h3>
<p>
Team Github : <a href="https://github.com/Petching/Petching" target="_blank">https://github.com/Petching/Petching</a><br/>
</p>
<hr style="margin: 1rem 0px 1rem 0px;">
<h3>🛒 Skills</h3>
<p style="font-family: 'Pretendard-Regular';">
		- Back-end : Java, Spring Boot, Spring Data JPA, Spring Security, Spring MVC, Spring Cloud, Mockito, Rest Docs <br/>
		- Database : MySQL, AWS RDS <br/>
		- Deployment : AWS (EC2, ELB, S3, CloudFront, Route 53, CodeDeploy), GitHub Actions (gradle) <br/>
<hr style="margin: 1rem 0px 1rem 0px;">
<h3>📄 Docs</h3>
<p style="font-family: 'Pretendard-Regular';">
	<a href="https://docs.google.com/spreadsheets/d/1Lj20gnDmrqOP_DdfgwARoLgrhtUpba-nQN7EjqF2n88/edit#gid=876641333"  target="_blank">- 펫칭 사용자 요구사항 정의서 </a>
	 <a href="https://docs.petching.net" target="_blank">API 문서 </a>
	<br/>
</p>
<hr style="margin: 1rem 0px 1rem 0px;">
<h3>📚 Summary</h3>
<p style="font-family: 'Pretendard-Regular';">
	해당 프로젝트는 반려동물 케어를 위한 펫시터 매칭을 기반으로한 서비스입니다. <br/>
	장소별, 날짜별로 펫시터와 매칭할 수 있고, 매칭 후엔 서로의 채팅을 통해 직접 약속을 잡을 수 있습니다. <br/>
	또한 반려동물을 키우는 사람들을 위한 커뮤니티가 존재하여 서로의 반려동물을 보여주거나 정보를 나눌 수 있습니다. <br/>
	<p style="font-family: 'Pretendard-Regular'; font-weight: bold; margin: 0 0 0 0;">
		아래는 프로젝트 중 본인이 맡은 부분만 정리해 보았습니다.
	</p>
	<p style="font-family: 'Pretendard-Regular';">
	- 커뮤니티 게시판, 댓글 API 구현 (CRUD 및 좋아요, 게시물 사진 끌어오기) <br/>
	- 커뮤니티 CRUD 기존 부분에서 token 검사를 통한 authorization logic으로 refactoring하여 보안성 높임 <br/>
	- Spring Security basic configuration <br/>
	- CORS configuration(security+S3)<br/>
	- Refresh token을 통한 access token 재발급 API 구현<br/>
	- S3 버킷 파일 업로드 및 삭제 API 구현 <br/>
	- Global exception handler 구현 <br/>
	- Gradle configuration(Library version control, CI/CD, Rest docs..) <br/>
	- Mockito를 기반으로 모든 API test code 작성 <br/>
	- Spring rest docs 를 이용한 API documentation 자동화를 위한 configuration <br/>
	- Spring rest docs 를 통해 생긴 snippets을 이용하여 API 문서 작성 <br/>
	- Back-end cloud 개발 환경 configuration (AWS credential, paramter store, s3 client) <br/>
	- Client와 통신을 위한 기본 배포 환경 configuration(EC2+RDS+S3) <br/>
	- 배포 도메인 안정성을 위해 https to https deploy configuration(ACM, CloudFront, ELB, Route 53) <br/>
	- CI/CD configuration(FE+BE, Github Actions, AWS Code Deploy)<br/>
	- AWS IAM 을 통해 프로젝트 팀원 AWS 리소스 접근 관리 <br/>
	- 프로젝트 동안 AWS 모든 서비스 관리 및 보수 <br/>
	- 사용자 문의하기 CRUD API 구현 <br/>
	- 실시간 채팅을 위한 시스템 구성 및 API 구현 <br/>
	</p>

</p>
<hr style="margin: 1rem 0px 1rem 0px;">
<h3>📑 Meaning</h3>
<p style="font-family: 'Pretendard-Regular';">
	아래의 주제들을 통해 작성할 예정입니다. <br/>
	- CI/CD 중 AWS code deploy 에러, health check 에러<br/>
	- Version control 의 중요성<br/>
	- gradle을 다룰 줄 알아야 하는 필요성 <br/>
	- 예외 처리 중 만난 문제들<br/>
	- API 문서화의 중요성 <br/>
	- Mockito 의 편의성 <br/>
	- Cloud service 의 편의성 및 위대함 <br/>
</p>
<h3>📑 Project READMD</h3>
<p style="font-family: 'Pretendard-Regular';">

#### 🐾 Petching 
<br>

<div align="center">
    <img src="https://i.ibb.co/w74rDQb/2023-11-28-5-30-12-removebg-preview.png" alt="2023-11-28-5-30-12-removebg-preview" style="width:200px;" />
</div>

<br>


<main align="center">
    <h3 align="center">🐶 소중한 펫을 원하는 조건으로 맡기고 회원들에게 자랑해보세요! 🐱</h3> 
</main>

<br>

> 🤔 펫시터와 집사가 더 손쉽게 만날 수는 없을까?<br>
> <br>
> 펫시터와 집사 모두 손쉽게 등록할 수 있는 **돌봄 리스트** 기능, <br>
> 내 펫을 자랑하고 다른 집사들과 소통할 수 있는 **자랑하기** 기능, <br>
> 사이트 내에서 있을 수 있는 다양한 질문을 답해주는 **고객센터** 기능까지! <br>
> <br>
> 🐶 **Petching** 🐱에서는 이 모든 것이 가능합니다 😊

<br>

------------

<br>

## 🚩 프로젝트 개요

* **프로젝트 명** : Petching
* **진행 기간** : 23.07.24 ~ 23.11.30
* **서비스 URL** : [🐶 Petching 🐱 바로 가기](https://petching.net/)
* **노션 문서** : [Notion 바로 가기](https://www.notion.so/Team-PETmatCHING-30be5eeca58e45138f720cbaec70ea19)

<br>
<br>

## 👪 팀원 소개
|                                                                      [곽지현](https://github.com/938938)                                                             |                                                                         [김성수](https://github.com/ggggggggithub)                                                          |                                                         [노호준](https://github.com/nowaveosu)                                                                              |                                                                            [염도경](https://github.com/yeomdogyeong)                                                        |                                                                       [김상래](https://github.com/ksr0818)                                                           |                                                                                        [김은정](https://github.com/196code-gray)                                          |                                                                         [조만기](https://github.com/sniij)                                                           |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| <a href="https://github.com/938938"> <img src="https://github.com/Petching/Petching/assets/88307264/380a2d13-8026-4e8a-ae35-f3e1b2884d4e" width=100px alt="_"/> </a> | <a href="https://github.com/ggggggggithub"> <img src="https://github.com/Petching/Petching/assets/88307264/b6aa0934-5b96-4d64-8c1c-7dfa5bb53186" width=100px alt="_"/> </a> |     <a href="https://github.com/938938"> <img src="https://github.com/Petching/Petching/assets/88307264/224a3a76-5a37-4d33-8a36-1a861cb11627" width=100px alt="_"/> </a>    | <a href="https://github.com/yeomdogyeong"> <img src="https://github.com/Petching/Petching/assets/88307264/09c77066-2849-4e56-9365-fbad0e3a049c" width=100px alt="_"/> </a> | <a href="https://github.com/938938"> <img src="https://github.com/Petching/Petching/assets/88307264/e9f67a61-4eaf-48bc-bf40-156b29ab16b1" width=100px alt="_"/> </a> | <a href="https://github.com/938938"> <img src="https://github.com/Petching/Petching/assets/88307264/ab1fac99-817d-49c0-88d6-863341021904" width=100px alt="_"/> </a>      | <a href="https://github.com/938938"> <img src="https://github.com/Petching/Petching/assets/88307264/15b76547-9099-42ee-a0f7-f0596a5667d8" width=100px alt="_"/> </a> |
|                                                                               프론트엔드                                                                              |                                                                                       프론트엔드                                                                             |                                                                     프론트엔드                                                                                               |                                                                                    프론트엔드                                                                               |                                                                            백엔드                                                                                    |                                                                                                  백엔드                                                                   |                                                                                        백엔드                                                                        |


<br>
<br>

## 🚩 기술스택

<br>

![Web_App_Reference_Architecture_2](https://github.com/Petching/Petching/assets/82007474/6eb01093-ce9c-4b13-afb5-21ee97b8fe15)

<br>
<br>

## 🖥 구현 이미지

<br>

| 기능           | 영상                                                                           |
| ---------------------- | -------------------------------------------------------------------------------------- |
| 메인페이지 | ![ezgif-5-51d0999497](https://github.com/Petching/Petching/assets/82007474/e83df650-e4d1-40d1-8a02-29ccde404dd5)|
| 회원가입 | ![ezgif-5-a41f4e3696](https://github.com/Petching/Petching/assets/82007474/4550a79d-85a7-4711-8b61-b3d793b5a60e)|
| 로그인 |![ezgif-5-c648ecb4b1](https://github.com/Petching/Petching/assets/82007474/79579b47-b710-4474-94bd-58088731c377)|
| OAuth 로그인 |![ezgif-5-f02403cb5d](https://github.com/Petching/Petching/assets/82007474/7e903e24-a5f6-4172-a78c-b162260654e9)|
| 돌봄페이지 검색 |![ezgif-5-b7bf14c885](https://github.com/Petching/Petching/assets/82007474/9803e454-c46e-45e9-bc38-07843a456d4f)|
| 돌봄페이지 글작성 | ![ezgif-5-7557a625f7](https://github.com/Petching/Petching/assets/82007474/744d2aaf-c71e-437d-b78e-9ce622beb61e)|
| 돌봄페이지 글수정, 삭제 | ![ezgif-5-0ea36eefa0](https://github.com/Petching/Petching/assets/82007474/4cef97bc-6a14-4cba-9c51-50aee40d296b)|
| 자랑하기 페이지 |![ezgif-5-09b40235db](https://github.com/Petching/Petching/assets/82007474/d4a01270-8ee9-4e11-ad86-a326ded69d6d)|
| 고객센터 |![ezgif-5-e164d4941a](https://github.com/Petching/Petching/assets/82007474/468b4d02-33eb-450e-8a15-e799eb019362)|


<br>

## 🚩 커밋 컨벤션
<br>

| Message     | 설명        |
| ---------------------- | -------------------------------------------------------------------------------------- |
| [feat]      | 새로운 기능을 추가할 경우        |
| [fix]      | 버그를 고친 경우        |
| [design]      | CSS 등 사용자 UI 디자인 변경        |
| [style]      | 코드 포맷변경, 세미콜론 누락, 코드수정이 없는 경우        |
| [refactor]      | 프로덕션 코드 리펙토링할 경우        |
| [comment]      | 필요한 주석 추가 및 변경        |
| [docs]      | 문서를 수정한 경우        |
| [test]      | 테스트 코드 작업을할 경우        |
| [chore]      | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우        |
| [rename]      | 파일 혹은 폴더명을 수정하거나 옮기는 작업만 하는 경우        |
| [init]      | 브랜치 초기화 및 초기셋팅 관련된 설정일 경우        |
| [Test]      | 테스트 코드 추가, 이 외 테스트        |
| [refactor]      | Code refactoring        |
|[etc]|이 외 기타사항|



</p>
</div>

<hr style="margin: 0rem 0px 5rem 0px;">

