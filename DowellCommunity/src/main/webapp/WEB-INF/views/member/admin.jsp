<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 페이지</title>
 <!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
<!-- 매장검색 자바스크립트 -->
<script type="text/javascript" src="./resources/js/saleScript.js" ></script>
<!-- 고객검색 자바스크립트 -->
<script type="text/javascript" src="./resources/js/custScript.js" ></script>
<!-- 고객조회 자바스크립트 -->
<script type="text/javascript" src="./resources/js/adminScript.js" ></script>
<!-- 페이지 스타일css -->
<link href="resources/CSS/admin.css" rel="stylesheet">
<!-- 네비게이션 바 -->
<c:import url="../common/navbar.jsp"/>
<!-- 사이드 바 -->
<c:import url="../common/sidebar.jsp"/>
</head>
<body>
<div class="Wrap">
	<div class="starBox">
		<span class="star">★</span>
	</div>
	<span class="Title">고객조회</span>
	<!-- 새로고침 -->
	<button id="reload" onClick="window.location.reload()">
		<img class="Refresh" src="resources/cust_in/Refresh.png" style="cursor:pointer;">
	</button>
	<div class="SearchBox">
		<div class="wrap_mg">
			<!-- 매장조회 -->
			<span class="Text_space" id="sale">매장</span>
			<!-- 매장사용자인 경우 -->
			<c:if test="${ loginUser.userDtCd == 2 }">
				<input class="Text_box" id="saleCode" value="${ loginUser.prtCd }" disabled>
			</c:if>
			<!-- 본사인 경우 -->
			<c:if test="${ loginUser.userDtCd == 1 }">
				<input class="Text_box" id="saleCode" disabled>
			</c:if>
			<button id="Search_but_sale" onclick="Search_but_search()">
				<img class="total_search" src="resources/cust_in/search.png">
			</button>
			<!-- 매장사용자인 경우 -->
			<c:if test="${ loginUser.userDtCd == 2 }">
				<input class="Text_box" id="saleName" onkeyup="saleEvent(event);" onkeydown="enter(event);" value="${ loginUser.prtNm }" autofocus>
			</c:if>
			<!-- 본사인 경우 -->
			<c:if test="${ loginUser.userDtCd == 1 }">
				<input class="Text_box" id="saleName" onkeyup="saleEvent(event);" onkeydown="enter(event);" autofocus>
			</c:if>
			
			<!-- 고객번호조회 -->
			<span class="Text_space"  id="Cust_Num">고객번호</span>
			<input class="Text_box" id="custInput" disabled>
			<!-- 고객번호 검색버튼 -->
			<button type="button" id="Search_but_num" onclick="Search_but_num()">
				<img class="total_search" src="resources/cust_in/search.png">
			</button>
			<input class="Text_box" id="custNum" onkeyup="custEvent(event);" onkeydown="custEnter(event);">
			<button class="TotalSearch_but" id="TotalSearch_but_id" onclick="Search_Total()">
				<img class="total_search" src="resources/cust_in/search.png">
			</button>
			
		</div>
		<br>
		<div class="wrap_mg">
			<span class="essential">*</span>
			<span class="Text_space_s">고객상태</span>
			<input type="radio" class="radio_check" name="custState" checked="checked" value="100"> 
			<label>전체</label>
			<input type="radio" class="radio_check" name="custState" value="10"> 
			<label>정상</label>
			<input type="radio" class="radio_check" name="custState" value="80"> 
			<label>중지</label>
			<input type="radio" class="radio_check" name="custState" value="90"> 
			<label>해지</label>
			<span class="essential" id="wrap_s">*</span>
			<span class="Text_space">가입일자</span>
			<input type="date" class="Text_date" id='previousDate' onblur="date(value)">
			<input type="date" class="Text_date" id='currentDate'>
		</div>
	</div>
</div>

<c:if test="${ loginUser.userDtCd == 2 }">
	<button class="new_registration" onclick="showPopup();">신규등록</button>
</c:if>

<br><br>
<table class="CustTable">
	<thead>
    	<tr>
        	<th class="CustNum">고객번호</th>
            <th class="CustDetail">고객이름</th>
            <th class="CustPhone">휴대폰번호</th>
            <th class="memberState">고객상태</th>
            <th class="joinDate">가입일자</th>
            <th class="SaleInfo">가입매장</th>
            <th class="Cust">등록자</th>
            <th class="Modified_date">수정일자</th>
        </tr>
    </thead>
	<tbody id="totalTb">
	</tbody>
</table>

<!-- 고객변경이력조회 팝업창 -->
<div id="light_pop" class="white_content_pop">
	<div class="CustCheck_Wrap_pop" id="changeWrap_pop">
		<span>고객</span>
	</div>
	<table class="Cust_popup_table_pop">
		<thead>
			<tr>
				<th class="changeCustNum">변경일자</th>
				<th class="changeCustPhone_Text">변경항목</th>
				<th class="changeCustPhone_Before">변경전</th>
				<th class="changeCustPhone_After">변경후</th>
				<th class="changeMember">수정자</th>
				<th class="changeDate">수정일시</th>
			</tr>
		</thead>
		<tbody id="changeCust">
		</tbody>
	</table>
	<button class="popupBut" onclick="showDisplay();">
	닫기
	</button>
</div>
<div id="fade_pop" class="black_overlay_pop"></div>
<!-- 고객변경이력조회 팝업창end -->
</body>
</html>