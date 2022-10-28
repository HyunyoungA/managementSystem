<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>고객판매수금 등록</title>
<!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
<!-- 고객판매수금 등록 자바스크립트 -->
<script type="text/javascript" src="./resources/js/Collect_BillScript.js" ></script>
<!-- 페이지 스타일css -->
<link href="resources/CSS/Collect_Bill.css" rel="stylesheet">
</head>
<body>
	<div class="white_content">
		<input type="hidden" id="goodsCodeName">				<!-- 세션 매장코드 -->
		<input type="hidden" id="sale_Nm">						<!-- 세션 매장명 -->
		<input type="hidden" id="sale_Code" name="PRT_CD">		<!-- 세션 매장코드 -->
		<input type="hidden" id="loginNm" name="LST_UPD_ID">	<!-- 세션 아이디 -->
		<input type="hidden" id="cardYearDate">					<!-- 카드유효년YYYY값 비교할 값(올해 년도의 값이 담겨있음.) -->
		<input type="hidden" id="cardMonDate">					<!-- 카드유효년MM값 비교할 값(현재 월의 값이 담겨있음.) -->
		<input type="hidden" id="cardNumFull">					<!-- 카드번호1-4 합침 -->
		<input type="hidden" id="PNT">							<!-- 포인트:(카드결제금액+현금결제금액)*0.1 : 적립 -->
		<input type="hidden" id="checkShop">					<!-- 사용x -->
		<input type="hidden" id="searchStock">					<!-- 자동완성X 팝업창 띄울때 보내는 검색어값 -->
		<input type="hidden" id="num">							<!-- 자동완성X 팝업창 띄울때 보내는 버튼값 -->
		
		<h3 style="text-align: center;">고객판매수금 등록</h3>
		<div class="CustCheck_Wrap">
			<span class="es">*</span>
			<span class="Text_space_s">판매일자</span>
			<input type="date" class="sale_Date" id="currentDate" name="SAL_DT" style="width: 100px;" readonly>
			<span  class="es" style="margin-left: 183px;">*</span>
			<span class="Text_space_s">판매구분</span>
			<select class="sale_Date" id="sale" name="SAL_TP_CD" style="width: 100px;" disabled="disabled">
				<!-- 공통테이블 가져오기 판매, 반품 -->
				<c:forEach items="${list}" var="C">
					<c:if test="${C.CODE_CD eq 'SAL_TP_CD'}">
						<c:choose>
						<c:when test="${C.DTL_CD_NM eq '판매'}">
						 	<option value="${C.DTL_CD}" selected>${C.DTL_CD_NM}</option>
						</c:when>
						<c:otherwise>
							<option value="${C.DTL_CD}" >${C.DTL_CD_NM}</option>
						</c:otherwise>
						</c:choose>
					</c:if>
				</c:forEach>
			</select><br><br>
				
			<!-- 고객번호 검색 -->
			<div>
				<span class="es">*</span>
				<span class="Text_space_s">고객번호</span>
				<input class="Text_box" id="custInput" name="CUST_NO" readonly>
				<!-- 고객번호 검색 버튼 -->
				<button type="button" id="Search_but_sale" onclick="Search_but_num()">
					<img class="total_search" src="resources/cust_in/search.png">
				</button>
				<!-- 고객번호 검색 버튼 end-->
					
				<input class="Text_box" id="custNum" name="CUST_NM" onclick="reSearch()" onkeyup="custEvent(event);" onkeydown="custEnter(event);" autofocus>
			</div>
			<!-- 고객번호 검색 end -->
		</div>
		<!-- 결제금액 내용 -->
		<p>결제금액</p>
		<div class="CustCheck_Wrap">
			<span class="Text_space_s">현금</span>
			<input class="sale_Date_Bill" id="cash" name="CSH_STLM_AMT" style="width: 100px; margin-left: 27px;"
			oninput="this.value = this.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');">
				
			<span class="Text_space_s" style="margin-left: 65px;">카드금액</span>
			<input class="sale_Date_Bill" id="cardCount" name="CRD_STLM_AMT" style="width: 100px;"
			oninput="this.value = this.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');">
				
			<span class="Text_space_s" style="margin-left: 65px;">포인트 사용액</span>
			<input class="sale_Date_Bill" id="pointUse" name="PNT_STLM_AMT" style="width: 100px;"
			oninput="this.value = this.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');">
			<br>
				
			<span class="Text_space_s">유효일자</span>
			<input class="sale_Date_Bill" id="effectDate" name="VLD_YM" style="width: 100px;" maxlength="6" placeholder="MMYYYY"
			oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');">
				
			<span class="Text_space_s" style="margin-left: 65px;">카드회사</span>
			<select class="sale_Date_Bill" id="cardCompany" name="CRD_CO_CD" style="width: 106px; height: 25px;">	
				<option value="" selected>선택하세요</option>
				<!-- 공통테이블 가져오기 카드회사 -->
				<c:forEach items="${list}" var="C">
					<c:if test="${C.CODE_CD eq 'CRD_CO_CD'}">
						<option value="${C.DTL_CD}">${C.DTL_CD_NM}</option>
					</c:if>
				</c:forEach>
			</select>
			<span class="Text_space_s" style="margin-left: 65px;">포인트 가능액</span>
			<input class="sale_Date_Bill" name="AVB_PNT" id="pointPossible" readonly><br>
			<span class="Text_space_s">카드번호</span>
			<input class="card" id="card1" maxlength="4" 
			oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');">
			<input class="card" id="card2" maxlength="4"
			oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');">
			<input class="card" id="card3" maxlength="4"
			oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');">
			<input class="card" id="card4" maxlength="4"
			oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');">
		</div>
		<!-- 결제금액 내용end -->
		<div id="btnWrap">
			<button type="button" class="plus" onclick="plus()">+</button>
			<button type="button" class="minus" onclick="minus()">-</button>
		</div>
		<table class="Cust_popup_table" id="custTb">
			<thead>
			    <tr>
			    	<th class="goodscheck">선택</th>
			    	<th class="goodsUqNum">번호</th>
			        <th class="goodsNum">상품코드</th>
			        <th class="goodsName">상품명</th>
			        <th class="goodsCount">매장재고</th>
			        <th class="supply">판매수량</th>
			        <th class="tax">소비자가</th>
			        <th class="saleCount">판매금액</th>
			    </tr>
			</thead>
			<tbody id="custPopup">
				<tr>
			    	<td class="goodscheckCon">
			    		<input class='searchPopupInput' id='shopCheck' type='checkbox' name='shopCheck' value="1">
			    	</td>
			    	<td class="goodsUqNumCon">
			    		<input class='goodsUqIn' value="1" readonly>
			    	</td>
			        <td class="goodsNumCon">
			        	<input id="goodsSearch1" class="goodsSe" name="PRD_CD">
			        	<!-- 상품코드 검색 버튼 -->
						<button type="button" id="goods_but_sale" value="1" onclick="goods_but(this)">
							<img class="total_search" src="resources/cust_in/search.png">
						</button>
						<!-- 상품코드 검색 버튼 end-->
			        </td>
			        <td class="goodsNameCon" id="goodsNameId">
			        	<input id="goodsNameIn1" class="goodsNa" readonly>
			        </td>
			        <td class="goodsCountCon" id="goodsCountId">
			            <input id="goodsCountIn1" class="goodsCo" name="IVCO_QTY" readonly>
			        </td>
			        <td class="supplyCon" id="supplyId"><!-- 판매수량 -->
			            <input id="supplyIn1" name="SAL_QTY" class="supplyClass" onkeyup="supply(this);"
			            oninput="supplyOninput(this)">
			        </td>
			        <td class="priceCon" id="priceId"><!--  소비자가-->
			            <input class="priceClass" name="PRD_CSMR_UPR" id="priceIn1" readonly>
			        </td>
			        <td class="saleCountCon" id="saleCountId"><!-- 판매금액 -->
			            <input id="saleCountIn1" name="SAL_AMT" class="saleClass" readonly>
			        </td>
			        <td class="hiddenClass">
			            <input type="hidden" class='hiddenpriceCon' id='pricehidden1'><!-- 판매수량 소비자가(1개값)-->
			        </td>
			    </tr>
			</tbody>
			<tfoot>
			    <tr>
			    	<th class="goodsSum">합계</th>
			        <th class="goodsCountSum">판매수량</th>
			        <th class="supplySum">
			            <input id="supplySumIn" name="TOT_SAL_QTY" readonly>
			        </th>
			        <th class="taxSum">판매금액</th>
			        <th class="saleCountSum">
			            <input id="saleCountSumIn" name="TOT_SAL_AMT" readonly>
			        </th>
			    </tr>
			</tfoot>
		</table>
		<div class="Btnwrap" style="text-align: center;">
			<button type="button" class="popupBut" onclick="window.close();">
			닫기
			</button>
			<button type="button" class="popupBut" onclick="custPopUpsumit();">
			저장
			</button>
		</div>
	</div>
</body>
</html>