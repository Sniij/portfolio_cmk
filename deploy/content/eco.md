<h1 class="modal-title fs-5" id="exampleModalLabel" style="text-align: left; font-size: 2rem; padding: 1rem 0 0 1rem" >Side project: Parking API <a href="https://github.com/Sniij/eco" target="_blank" class="icon brands alt fa-github" ><span class="label">GitHub</span></a>
</h1>

<hr style="margin:0px 0px 1rem 0px;">
<div id="modal_inContent" style="position: inherit; text-align: left; font-family: 'KBO-Dia-Gothic_bold';">
    <h3>🔗 URLs</h3>
    <p>
        Github : <a href="https://github.com/Sniij/portfolio_cmk" target="_blank">https://github.com/Sniij/eco</a><br/>
    </p>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>🛒 Skills</h3>
    <p style="font-family: 'Pretendard-Regular';">
        - Back-end : Java, Spring boot  <br/>
    </p>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>📚 Summary</h3>
    <p style="font-family: 'Pretendard-Regular';">
        - 주차장 정보를 검색할 수 있으면 편할 것 같아 만든 사이드 프로젝트입니다. 가상의 임직원 관리 API 를 포함하였습니다.
    </p>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>⛓ ERD</h3>

<img src="images/parking_img/eco-erd.png" alt="eco-erd"></img>
    <hr style="margin: 1rem 0px 1rem 0px;">
    <h3>📑 Meaning</h3>

#### How to use

1. 공공데이터 포탈에서 Open API service key 발급 
    - 아래의 링크에서 Open API 에 대한 설명을 읽은 후 활용신청하여 service key 를 발급받습니다. 
    https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15099883

2. src/main/resources/application.yml 설정
    - spring.datasource.url,
    spring.datasource.username,
    spring.datasource.password 을 자신의 개발 환경에 맞게 설정해줍니다.  
    - 또한 위에서 발급받은 service key 를 serviceKey 에 넣어줍니다.


3. API
   - 아래의 API 문서를 참고하여 API 를 테스트 할 수 있고, 기존 소스를 활용하여 API 를 수정할 수 있습니다. 
   - API 문서: 
   [API Documentation](files/parking-api.html)
   - API 는 간단한 User 관리와 부서 관리를 포함하여 주차장 검색 API 를 포함하고 있습니다.
     - Employee GET( information, job history )
     - Employee PATCH( information, salary )
     - Department GET( information, location )
     - RestPark GET( information, 추석 명절 개방여부 )

</div>

<hr style="margin: 0rem 0px 5rem 0px;">
    
</div>