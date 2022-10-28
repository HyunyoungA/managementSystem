<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>고객판매관리 페이지</title>
 <!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<!-- 매장검색 자바스크립트 -->
<script type="text/javascript" src="./resources/js/saleScript.js"></script>
<!-- 고객검색 자바스크립트 -->
<script type="text/javascript" src="./resources/js/custScript.js"></script>
<!-- 고객판매관리 자바스크립트 -->
<script type="text/javascript" src="./resources/js/saleManagementScript.js"></script>
<!-- 페이지CSS -->
<link href="resources/CSS/saleManagement.css" rel="stylesheet">
<c:import url="../common/navbar.jsp"/>
</head>
<body>
<c:import url="../common/sidebar.jsp"/>
<input type="hidden" id="loginNm" value="${ loginUser.userId }"><!-- 매장로그인 아이디 -->
<input type="hidden" id="userDtCd" value="${ loginUser.userDtCd }"><!-- 본사/매장 아이디 -->

<!-- 상세버튼 클릭 시 상세정보 -->
<input type="hidden" id="saleCodeCon"><!-- 매장코드 -->
<input type="hidden" id="saleNameCon"><!-- 매장명 -->
<input type="hidden" id="saleDateCon"><!-- 판매일자 -->
<input type="hidden" id="CustNumCon"><!-- 고객번호 -->
<input type="hidden" id="CustNameCon"><!-- 고객명 -->
<input type="hidden" id="saleNumCon"><!-- 판매번호 -->
<input type="hidden" id="count"><!-- 판매수량 -->
<input type="hidden" id="money"><!-- 판매금액 -->

<input type="hidden" id="fstUserId"><!-- 등록아이디 -->
<input type="hidden" id="prtCd"><!-- 구매매장코드 -->
<input type="hidden" id="prtNm"><!-- 구매매장명 -->

<input type="hidden" id="cash"><!-- 현금 -->
<input type="hidden" id="card"><!-- 카드 -->
<input type="hidden" id="point"><!-- 포인트 -->
<input type="hidden" id="salRtn"><!-- 반품&판매 -->
<input type="hidden" id="curDate"><!-- 판매일자1 -->
<input type="hidden" id="preDate"><!-- 판매일자2 -->
<!-- 상세버튼 클릭 시 상세정보 end-->

<div class="Wrap">
	<div class="starBox">
		<span class="star">★</span>
	</div>
	<span class="Title">고객판매관리</span>
<!-- 	새로고침 -->
	<button id="reload" onClick="window.location.reload()">
		<img class="Refresh" src="resources/cust_in/Refresh.png" style="cursor:pointer;">
	</button>
	<div class="SearchBox">
		<div class="wrap_mg">
			<!-- 판매일자 -->
			<span class="es">*</span>
			<span class="Text_space" id="sale">판매일자</span>
				<input type="date" class="saleDateSelect" id="previousDate">
				<input type="date" class="saleDateSelect" id="currentDate">
			<!-- 매장 검색 -->
			<span class="sale_Wrap">*</span>
			<span class="Text_space">매장</span>
			
			<!-- 매장사용자 -->
			<c:if test="${ loginUser.userDtCd == 2 }">
				<input class="Text_box" id="saleCode" value="${ loginUser.prtCd }" disabled>
			<button type="button" id="Search_but_num">
				<img class="total_search" src="resources/cust_in/search.png">
			</button>
			<input class="Text_box" id="saleName" onkeyup="saleEvent(event);" onkeydown="enter(event);" value="${ loginUser.prtNm }" disabled>
			</c:if>
			<!-- 매장사용자end -->
			
			<!-- 본사사용자 -->
			<c:if test="${ loginUser.userDtCd == 1 }">
				<input class="Text_box" id="saleCode" disabled>
			<button type="button" id="Search_but_num" onclick="Search_but_search()">
				<img class="total_search" src="resources/cust_in/search.png">
			</button>
			<input class="Text_box" id="saleName" onkeyup="saleEvent(event);" onkeydown="enter(event);">
			</c:if>
			<!-- 본사사용자end -->
			
			<!-- 통합검색 -->
			<button class="TotalSearch_but" id="TotalSearch_but_id" onclick="sale_Search_Total()">
				<img class="total_search" src="resources/cust_in/search.png">
			</button>
		</div>
		<br>
		
		<!-- 고객번호 검색 -->
		<div class="wrap_mg">
			<span class="Text_space_s">고객번호</span>
			<input class="Text_box" id="custInput" disabled>
			
			<!-- 고객번호 검색 버튼 -->
			<button id="Search_but_sale" onclick="Search_but_num()">
				<img class="total_search" src="resources/cust_in/search.png">
			</button>
			<!-- 고객번호 검색 버튼 end-->
			
			<input class="Text_box" id="custNum" onkeyup="custEvent(event);" onkeydown="custEnter(event);" autofocus>
		</div>
		<!-- 고객번호 검색 end -->
	</div>
</div>

<!-- 매장사용자만 클릭가능 -->
<c:if test="${ loginUser.userDtCd == 2 }">
	<button class="new_registration" onclick="CollectBill();">판매등록</button>
</c:if>
<!-- 매장사용자만 클릭가능end -->
<!-- 본사 클릭 불가능 -->
<c:if test="${ loginUser.userDtCd == 1 }">
	<button class="non_new_registration">판매등록</button>
</c:if>
<!-- 본사 클릭 불가능end -->

<br><br>
<table class="CustTable">
	<thead>
		<tr>
			<td class="saleDate" rowspan="2">판매일자</td>
			<td class="CustNum" rowspan="2">고객번호</td>
			<td class="CustName" rowspan="2">고객명</td>
			<td class="saleNum" rowspan="2">판매번호</td>
			<td class="memberState" colspan="2">판매</td>
			<td class="money" colspan="3">수금</td>
			<td class="savePeople" rowspan="2">등록자</td>
			<td class="saveTime" rowspan="2">등록시간</td>
		</tr>
		<tr>
			<td class="countTitle">수량</td>
			<td class="moneyTitle">금액</td>
			<td class="cashTitle">현금</td>
			<td class="cardTitle">카드</td>
			<td class="pointTitle">포인트</td>
		</tr>
    </thead>
	<tbody id="totalTb">
	</tbody>
	<tfoot id="tfootSum">
	</tfoot>
</table>
</body>
</html>