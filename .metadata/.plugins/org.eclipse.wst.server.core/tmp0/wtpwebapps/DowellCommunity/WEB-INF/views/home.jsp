<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<title>두웰커뮤니티</title>
<link href="resources/CSS/home.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body id="body">
<!-- 네비바 -->
<c:import url="common/navbar.jsp"/>
	
<div id="wrap">
	<div id="header">
		<!-- 검색창 -->
		<div class="Top_wrap">
			<div class="banner"></div>
			<div class="search_wrap">
				  <input id="search" value=""/>
			</div>
		</div>
		
		<!-- 팝업창 -->
		<div id="pop_info_1" class="pop_wrap" style="display:none;">
			<div class="pop_inner">
				<p class="dsc">팝업 안내문구 입니다.</p>
			    <button type="button" class="btn_close">닫기</button>
			</div>
		</div>
		<!-- 팝업창 end-->
		
		<!-- 카테고리 -->
		<div class="totalCate">
			<ul>
				<li>
					<a>전체 카테고리</a>
					<ul class="gnb">
						<li><a>브랜드패션</a></li>
						<li><a>패션잡화</a></li>
						<li><a>뷰티</a></li>
						<li><a>식품</a></li>
						<li><a>생활</a></li>
					</ul>
				</li>
				<li><a>홈</a></li>
				<li><a>위메프데이</a></li>
				<li><a>특가</a></li>
				<li><a>디지털워크</a></li>
				<li><a>투어컬처위크</a></li>
				<li><a>베스트</a></li>
				<li><a>베이비프로</a></li>
				<li><a>패션뷰티프로</a></li>
			</ul>
		</div>
		<!-- 카테고리 end-->
	</div>
	<!-- 메인배너 슬라이드 -->
	<div id="contain">
		<div class="mySlideDiv fade active" id="active" style="background-color: #EB002B;">
	        <img src="https://view01.wemep.co.kr/wmp-main/34/202208/01/pmb_xgcwkf14xe0q.jpg"> 
	    </div>
	            
	    <div class="mySlideDiv fade" style="background-color: #E4F1F7;">
	         <img src="https://view01.wemep.co.kr/wmp-main/11/202208/02/pmb_wlbwy4ak6iwu.jpg"> 
	    </div>
	            
	    <div class="mySlideDiv fade" style="background-color: #E2EAF7;">
	         <img src="https://view01.wemep.co.kr/wmp-main/25/202208/01/pmb_mgjbgi9qydwj.jpg"> 
	    </div>
	    <a class="prev" id="prevId" onclick="prevSlide()">&#10094;</a>
	    <a class="next" onclick="nextSlide()">&#10095;</a>
	    <!-- 메인배너 슬라이드 end -->
	    <br><br>
	    <!-- 카테고리 -->
	    <span class="service">
	    	위메프 주요 서비스
	    </span>
	    <div class="cateGroup">
	    	<div class="cate"><a></a></div>
	    	<div class="cate"><a></a></div>
	    	<div class="cate"><a></a></div>
	    	<div class="cate"><a></a></div>
	    	<div class="cate"><a></a></div>
	    	<div class="cate"><a></a></div>
	    	<div class="cate"><a></a></div>
	    </div>
	    <!-- 카테고리end -->
	    <!-- 게시물 -->
<!-- 	    <div class="list_wrap"> -->
<!-- 	    	상품 리스트 -->
<%-- 	    	<c:forEach var="b" begin="0" end="2" items="${ blist }"> --%>
<!-- 			<div class="list_conts"> -->
<!-- 	    		<img src="https://view01.wemep.co.kr/wmp-deal/2/260/627962602/627962602_medium.jpg?1659453267"> -->
<%-- 	    		<p class="text">${b.PRD_NM}</p> --%>
<%-- 	    		<p class="text">${b.PRD_CSMR_UPR}원</p> --%>
<!-- 	    	</div> -->
<%-- 			</c:forEach> --%>
<!-- 	    </div> -->
	    <!-- 게시물end -->
	    <br><br><br><br><br><br><br><br>
	</div>
	<!-- 메인배너 슬라이드 end-->
	
</div>
<script>
$(document).ready(function () {
	$(".mySlideDiv").not("#active").hide(); //화면 로딩 후 첫번째 div를 제외한 나머지 숨김
	setInterval(nextSlide, 4000); //4초(4000)마다 다음 슬라이드로 넘어감
});

//이전 슬라이드
function prevSlide() {
	$(".mySlideDiv").hide(); //모든 div 숨김
	var allSlide = $(".mySlideDiv"); //모든 div 객체를 변수에 저장
	var currentIndex = 0; //현재 나타난 슬라이드의 인덱스 변수
	
	//반복문으로 현재 active클래스를 가진 div를 찾아 index 저장
	$(".mySlideDiv").each(function(index,item){ 
		if($(this).hasClass("active")) {
			currentIndex = index;
		}
        
	});
	
	//새롭게 나타낼 div의 index
	var newIndex = 0;
    
	if(currentIndex <= 0) {
		//현재 슬라이드의 index가 0인 경우 마지막 슬라이드로 보냄(무한반복)
		newIndex = allSlide.length-1;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 뒤로 간 index 지정
		newIndex = currentIndex-1;
	}

	//모든 div에서 active 클래스 제거
	$(".mySlideDiv").removeClass("active");
    
	//새롭게 지정한 index번째 슬라이드에 active 클래스 부여 후 show()
	$(".mySlideDiv").eq(newIndex).addClass("active");
	$(".mySlideDiv").eq(newIndex).show();

}

//다음 슬라이드
function nextSlide() {
	$(".mySlideDiv").hide();
	var allSlide = $(".mySlideDiv");
	var currentIndex = 0;
	
	$(".mySlideDiv").each(function(index,item){
		if($(this).hasClass("active")) {
			currentIndex = index;
		}
        
	});
	
	var newIndex = 0;
	
	if(currentIndex >= allSlide.length-1) {
		//현재 슬라이드 index가 마지막 순서면 0번째로 보냄(무한반복)
		newIndex = 0;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 앞으로 간 index 지정
		newIndex = currentIndex+1;
	}

	$(".mySlideDiv").removeClass("active");
	$(".mySlideDiv").eq(newIndex).addClass("active");
	$(".mySlideDiv").eq(newIndex).show();
	
}
	
	
</script>
</body>
</html>
