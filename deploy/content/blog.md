<h1 class="modal-title fs-5" id="exampleModalLabel" style="text-align: left; font-size: 2rem; padding: 1rem 0 0 1rem" >
Blog
<a href="https://github.com/Sniij/chomanki.com-api" target="_blank" class="icon brands alt fa-github" ><span class="label">GitHub-Back</span></a>
<a href="https://github.com/Sniij/chomanki.com" target="_blank" class="icon brands alt fa-github" ><span class="label">GitHub-Front</span></a>

</h1>

<hr style="margin:0px 0px 1rem 0px;">
<div id="modal_inContent" style="position: inherit; text-align: left; font-family: 'KBO-Dia-Gothic_bold';">
    <h3>🔗 URLs</h3>
    <p>
        Deploy : <a href="https://blog.chomanki.com" target="_blank">https://blog.chomanki.com</a><br/>
        Github-Back : <a href="https://github.com/Sniij/chomanki.com-api" target="_blank">https://github.com/Sniij/chomanki.com-api</a><br/>
        Github-Front : <a href="https://github.com/Sniij/chomanki.com" target="_blank">https://github.com/Sniij/chomanki.com</a><br/>
    </p>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>🛒 Skills</h3>
    <p style="font-family: 'Pretendard-Regular';">
        - Back-end : Java 17, Spring boot 3, Spring Security(OAuth2+JWT), MongoDB, AWS(Lambda, API Gateway)   <br/>
        - Front-end : TypeScript, Next JS 13, tailwind css, content layer, Redis, AWS(Route 53), Vercel(Deploy)  <br/>
    </p>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>📚 Summary</h3>
    <p style="font-family: 'Pretendard-Regular';">
        - 사실 이번 프로젝트는 간단한 블로그를 풀스택으로 제작하여 운영해 보자는 취지에서 시작되었습니다.  <br/>
        - 직접 운영을 해야 하기 때문에(운영비용을 내가 내야함..) 그 어떤 프로젝트보다 Architecture를 가장 공들여 짰습니다.  
    </p>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>⛓ Architecture</h3>
    <p>
        - Back:  <br/>
            <img
            src="images/blog_img/architecture-back.png"
            alt="architecture-back"
            style="width:100%"
            /> <br/> <br/>
    </p>
        <hr style="margin: 1rem 0px 1rem 0px;">
    <p>
        - Front:  <br/>
            <img
            src="images/blog_img/architecture-front.png"
            alt="architecture-front"
            style="width:100%"
            /> <br/> <br/>
    </p>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>📑 Meaning</h3>
    <p style="font-family: 'Pretendard-Regular';">
        현재 단락에선 백엔드와 프론트엔드 부분을 따로 나누어서 아키텍쳐 중심으로 설명을 이어나가보겠습니다. </br></br>
        <a style="font-weight: bold; border-bottom: none;">
            Back: </br>
        </a>
        <a style="font-weight: bold; border-bottom: none;">
        1. "왜 AWS Lambda + API Gateway인가?" </br>
        </a>
        백엔드 어플리케이션은 이제껏 해왔던 아키텍쳐인 EC2 를 기반으로 생각을 했었는데, </br>
        EC2에 올려서 24시간 돌릴 필요가 있을까? 람다에 올려서 필요할 때만 호출하는게 더 저렴하지 않을까 싶어서 EC2와 람다에 올릴 때의 가격을 단순비교하여 보았습니다. <br/>  <br/> 
        - 2024.02 기준 USD 환율: 1331.18 won 
        <p style="font-family: 'Pretendard-Regular';">
            1. EC2 (t4g.micro)<br/>
            - 온디맨드 시간당 요금: 0.0104 USD <br/>
            - 30days: 7.488 USD<br/>
            * 한달 한국 원화 기준 요금: 9,967.87584 won *<br/>
            2. ELB (Application Load Balancer) <br/>
            - 온디맨드 시간당 요금: 0.0225 USD<br/>
            - 30days: 16.43 USD <br/>
            * 한달 한국 원화 기준 요금: 39,935.4 won *<br/>
            ** EC2+ELB 한달 기준 총가격: 약 49,903 won ** <br/><br/>
        </p>
        <p style="font-family: 'Pretendard-Regular';">
            1. API Gateway 의 API 호출비용 계산 <br/>
            - API Gateway에서 Rest API 호출 100만건당: 3.5 USD <br/>
            - 한달 예상 호출회수 = 1,000 사용자 X 월 100회 로그인 X 로그인시 10개 페이지뷰 = 1백만회 <br/>
            * 한달 한국 원화 기준 요금: 4,659.13 won * <br/>
            2. API Gateway 의 데이터 전송 비용 계산 <br/>
            - 호출당 평균 데이터 전송량 : 10KB <br/>
            - GB 당 데이터 전송 비용 : 0.09 USD <br/>
            - 예상 데이터 전송량 : 1백만회 X 10KB = 0.1GB <br/>
            - 예상 데이터 전송비용 = 0.1GB X 0.09 USD / 1GB = 0.009 USD <br/>
            * 한달 한국 원화 기준 요금: 11.98062 won * <br/>
            3. Lambda 호출 비용 계산 <br/>
            - Lambda 1백만건당 호출비용 : 0.2 USD <br/>
            - 한달 예상 호출회수 = 1백만회<br/>
            - 예상 호출비용 = 1백만회 X 0.2 USD / 1백만회 = 0.2 USD <br/>
            * 한달 한국 원화 기준 요금: 266.236 won * <br/>
            4. Lambda 사용 비용 <br/>
            - 128MB Lambda 1ms 동안 사용 비용 : 0.0000000021 USD (람다 최소 사양) <br/>
            - 실행건수 : 1백만회 <br/>
            - 평균 실행 : 시간 500 ms <br/>
            - 예상 사용 비용 = 1백만회 X 500 ms X 0.0000000021 USD / 1 ms = 1.05 USD <br/>
            * 한달 한국 원화 기준 요금: 1,397.739 won * <br/>
            ** Lambda + API Gateway 한달 기준 총가격: 약 6,335 won ** <br/><br/>
        </p>
        <p style="font-family: 'Pretendard-Regular';">
            <a style="font-weight: bold; border-bottom: none;">
            이렇게 단순 비교지만 개인 블로그처럼 사용자가 적은 경우에는 EC2에 어플리케이션을 띄우는 것보다 <br/> 
            Lambda를 통해 호출 기반으로 띄우는게 몇배나 더 저렴했습니다.<br/> 
            그렇기에 Lambda + API Gateway 를 이용하여 서버리스 아키텍쳐로 운용하기로 결정했습니다. </a>
            <br/>
            다만 Java 기반의 어플리케이션은 lambda에서 cold start 생겨 평균 실행 시간이 높아져 비용이 높아질 수 있는 이슈가 있어<br/>
            초기엔 snap start 적용과 멀티 모듈을 통해 함수를 분할시킬 생각을 하였습니다. <br/>
            하지만 이렇게 그럴듯한 계획은 언제나 부딪히기 마련인 것 같습니다. (눈물) <br/> </br>
            <a style="font-weight: bold; border-bottom: none;">
            2. "왜 멀티 모듈인가?" </br>
            </a>
            실제 제가 구성했던 멀티 모듈 아키텍쳐로 개발 후에 각각의 람다로 배포하였을 때 평균 실행 시간이 어느정도 낮아지고 존재하고, 실행건수가 줄어들지만 <br/> 
            오히려 평균 실행 시간의 차이가 크지 않아 실행 건수가 매우 많지 않은 이상 또는 어플리케이션이 매우 무거워지지 않는 이상 <br/> 
            적용한 아키텍쳐가 오히려 비용이 더 드는 계산이 나오게 되어,  <br/> 
            최종적으론 앞서 보여드린 이미지 같은 아키텍쳐로 수정하게 됐습니다.<br/>
            멀티 모듈의 기준이 되는 아키텍쳐의 구성은 우아한 기술블로그 글을 참고하여 아키텍쳐를 구성했습니다. <br/>
            그리고 도메인 모듈에서만 DB를 커넥트해서 정보를 얻을 수 있게끔 최종 구성을 완료했습니다. <br/>
            ref: <a href="https://techblog.woowahan.com/2637/" target="_blank"> 멀티모듈 설계 이야기 with Spring, Gradle </a> <br/>
            <a style="font-weight: bold; border-bottom: none;">
            위와 같은 아키텍쳐를 구성함으로써 계층화된 모듈들이 각각의 역할과 책임이 명확하게 있고, 추후 개발의 확장성과 용이성이 증가하였고 <br/>
            각 모듈에선 최소한의 의존성을 갖기 때문에 lambda에서의 실행 시간을 늦출 수 있는 효과까지 주었습니다. </a>
            <br/> <br/>
            <a style="font-weight: bold; border-bottom: none;">
            3. "왜 MongoDB + Redis를 사용하나?" </br>
            </a>
            이제 DB를 선택한 기준에 대해 설명드려 보겠습니다. <br/>
            먼저 블로그 속 게시글은 이미지를 포함할 수 있고 글의 내용도 길어 용량이 클 수 있기 때문에 <br/> 
            마크다운 파일에 내용을 적고 github에 올리기로 결정했습니다.  <br/> 
            또한 마크다운 파일은 클라이언트 content layer 라이브 러리를 통해 동적 렌더링을 할 수 있게끔 하였습니다.  <br/> 
            이런 결정때문에 백엔드에서 domain은 게시글이 지워지고 게시글에 포함되던 조회수 그리고 댓글과 유저만 남았습니다.  <br/> 
            이 상태에서 보았을 때 게시글에 포함되던 조회수만 어떻게 처리하면(?) <br/> 
            댓글과 유저에서 읽기 속도가 빠른 NoSQL DB를 사용할 수 있는 기회가 될 수 있을 것 같아,   <br/>
            유저는 OAuth 2를 통해 소셜 로그인만 허용하여 정보를 받아와서 저장시켜 보여주게끔 하여 수정이 필요없게 하였고,  <br/> 
            댓글에서도 작성과 삭제만 가능하게끔 하여 수정 가능하지 않게 하였습니다.  <br/>
            이렇게 현재의 domain에선 NoSQL DB를 사용하기에 적합한 모델이 되어 MongoDB Atlas 를 사용하여   <br/>
            제가 예상되는 범위내에선 무료로 사용할 수 있게 구성하였습니다.   <br/>
            다만 조회수에서는 항상 수정이 필요했기 때문에 여러가지 방법과 최대한 비용이 적게 들어가는 DB를 몰색해 보았는데,   <br/>
            제가 운용하는 기준에서는 Upstash의 Redis 정도만 사용해도 충분할 것 같다는 판단이 들어서 Upstash의 Redis를 선택하였습ssm니다. <br/>
            다만 조회수 domain을 또 만들어 api 를 생성하는 것보다 <br/>
            클라이언트에서 redis 와 연결시켜 조회수만 올릴 수 있는 api를 만들어 운용하기로 아키텍쳐를 구성하였습니다. <br/>
        </p>
        <p style="font-family: 'Pretendard-Regular';">
            <a style="font-weight: bold; border-bottom: none;">
            이러한 아키텍쳐 덕분에 현재 한달 기준 최소 비용으로 따졌을 때 AWS 비용인 약 6,335원만 운영 비용으로 나오게 됐습니다. <br/>
            다만 이용자 수가 많아진다면, 제가 생각하지 못한 비용이 나오게 되어 예상을 넘어가게 되면 또는 더 나은 아키텍쳐가 생기면 <br/> 
            언제든지 아키텍쳐는 수정되어야 한다고 생각합니다. <br/>
            </a>
        </p>
        <p style="font-family: 'Pretendard-Regular';">
            <a style="font-weight: bold; border-bottom: none;">
            Front: </br>
            </a>
            <a style="font-weight: bold; border-bottom: none;">
            1. "왜 tailwind CSS 인가?"</br>
            </a>
            프론트엔드에선 먼저 CSS를 간편하게 설정하기 위해(스타일 지정 분류에 자신이 없어서) tailwind CSS 를 사용했습니다. </br></br>
            <a style="font-weight: bold; border-bottom: none;">
            2. "왜 TypeScript 인가?" </br>
            </a>
            이제 언어 선택 기준을 말씀드려야 하는데, <br/>
            먼저 현재 포트폴리오 웹사이트 프로젝트를 진행하면서 마크다운 파일을 HTML로 변환시키는 작업을 JS로 해보았기 때문에 JS 언어를 선택했었습니다.<br/>
            근데 Typescript 라는 언어가 타입 안전성에 강하고 추세가 JS보다 TS로 넘어가고 있다기에 <br/>
            어차피 둘 다 잘할 줄 모르는 거 TS로 시작해보자 싶어서 JS대신 TS를 선택했습니다. <br/></br>
            <a style="font-weight: bold; border-bottom: none;">
            3. "왜 NextJS 인가?" </br>
            </a>
            이제 메인이 되는 프레임워크를 선택해야 하는데 백엔드 아키텍쳐를 짤 때 블로그가 동적으로 렌더링 되어야 하며, Redis와 직접 커넥트하여 조회수를 올리게끔 짰습니다. <br/>
            이러한 배경을 볼 때 SSR이 필요하여 CSR과 SSR을 혼합해서 사용할 수 있는 NextJS를 선택하게 됐습니다. <br/>
            NextJS를 선택한 후 마크다운 파일을 동적 렌더링을 시켜줄 수 있는 content layer 라이브러리를 알게 되어 조금 더 간편하게 그리고 레퍼런스가 많은 content layer 라이브러리를 사용하기로 하였습니다. <br/></br>
            <a style="font-weight: bold; border-bottom: none;">
            4. "왜 풀스택으로 개발했는가?"</br>
            </a>
            사실 이 부분이 프로젝트 중 지인들이 가장 의아했던 부분입니다.</br>
            저는 백엔드 엔지니어로서 역량을 강화하려 공부하고 프로젝트를 하며 준비했는데, 취업준비가 길어지면서 알 수 없는 갑갑함을 느끼게 됐습니다. <br/>
            분명히 저의 역량이 부족해서 개발자 시장도 좋지 않아서 취업이 쉽게 되지는 않았겠지만, 하루하루 지나가면서 제 자신이 취업을 위한 공부를 하는 건지 뭔지 의심을 시작했고 결국 제 자신을 모르게 됐습니다. <br/>
            나는 분명 새로운 것을 배우고 무엇인가 빌딩한다는 것, 나의 코드를 이용해 누군가 또 개발을 할 수 있다는 것, 나의 개발이 비지니스 측면에 도움이 된다는 것 또는 그 이상들이 좋아서 해당 직무를 선택했는데 점점 그런 의미가 희석되는 것처럼 느껴졌습니다. 
        </p>
        <p style="font-family: 'Pretendard-Regular';">
            <a style="font-weight: bold; border-bottom: none;">
            이제 security 관한 아키텍쳐에 대하여 설명드리겠습니다.</br>
            </a>
            <a style="font-weight: bold; border-bottom: none;">
            1. "왜 토큰 기반의 인증 서버인가?" </br>
            </a>
        <img
            src="images/blog_img/authorization_logic.png"
            alt="authorization_logic"
            style="width:50%"
            /> <br/>
            사실 세션 기반의 검증 과정이 개발해야 하는 양 자체는 적지만 lambda 기반의 서버리스 아키텍쳐는 세션 관리가 불안정 하기 때문에 토큰 방식의 인증 로직을 구성했습니다. <br/>
            토큰은 JWT를 사용하였으며, <br/>
            소셜 로그인 성공시 access token과 refresh token이 백엔드 서버에서 발급되어 리다이렉트 할 곳에 파라미터 형태로 던져줍니다. <br/>
            프론트엔트에선 헤더 또는 내비 바에서 파마미터 값을 읽어 쿠키에 저장시킵니다.  <br/>
            저장된 access token은 Authorization 필드에 담아 서버로 보내 <br/>
            백엔드에서 구현되어 있는 spring security 기반의 인증 체인에서 검증 과정을 거치게 됩니다.  <br/>
            사용자 검증이 필요한 api는 모두 token 검증 과정을 거칩니다. <br/>
            또한 Access token의 expexpiration time은 1시간으로 설정하여 클라이언트에서 access token 없이 refresh token만 존재함을 감지하면<br/>
            백엔드의 access token 재발급 api로 refresh token을 보내 검증 후 access token을 재발급하여 보내주고 다시 쿠키에 저장시키게끔 하였습니다. <br/>
            이러한 architecture로 인하여 serverless architecture에서도 보안 설정을 할 수 있게 되었습니다. <br/>
        </p>
        <p style="font-family: 'Pretendard-Regular';">
            <a style="font-weight: bold; border-bottom: none;">
            2. "왜 Next JS proxy를 사용하나?" </br>
            </a>
            먼저 proxy 설정을 하는 이유는 api path와 api key 등 민감할 수 있는 정보를 숨기기 위해 했습니다. <br/>
            원래는 AWS 의 proxy 서비스를 사용하려 했지만 Next js에서 간단하고 강력한 proxy 설정을 지원하기에 선택했습니다. <br/>
            현재 architecture는 api를 next js 자체 path에 요청시키고 next js 서버에서 마지막에 실제 운용되는 서버로 우회되게 설정했습니다. <br/> 
            이와 같은 architecture로 운용되는 서버의 api path, key 등 민감할 수 있는 정보를 숨길 수 있게 되었습니다. <br/>
        </p>
    </p>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>👨‍👨‍👦‍👦 Member</h3>
		<p style="font-family: 'Pretendard-Regular'; padding-left: 10px;">
			A. Front-end : <br />
			<a href="https://github.com/Sniij" target="_blank" >조만기</a> <br />
			B. Back-end : <br />
			<a href="https://github.com/Sniij" target="_blank" >조만기</a><br />
		</p>
        <hr style="margin: 1rem 0px 5rem 0px;">
    </div>
</div>