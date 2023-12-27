<h1 class="modal-title fs-5" id="exampleModalLabel" style="text-align: left; font-size: 2rem; padding: 1rem 0 0 1rem" >PETCHING 
	<a href="https://github.com/Petching/Petching" target="_blank" class="icon brands alt fa-github" ><span class="label">GitHub</span></a>
</h1>


<hr style="margin:0px 0px 1rem 0px;">
<div id="modal_inContent" style="position: inherit; text-align: left; font-family: 'KBO-Dia-Gothic_bold';">
<h3>🔗 URLs</h3>
<p>
Team Github : <a href="https://github.com/Petching/Petching" target="_blank">https://github.com/Petching/Petching</a><br/>
Deployment : <a href="https://www.petching.net" target="_blank">https://www.petching.net</a><br/>

</p>
<hr style="margin: 1rem 0px 1rem 0px;">
<h3>🛒 Skills</h3>
<p style="font-family: 'Pretendard-Regular';">
		- Back-end : Java, Spring Boot, MVC, JPA, Spring Security, Spring Cloud, Mockito, Rest Docs <br/>
		- Database : MySQL, AWS RDS <br/>
		- Deployment : AWS (EC2, ELB, S3, CloudFront, Route 53, CodeDeploy), GitHub Actions (gradle) <br/>
<hr style="margin: 1rem 0px 1rem 0px;">
<h3>📄 Docs</h3>
<p style="font-family: 'Pretendard-Regular';">
	<a href="https://docs.google.com/spreadsheets/d/1Lj20gnDmrqOP_DdfgwARoLgrhtUpba-nQN7EjqF2n88/edit#gid=876641333"  target="_blank">
	- 펫칭 사용자 요구사항 정의서 
	</a> <br/>
	<a href="https://docs.petching.net" target="_blank">
	- API 문서 
	</a>
	<br/>
