<h1 class="modal-title fs-5" id="exampleModalLabel" style="text-align: left; font-size: 2rem; padding: 1rem 0 0 1rem" >
Blog
<a href="https://github.com/Sniij/chomanki-api" target="_blank" class="icon brands alt fa-github" ><span class="label">GitHub-Back</span></a>
<a href="https://github.com/Sniij/chomanki.com" target="_blank" class="icon brands alt fa-github" ><span class="label">GitHub-Front</span></a>

</h1>

<hr style="margin:0px 0px 1rem 0px;">
<div id="modal_inContent" style="position: inherit; text-align: left; font-family: 'KBO-Dia-Gothic_bold';">
    <h3>🔗 URLs</h3>
    <p>
        Deploy : <a href="https://blog.chomanki.com" target="_blank">https://blog.chomanki.com</a><br/>
        Github-Back(Not yet public) : <a href="https://github.com/Sniij/chomanki-api" target="_blank">https://github.com/Sniij/chomanki-api</a><br/>
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
        현재 단락에선 백엔드와 프론트엔드 부분을 따로 나누어서 architecture를 중심으로 설명을 이어나가보겠습니다. </br></br>
        Back: 
        백엔드 어플리케이션은 이제껏 해왔던 구조로 EC2, RDS 를 기반으로 생각을 했었는데, </br>
        근데 EC2에 올려서 24시간 돌릴 필요가 있을까? 람다에 올려서 필요할 때만 호출하는게 더 저렴하지 않을까 싶어서 EC2와 람다에 올릴 때의 가격을 단순비교하여 보았습니다. <br/> 
        - 2024.02 기준 USD 환율: 1331.18won <br/>
        <p style="font-family: 'Pretendard-Regular';">
        1. EC2 (t4g.micro)<br/>
        - 온디맨드 시간당 요금: 0.0104 USD <br/>
        - 30days: 7.488 USD<br/>
        * 한달 한국 원화 기준 요금: 9,967.87584won *<br/>
        2. ELB (Application Load Balancer) <br/>
        - 온디맨드 시간당 요금: 0.0225 USD<br/>
        - 30days: 16.43 USD <br/>
        * 한달 한국 원화 기준 요금: 39,935.4won *<br/>
        ** EC2+ELB 한달 기준 총가격: 49,903.27584won ** <br/>
        </p>
        <p style="font-family: 'Pretendard-Regular';">
        1. API Gateway 의 API 호출비용 계산 <br/>
        - API Gateway에서 Rest API 호출 100만건당: 3.5 USD <br/>
        - 월 예상 호출회수 = 10,000 사용자 X 월 100회 로그인 X 로그인시 10개 페이지뷰 = 1천만회 <br/>
        * 한달 한국 원화 기준 요금: 46,591.3won * <br/>
        2. API Gateway 의 데이터 전송 비용 계산 <br/>
        - 호출당 평균 데이터 전송량 : 10KB <br/>
        - GB 당 데이터 전송 비용 : 0.09 USD <br/>
        - 예상 데이터 전송량 : 1천만회 X 10KB = 1GB <br/>
        * 한달 한국 원화 기준 요금: 46,591.3won * <br/>
        예상 데이터 전송비용 = 1GB X 0.09 USD / 1GB = 0.09 USD
        3. Lambda 호출 비용 계산
            . Lambda 100만건당 호출비용 : 0.2 USD
        . 월 예상 호출회수 = 1천만회
        예상 호출비용 = 1천만회 X 0.2 USD / 100만회 = 2 USD
        4. Lambda 사용 비용
        . 128MB Lambda 1ms 동안 사용 비용 : 0.0000000021 USD (람다 최소 사양)
        . 실행건수 : 1천만회
        . 평균 실행 : 시간 500 ms
        예상 사용 비용 = 1천만회 X 500 ms X 0.0000000021 USD / 1 ms = 10.5 USD
        </p>
    </p>
</div>

<hr style="margin: 0rem 0px 5rem 0px;">
    
</div>