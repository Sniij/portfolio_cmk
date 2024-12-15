<h1 class="modal-title fs-5" id="exampleModalLabel" style="text-align: left; font-size: 2rem; padding: 1rem 0 0 1rem" >Portfolio web <a href="https://github.com/Sniij/portfolio_cmk" target="_blank" class="icon brands alt fa-github" ><span class="label">GitHub</span></a>
</h1>

<hr style="margin:0px 0px 1rem 0px;">
<div id="modal_inContent" style="position: inherit; text-align: left; font-family: 'KBO-Dia-Gothic_bold';">
    <h3>🔗 URLs</h3>
    <p>
        Github : <a href="https://github.com/Sniij/portfolio_cmk" target="_blank">https://github.com/Sniij/portfolio_cmk</a><br/>
        Deployment : <a href="https://www.chomanki.com" target="_blank">https://www.chomanki.com</a> <br/>
    </p>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>🛒 Skills</h3>
    <p style="font-family: 'Pretendard-Regular';">
        - Front-end : HTML, CSS, JavaScript  <br/>
        - Deployment : Github action, AWS S3, AWS CloudFront, AWS Route 53
    </p>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>⛓ Architecture</h3>
    <p>
        <a href="images/portfolio_img/portfolio_archi.png" target="_blank" class="image main" style="width: 70%;">
                    <img src="images/portfolio_img/portfolio_archi.png" alt="portfolio_archi.png"/>
        </a>
    </p>
        <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>📚 Summary</h3>
    <p style="font-family: 'Pretendard-Regular';">
        제 포트폴리오를 작성하면서 PDF 등의 표현으로만은 아쉬워 직접 포트폴리오 웹을 만들어보고자 제작하게 됐습니다.
        <br/>
        아무래도 front-end 경험이 전무한 상황에서 제작하려다보니 HTML, CSS, JavaScript에 대한 공부를 조금이나마 하고, Bootstrap 템플릿을 통해 바로 제작을 진행하였습니다.
        <br/>
        서버단의 구현없이 개발하였지만, CSS 생각보다 신경써야 할 부분이 많아서 쉽지는 않았던 것 같습니다.
        <br/>
        - 개발 후 웹 페이지 배포의 번거로움을 느껴 Github actions를 통해 자동 배포를 구현하였습니다. 아키텍쳐는 아래와 같습니다.  
        <br/>
        <a href="images/portfolio_img/cdworkflow.png" target="_blank">
        <img
        src="images/portfolio_img/cdworkflow.png"
        alt=""
        style="width: 60%"
        /></a>
        <br/>
        - 개발 후 기존 HTML에 직접 컨텐츠를 적는 불편함이 생겨 마크다운 파일로 작성 후 읽어올 수 있게끔 Ajax 를 사용하여 md -> html 로 변환 가능하게 했습니다.
        - 방문자 수 컴포넌트 추가를 위해 Google Analytics 4 API 를 사용해 받아왔고, 이 후 웹에 공급할 수 있도록 AWS ( api gateway + lambda ) 를 사용하여 serverless 로 구현하였습니다. 이에대한 아키텍쳐는 아래와 같습니다.
        <br/>
        <a href="images/portfolio_img/ga4-aws-serverless.png" target="_blank">
        <img
        src="images/portfolio_img/ga4-aws-serverless.png"
        alt=""
        style="width: 80%"
        /></a>
        <br/>
    </p>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>📑 Meaning</h3>
    <p style="font-family: 'Pretendard-Regular';">
        평소 경험이 없던 부분을 처음으로 사용해본 프로젝트입니다.<br/>
        처음에는 React 프레임워크를 사용하여 개발하려 했으나, Http 통신없이 단순한 정적 호스팅으로 충분할 것 같아 정적 호스팅으로 제작했습니다. <br/>
        다만 디자인에 관한 사전지식이 충분하지 않기에 bootstrap 템플릿을 사용하여 구성하였습니다. <br/>
        CSS를 설정하면서 각 컴포넌트 마다 직접 명시를 해줘야 하는 작업이 정말 헷갈리고 신경쓰였지만 그래도 완성되어 가는 모습을 보며 뿌듯함을 느끼게 되었고, Front-end 분들의 고충도 조금이나마 더 알게 되었습니다. <br/>
        배포는 AWS의 S3 버킷 정적 웹사이트 호스팅을 이용하였고, 배포 도메인을 구매하여 ACM에서 SSL 인증서를 받아 CloudFront를 통해 https로 배포 하였습니다.<br/>
        이후 Route 53을 통해 S3 엔드포인트를 제가 구매한 도메인으로 호스팅하였습니다.<br/>
    </p>

</div>

<hr style="margin: 0rem 0px 5rem 0px;">
    
</div>