</p>
<hr style="margin: 1rem 0px 1rem 0px;">
<h3>⚙ Architecture</h3>
<p style="font-family: 'Pretendard-Regular';">
	<a href="images/petching_img/petching_architecture.png" target="_blank" class="image main" style="width: 70%;">
				<img src="images/petching_img/petching_architecture.png" alt="petching_architecture.png"/>
	</a>
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
	- 커뮤니티 게시판, 댓글 CRUD 구현<br/>
	&nbsp;- 커뮤니티 게시판은 게시글을 작성할 수 있고, 댓글을 작성할 수 있습니다.<br/>
	&nbsp;- 또한 글을 작성, 수정, 삭제할 때의 사용자 인증은 Bearer token 을 통해 검증합니다.<br/>
	&nbsp;- 자세한 flow-chart 는 아래와 같습니다.
	<br/>
		<a href="images/petching_img/board_CRUD.png" target="_blank">
	<img
	src="images/petching_img/board_CRUD.png"
	alt=""
	style="width: 100%"
	/></a> <br/> <br/>
	- 커뮤니티 게시판 좋아요, 게시물 사진 랜덤으로 끌어오는 API <br/>
	&nbsp;- 커뮤니티 게시판은 사용자들이 좋아요를 누를 수 있고, 좋아요 수는 모두에게 보여집니다. <br/>
	&nbsp;- 커뮤니티 게시판의 글은 사진을 포함하여 작성할 수 있는데, 게시판의 속 사진을 랜덤으로 최대 4개를 가져올 수 있는 API 가 있습니다.
	<br/>
	<a href="images/petching_img/board_like_imgs.png" target="_blank">
	<img
	src="images/petching_img/board_like_imgs.png"
	alt=""
	style=" width: 50%"
	/></a> <br/> <br/>
	- 사용자 문의하기 CRUD API 구현 <br/>
	&nbsp;- 고객센터의 기능을 할 수 있는 문의하기 페이지에서 사용되는 API 입니다. 
	<br/>
	<a href="images/petching_img/question_CRUD.png" target="_blank">
	<img
	src="images/petching_img/question_CRUD.png"
	alt=""
	style=" width: 100%"
	/></a> <br/> <br/>
	- S3 버킷 파일 업로드 및 삭제 API 구현<br/>
	&nbsp;- 커뮤니티 게시판 또는 사용자 프로필에는 사진이 올라갈 수 있는데 이곳에 올라가는 사진은 이 API를 통해 S3 bucket에 저장됩니다.<br/>
	&nbsp;- 해당하는 API는 front-end에서 필요할 때만 사용하기 때문에 사용자 인증 과정은 포함하지 않았습니다.
	<br/>
	<a href="images/petching_img/S3_api.png" target="_blank">
	<img
	src="images/petching_img/S3_api.png"
	alt=""
	style=" width: 50%"
	/></a> <br/> <br/>
	- Refresh token을 통한 access token 재발급 API 구현<br/>
	&nbsp;- JWT는 token으로만 사용자 인증을 하기 때문에 탈취 등의 보안 약점이 있습니다. 그 허점을 보완하기 위해 access token 의 expire time 을 짧게 두고 refresh token 의 expire time 을 늘려 access token 을 refresh token 을 통해 재발급 하는 식으로 아키텍처를 구성했습니다.<br/>
	&nbsp;- Refresh token은 사용자가 로그인 할 때 사용자에게 저장되며 로그아웃 할 때 삭제되는 아키텍처입니다.
	<br/>
	<a href="images/petching_img/jwt_refresh.png" target="_blank">
	<img
	src="images/petching_img/jwt_refresh.png"
	alt=""
	style=" width: 50%"
	/></a> <br/> <br/>
	- 실시간 채팅을 위한 시스템 구성 및 API 구현 <br/>
	&nbsp;- 실시간 채팅은 TCP 연결을 수행하고 끊지 않는 프로토콜을 사용하는 SMTP 을 사용하였습니다.<br/>
	&nbsp;- WebSocket 연결은 채팅방을 들어가면 수행하게 되고 연결이 수행되고 난 후엔 메세지를 주고 받을 수 있습니다.<br/>
	&nbsp;- 자세한 flow-chart 는 아래와 같습니다.  
	<br/>
	<a href="images/petching_img/chatting.png" target="_blank">
	<img
	src="images/petching_img/chatting.png"
	alt=""
	style=" width: 100%"
	/></a> <br/> <br/>
	- Global exception handler 구현<br/>
	&nbsp;- HTTP Status 코드로 정상코드가 아닌 '오류코드'로 반환하였을 시 실제 '에러'가 발생하기에 이를 위해 중간에 GlobalExcpetion을 통해 Exception 발생 시에도 HTTP Status 코드로 '정상 코드'를 보내고 커스텀한 코드를 보냄으로써 실제 Client 내에서 이를 처리할 수 있게 돕기 위함입니다.
	<br/>
	<a href="images/petching_img/global_exception.png" target="_blank">
	<img
	src="images/petching_img/global_exception.png"
	alt=""
	style=" width: 50%"
	/></a> 
	<br/>
	- Spring Security basic configuration, CORS configuration(security+S3) <br/>
	&nbsp;- Https to Https 배포를 하기 위해 spring security 를 사용하여 client 의 주소를 허용하였고, CORS 설정을 내부적, S3 bucket에서 하여 베포를 완료하였습니다.<br/>
	- Client와 통신을 위한 기본 배포 환경 configuration(EC2+RDS+S3) <br/>
	- 배포 도메인 안정성을 위해 https to https deploy configuration(ACM, CloudFront, ELB, Route 53) <br/>
	- CI/CD configuration(FE+BE, Github Actions, AWS Code Deploy)<br/>
	- Back-end cloud 개발 환경 configuration (AWS credential, paramter store, s3 client) <br/>
	- AWS IAM 을 통해 프로젝트 팀원 AWS 리소스 접근 관리 <br/>
	- 프로젝트 동안 AWS 모든 서비스 관리 및 보수 <br/>
	- Gradle control(Library version control, CI/CD, Rest docs) <br/>
	&nbsp;- <br/>
	- Mockito를 기반으로 모든 API test code 작성 <br/>
	&nbsp;- <br/>
	- Spring rest docs 를 이용한 API documentation 자동화를 위한 configuration <br/>
	- Spring rest docs 를 통해 생긴 snippets을 이용하여 API 문서 작성 <br/>
	&nbsp;-우아한형제들 블로그를 참고로 구성했습니다. <br/>
	</p>

</p>
<hr style="margin: 1rem 0px 1rem 0px;">
<h3>📑 Meaning</h3>
<p style="font-family: 'Pretendard-Regular';">
	- CI/CD 중 AWS code deploy 에러, health check 에러<br/>
	- Version control 의 중요성<br/>
	- gradle을 다룰 줄 알아야 하는 필요성 <br/>
	- 예외 처리 중 만난 문제들<br/>
	- API 문서화의 중요성 <br/>
	- Mockito 의 편의성 <br/>
	- Cloud service 의 편의성 <br/>
</p>
<hr style="margin: 1rem 0px 1rem 0px;">

<h3>👨‍👨‍👦‍👦 Members</h3>
	<p style="font-family: 'Pretendard-Regular'; padding-left: 10px;">
		A. Front-end : <br />
		<a href="https://github.com/938938" target="_blank">곽지현</a>
		<a href="https://github.com/ggggggggithub" target="_blank" >김성수</a>, 
		<a href="https://github.com/nowaveosu" target="_blank">노호준</a>, 
		<a href="https://github.com/yeomdogyeong" target="_blank">염도경</a>, 
		<br />
		B. Back-end : <br />
		<a href="https://github.com/ksr0818" target="_blank">김상래</a>,
		<a href="https://github.com/196code-gray" target="_blank" >김은정</a>,
		<a href="https://github.com/Sniij" target="_blank">조만기(It's me😁)</a> 
		<br />
	</p>
<hr style="margin: 0rem 0px 5rem 0px;">

</div>