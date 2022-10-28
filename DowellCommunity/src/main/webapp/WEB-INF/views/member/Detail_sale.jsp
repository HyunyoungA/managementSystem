<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>판매상세조회</title>
<!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
<!-- 반품 팝업창 자바스크립트 -->
<script type="text/javascript" src="./resources/js/Detail_saleScript.js" ></script>
<!-- 페이지 스타일css -->
<link href="resources/CSS/Detail_sale.css" rel="stylesheet">
</head>
<body>
<!-- 판매상세조회 팝업창 -->
<input type="hidden" id="saleDate">
<input type="hidden" id="loginNm" name="LST_UPD_ID">	<!-- 세션 아이디 -->
<input type="hidden" id="curDate">						<!-- 판매일자 -->
<input type="hidden" id="salRtn_val">					<!-- 반품&판매 -->
<input type="hidden" id="ORG">							<!-- 반품&판매 -->
<input type="hidden" id="saleNumCon">					<!-- 판매번호 -->
<input type="hidden" id="CRD_NO">						<!-- 카드번호 -->
<input type="hidden" id="VLD_YM">						<!-- 유효년월 -->
<input type="hidden" id="CRD_CO_CD">					<!-- 카드회사 -->
<input type="hidden" id="Cust_fst_User_Id">				<!-- 등록아이디 -->
<input type="hidden" id="login_userDtCd">				<!-- 본사매장 구분코드 -->

	<div class="white_content">
	<input type="hidden" id="checkShop">
		<h3 style="text-align: center;">판매상세조회</h3>
		<div class="CustCheck_Wrap">
			<span>매장 : </span>
			<input id="Cust_Sale_No" readonly>
			<input id="Cust_Sale_Nm" readonly>
			<span>고객번호 : </span>
			<input id="Cust_Num" readonly>
			<input id="Cust_Nm" readonly>
			<br><br>
			<span>판매수량 : </span><input id="Cust_Count" readonly>
			<span>판매금액 : </span><input id="Cust_Sum" readonly>
			<span>현금 : </span><input id="Cust_Cash" readonly>
			<span>카드 : </span><input id="Cust_Card" readonly>
			<span>포인트 : </span><input id="Cust_Pin" readonly>
		</div>
		<!-- 판매상세조회 내용 -->
		<table class="Cust_popup_table" id="custTb">
			<thead>
		    	<tr>
		    		<th class="goodsUqNum">번호</th>
		        	<th class="goodsNum">상품코드</th>
		            <th class="goodsName">상품명</th>
		            <th class="goodsCount">판매수량</th>
		            <th class="supply">공급가</th>
		            <th class="tax">부가세</th>
		            <th class="saleCount">판매금액</th>
		        </tr>
		    </thead>
			<tbody id="custPopup">
			</tbody>
			<tfoot id="tfootSum">
		    	<tr>
		    		<th class="goodsSum">합계</th>
		            <th class="goodsCountSum"></th>
		            <th class="supplySum"></th>
		            <th class="taxSum"></th>
		            <th class="saleCountSum"></th>
		        </tr>
			</tfoot>
		</table>
		<div class="Btnwrap" style="text-align: center;">
			<button class="popupBut" onclick="window.close();">
			닫기
			</button>
			<button type="button" class="popupBut" id="salRtn_Btn" onclick="Rtn()">
			반품
			</button>
		</div>
	</div>
<!-- 판매상세조회 팝업창end -->
</body>
</html>