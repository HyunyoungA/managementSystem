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
<!-- 고객정보수정 페이지 자바스크립트 -->
<script type="text/javascript" src="./resources/js/custInfoScript.js" ></script>
<!-- 페이지 스타일css -->
<link href="resources/CSS/custInfo.css" rel="stylesheet">
<!-- 네비게이션 바 -->
<c:import url="../common/navbar.jsp"/>
<!-- 사이드 바 -->
<c:import url="../common/sidebar.jsp"/>
</head>
<body>
<input type="hidden" id="cc" value="${ changeDtIn.CUST_NO }"><!-- 고객번호 원본 -->
<!-- 핸드폰중복 -->
<input type="hidden" id="mb1">
<input type="hidden" id="mb2">
<input type="hidden" id="mb3">
<!-- 핸드폰 중복END -->

<!-- **원본값**(변경된 내용과 비교하기 위함) -->
<form method="post" id="custChange">
	<input type="hidden" id="CuserId" name="LST_UPD_ID" value="${ loginUser.userId}">
	<input type="hidden" id="CNo" name="CUST_NO" value="${changeDtIn.CUST_NO}">
	<input type="hidden" id="CNm" name="CUST_NM" value="${changeDtIn.CUST_NM}">
	<input type="hidden" id="CDate"><!-- 생년월일 -->
	<input type="hidden" id="CDateOrigin" value="${changeDtIn.BRDY_DT}">
	<input type="hidden" id="CDate1" name="BRDY_DT">
	<input type="hidden" id="CMarryOrigin" value="${changeDtIn.MRRG_DT}">
	<input type="hidden" id="CMarry" name="MRRG_DT">
	<input type="hidden" id="CSexId" name="SEX_CD" value="${changeDtIn.SEX_CD}">
	<input type="hidden" id="CScal" name="SCAL_YN" value="${changeDtIn.SCAL_YN}">
	<input type="hidden" id="Ccause" name="CNCL_CNTS" value="${changeDtIn.CNCL_CNTS}">
	<input type="hidden" id="CPoc" name="POC_CD" value="${changeDtIn.POC_CD}">
	<input type="hidden" id="CssCd" name="CUST_SS_CD" value="${changeDtIn.CUST_SS_CD}">
	<input type="hidden" id="Cemail" name="EMAIL_RCV_YN" value="${changeDtIn.EMAIL_RCV_YN}">
	<input type="hidden" id="Csms" name="SMS_RCV_YN" value="${changeDtIn.SMS_RCV_YN}">
	<input type="hidden" id="CDm" name="DM_RCV_YN" value="${changeDtIn.DM_RCV_YN}">
	<input type="hidden" id="Cadd" name="ADDR" value="${changeDtIn.ADDR}">
	<input type="hidden" id="CaddDt" name="ADDR_DTL" value="${changeDtIn.ADDR_DTL}">
	<input type="hidden" id="CPsmt" name="PSMT_GRC_CD" value="${changeDtIn.PSMT_GRC_CD}">
	<input type="hidden" id="stopDt" name="STP_DT" value="${changeDtIn.STP_DT}">		<!-- 중지일자 -->
	<input type="hidden" id="cancelDt" name="CNCL_DT" value="${changeDtIn.CNCL_DT}">	<!-- 해지일자 -->
	<!-- 통핸드폰번호 -->
	<input type="hidden" id="mb_f" name="MBL_NO" value="${changeDtIn.MBL_NO}">
	<!-- 각각 핸드폰번호 -->
	<input type="hidden" id="mb1" value="${changeDtIn.MBL_NO1}">
	<input type="hidden" id="mb2" value="${changeDtIn.MBL_NO2}">
	<input type="hidden" id="mb3" value="${changeDtIn.MBL_NO3}">
	<!-- 가입매장코드 -->
	<input type="hidden" id="Ccd" name="JN_PRT_CD" value="${changeDtIn.JN_PRT_CD}">
	<input type="hidden" id="CSemail" name="EMAIL" value="${changeDtIn.EMAIL}">
</form>


<form method="post" name="custUpdate" id="custUpdateId">
<!-- 변경확인할 데이터 -->
<input type="hidden" id="aftNo" name="CUST_NO">
<input type="hidden" id="phoneNumble" name="MBL_NO">
<input type="hidden" id="birth" name="BRDY_DT">
<input type="hidden" id="MarryDay" name="MRRG_DT">
<input type="hidden" id="jsDt2"><!-- 가입일자 -->
<input type="hidden" id="stopDt2" name="STP_DT"><!-- 중지일자 -->
<input type="hidden" id="cancelDt2" name="CNCL_DT"><!-- 해지일자 -->
<input type="hidden" id="useridS" name="LST_UPD_ID" value="${ loginUser.userId}">
<input type="hidden" id="emailFull" name="EMAIL">
<input type="hidden" id="result">
<input type="hidden" id="changCheckVal">

<div class="Wrap">
	<div class="starBox">
		<span class="star">★</span>
	</div>
	<span class="Title">고객정보조회</span>
<!-- 	새로고침 -->
	<button type="button" id="reload" onClick="window.location.reload()">
		<img class="Refresh" src="resources/cust_in/Refresh.png" style="cursor:pointer;">
	</button>
	<div class="SearchBox">
		<div class="wrap_mg">
			<!-- 고객번호조회 -->
			<span class="Text_space" id="Cust_Num">고객번호</span>
			<input class="Text_box" id="custInput" value="${changeDtIn.CUST_NO}" readonly>
			<!-- 고객번호 검색버튼 -->
			<button type="button" onclick="Search_but_num()" id="Search_but_cust" >
				<img class="total_search" src="resources/cust_in/search.png">
			</button>
			<input class="Text_box" id="custNum" onkeyup="custEvent(event);" onkeydown="custEnter(event);"
			value="${ changeDtIn.CUST_NM }">
			<!-- 고객번호조회 end -->
			<!-- 전체검색 -->
			<button type="button" id="Search_but" onclick="Search_but_TotalSerchs()">
				<img class="total_search" src="resources/cust_in/search.png">
			</button>
		</div>
		<br>
	</div>
</div>

<span id="title">고객기본정보</span>
<div id="sale-table">
	<!-- 고객명 -->
	<div class="custNameWrap">
		<span class="essential">*</span>
		<span class="textWrap">고객명</span>
		<input class="inputBox" id="custNameId2" name="CUST_NM" value="${ changeDtIn.CUST_NM }"
			<c:if test="${ loginUser.userDtCd == 1 }"> readonly </c:if>>
	</div>
	<!-- 생년월일 -->
	<div class="custDateWrap">
		<span class="essential">*</span>
		<label class="textWrap">생년월일</label>
		<input type="date" class="inputBox" id="custDateBox" value="${changeDtIn.BRDY_DT}"
		<c:if test="${ loginUser.userDtCd == 1 }"> readonly </c:if>>
	</div>
	<!-- 성별 -->
	<div class="custNameWrapR">
		<span class="essential">*</span>
		<label class="textWrap">성별</label>
		<input type="radio" class="radio_check" id="custSexId" name="SEX_CD" value="F" 
			<c:if test="${changeDtIn.SEX_CD == 'F'}"> checked </c:if>>
		<span>여자</span>
		<input type="radio" class="radio_check" id="custSexIdM" name="SEX_CD" value="M"
			<c:if test="${changeDtIn.SEX_CD == 'M'}"> checked </c:if>>
		<span>남자</span>
	</div><br>
	<!--생일 양력/음력 -->
	<div class="custScalWrap">
		<span class="essential">*</span>
		<label class="textWrap">생일</label>
		<input type="radio" class="radio_check" id="custScalY" name="SCAL_YN" value="0"
		<c:if test="${changeDtIn.SCAL_YN == 0}"> checked </c:if>>
		<span>양력</span>
		<input type="radio" class="radio_check" id="custScalN" name="SCAL_YN" value="1"
		<c:if test="${changeDtIn.SCAL_YN == 1}"> checked </c:if>>
		<span>음력</span>
	</div>
	<!-- 결혼기념일 -->
	<div class="custNameWrap">
		<span style="color: white;">*</span>
		<label class="textWrap">결혼기념일</label>
		<input type="date" class="inputBox" id="custMarryBox" value="${changeDtIn.MRRG_DT}"
		<c:if test="${ loginUser.userDtCd == 1 }"> readonly </c:if>>
	</div>
	<!-- 직업코드 -->
	<div class="custNameWrapR">
		<span class="essential">*</span>
		<label class="textWrap">직업코드</label>
		<select class="inputBox" id="jobCode" name="POC_CD">
			<option value="" id="">선택해주세요</option>
			<option value="10" id="10"
			<c:if test="${changeDtIn.POC_CD == '10'}"> selected </c:if>>학생</option>
			<option value="20" id="20"
			<c:if test="${changeDtIn.POC_CD == '20'}"> selected </c:if>>회사원</option>
			<option value="30" id="30"
			<c:if test="${changeDtIn.POC_CD == '30'}"> selected </c:if>>공무원</option>
			<option value="40" id="40"
			<c:if test="${changeDtIn.POC_CD == '40'}"> selected </c:if>>전문직</option>
			<option value="50" id="50"
			<c:if test="${changeDtIn.POC_CD == '50'}"> selected </c:if>>군인</option>
			<option value="60" id="60"
			<c:if test="${changeDtIn.POC_CD == '60'}"> selected </c:if>>주부</option>
			<option value="90" id="90"
			<c:if test="${changeDtIn.POC_CD == '90'}"> selected </c:if>>연예인</option>
			<option value="99" id="99"
			<c:if test="${changeDtIn.POC_CD == '99'}"> selected </c:if>>기타</option>
		</select><br>
	</div><br>
	<!-- 휴대폰번호 -->
	<div class="custPhoneWrap">
	<span class="essential">*</span>
		<label class="textWrap">휴대폰번호</label>
		<input class="phoneinputBox" id="phone1" value="${changeDtIn.MBL_NO1}" style="margin-left: 38px; width: 54px;">
		<input class="phoneinputBox" id="phone2"value="${changeDtIn.MBL_NO2}" maxlength="4"
			oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
			<c:if test="${ loginUser.userDtCd == 1 }"> readonly </c:if>>
		<input class="phoneinputBox" id="phone3" name="phone39" value="${changeDtIn.MBL_NO3}" maxlength="4"
			oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
			<c:if test="${ loginUser.userDtCd == 1 }"> readonly </c:if>>
	<button type="button" id="phoneBut" onclick="phoneCheck();">변경</button><br>
	<span id="guide" style="font-size: 14px;margin-left: 140px;"></span>
	<input type="hidden" id="idDuplicateCheck" value="0">
	</div>
	
	<!-- 가입매장 -->
	<div class="custShopWrap" style="margin-left: 248px;">
		<span class="essential">*</span>
		<span class="textWrap">가입매장</span>
			<input class="loginInputBox" id="saleCode" name="JN_PRT_CD" value="${changeDtIn.JN_PRT_CD}" style="margin-left: 26px;" readonly>
		<button type="button" id="Search_but_sale" onclick="Search_but_search()">
			<img class="total_search" src="resources/cust_in/search.png">
		</button>
		<c:if test="${ loginUser.userDtCd == 2 }">
			<input class="loginInputBox" id="saleName" onkeyup="saleEvent(event);" onkeydown="enter(event);" value="${changeDtIn.PRT_NM}" name="joinName">
		</c:if>
		<c:if test="${ loginUser.userDtCd == 1 }">
			<input class="loginInputBox" id="saleName" onkeyup="saleEvent(event);" onkeydown="enter(event);" name="joinName" value="${changeDtIn.PRT_NM}" readonly>
		</c:if>
		<span></span>
	</div><br>
	<!--우편물수령주소 자택/직장 -->
	<div class="custAddressTextWrap">
		<span class="essential">*</span>
		<label class="textWrap">우편물수령주소</label>
		<input type="radio" class="radio_check" id="addressH" name="PSMT_GRC_CD" value="H"
			<c:if test="${changeDtIn.PSMT_GRC_CD == 'H'}"> checked </c:if>>
		<span>자택</span>
		<input type="radio" class="radio_check" id="addressO" name="PSMT_GRC_CD" value="O"
			<c:if test="${changeDtIn.PSMT_GRC_CD == 'O'}"> checked </c:if>>
		<span>직장</span>
	</div>
	<!-- 이메일 -->
	<div class="custEmailWrap">
		<span class="essential">*</span>
		<label class="textWrap">이메일</label>
		<input class="inputBox" id="custEmailId" value="${changeDtIn.EMAIL1}"
			oninput="this.value = this.value.replace(/[^0-9a-zA-Z-_\.]/g, '').replace(/(\..*)\./g, '$1');"
			<c:if test="${ loginUser.userDtCd == 1 }"> readonly </c:if>><!-- 한글입력막기 -->
		@<input class="inputBox" id="custEmailIdDetails" value="${changeDtIn.EMAIL2}"
			oninput="this.value = this.value.replace(/[^0-9a-zA-Z-_\.]/g, '').replace(/(\..*)\./g, '$1');"
			<c:if test="${ loginUser.userDtCd == 1 }"> readonly </c:if>><!-- 한글입력막기 -->
		<br>
	</div>
	<!--우편물수령주소 자택/직장 -->
	<div class="custAddressWrap">
		<input class="inputBox" style="background-color: #BDBDBD;" disabled>
		<input class="inputBox" id='firstAddress' name="ADDR" placeholder="직접입력" style="width: 250px;"
			<c:if test="${ loginUser.userDtCd == 1 }"> readonly </c:if>
			value="${changeDtIn.ADDR}">
		<input class="inputBox" id='TwoAddress' name="ADDR_DTL" placeholder="직접입력"
			<c:if test="${ loginUser.userDtCd == 1 }"> readonly </c:if>
			value="${changeDtIn.ADDR_DTL}">
		<br>
		<span id="addressSpan" style="font-size: 14px;margin-left: 137px;"></span>
	</div><br>
	<!-- 고객상태 -->
	<div class="custStateWrap">
		<span class="essential">*</span>
		<label class="textWrap">고객상태</label>
		<input type="radio" class="radio_check" id="custStateY" name="CUST_SS_CD" value="10"
			<c:if test="${changeDtIn.CUST_SS_CD == '10'}"> checked </c:if>>
		<label>정상</label>
		<input type="radio" class="radio_check" id="custStateN" name="CUST_SS_CD" value="80"
			<c:if test="${changeDtIn.CUST_SS_CD == '80'}"> checked </c:if>>
		<label>중지</label>
		<input type="radio" class="radio_check" id="outState" name="CUST_SS_CD" value="90"
			<c:if test="${changeDtIn.CUST_SS_CD == '90'}"> checked </c:if>>
		<label>해지</label>
	</div>
	<!-- 최초가입일자 -->
	<div class="firstJoinWrap">
		<label class="textWrap">최초가입일자</label>
		<input class="inputBox" id="fstJsDt" value="${ changeDtIn.FST_JS_DT }" style="background-color: #BDBDBD;" readonly>
	</div>
	<!-- 가입일자 -->
	<div class="joinWrap">
		<label class="textWrap">가입일자</label>
		<input class="inputBox" id="custJoinBox" value="${ changeDtIn.JS_DT }" style="background-color: #BDBDBD;" readonly>
	</div><br>
	<!-- 해지사유 -->
	<div class="custCauseWrap">
		<label class="textWrap">해지사유</label>
		<input class="inputBox" id="causeBox" name="CNCL_CNTS"
			<c:if test="${ loginUser.userDtCd == 1 }"> readonly </c:if>
		value="${ changeDtIn.CNCL_CNTS }">
	</div>
	<!-- 중지일자 -->
	<div class="stopWrap">
		<label class="textWrap">중지일자</label>
		<input class="inputBox" id="stopBox" value="${ changeDtIn.STP_DT }" style="background-color: #BDBDBD;" readonly>
	</div>
	<!-- 해지일자 -->
	<div class="exWrap">
		<label class="textWrap">해지일자</label>
		<input class="inputBox" id="cancelBox" value="${ changeDtIn.CNCL_DT }" style="background-color: #BDBDBD;" readonly>
	</div>
</div>
<!-- 고객기본정보end -->

<!-- 구매 -->
<span id="title">구매</span>
<div id="buy-table">
	<!-- 총구매금액 -->
	<div class="buyWrap" style="margin-left: 72px;">
		<span class="textWrap">총구매금액</span>
		<input class="inputBox" id="custNameId" value="${ changeDtIn.TOT_SAL_AMT }" disabled>
	</div>
	<!-- 당월구매금액 -->
	<div class="buyWrap">
		<span class="textWrap">당월구매금액</span>
		<input class="inputBox" id="buyId" value="${ changeDtIn.SAL_AMT }" disabled>
	</div>
	<!-- 최종구매일 -->
	<div class="buyWrap">
		<span class="textWrap">최종구매일</span>
		<input class="inputBox" id="buyDate" value="${ changeDtIn.SAL_DT }" disabled>
	</div>
</div>
<!-- 구매end -->

<!-- 포인트 -->
<span id="title">포인트</span>
<div id="buy-table">
	<!-- 총포인트 -->
	<div class="buyWrap" id="TotalePnt">
		<span class="textWrap">총포인트</span>
		<input class="inputBox" id="TotalePnt1" value="${ changeDtIn.TOT_PNT }" disabled>
	</div>
	<!-- 당월적립포인트 -->
	<div class="buyWrap">
		<span class="textWrap">당월적립포인트</span>
		<input class="inputBox" id="MonPnt" value="${ changeDtIn.PNT }" disabled>
	</div>
	<!-- 당월사용포인트 -->
	<div class="buyWrap">
		<span class="textWrap">당월사용포인트</span>
		<input class="inputBox" id="MonUsPnt" value="${ changeDtIn.USE_PNT }" disabled>
	</div>
</div>
<!-- 포인트end -->

<!-- 수신동의(통합) -->
<span id="title">수신동의(통합)</span>
<div id="buy-table">
	<!-- 이메일수신동의 -->
	<div class="buyWrap" style="margin-left: 72px;">
		<span class="essential">*</span>
		<span class="textWrap">이메일 수신동의</span>
		<input type="radio" class="radio_check" id="emailStateId" name="emailState" value="Y"
			<c:if test="${changeDtIn.EMAIL_RCV_YN == 'Y'}"> checked </c:if>>
		<label>예</label>
		<input type="radio" class="radio_check" id="emailStateId2" name="emailState" value="N"
			<c:if test="${changeDtIn.EMAIL_RCV_YN == 'N'}"> checked </c:if>>
		<label>아니오</label>
	</div>
	<!-- SMS수신동의 -->
	<div class="buyWrap">
		<span class="essential">*</span>
		<span class="textWrap">SMS수신동의</span>
		<input type="radio" class="radio_check" id="SNSStateId" name="SNSState" value="Y"
			<c:if test="${changeDtIn.SMS_RCV_YN == 'Y'}"> checked </c:if>>
		<label>예</label>
		<input type="radio" class="radio_check" id="SNSStateIdN" name="SNSState" value="N"
			<c:if test="${changeDtIn.SMS_RCV_YN == 'N'}"> checked </c:if>>
		<label>아니오</label>
	</div>
	<!-- DM수신동의 -->
	<div class="buyWrap">
		<span class="essential">*</span>
		<span class="textWrap">DM수신동의</span>
		<input type="radio" class="radio_check" id="DMStateId" name="DMState" value="Y"
			<c:if test="${changeDtIn.DM_RCV_YN == 'Y'}"> checked </c:if>>
		<label>예</label>
		<input type="radio" class="radio_check" id="DMStateIdN" name="DMState" value="N"
			<c:if test="${changeDtIn.DM_RCV_YN == 'N'}"> checked </c:if>>
		<label>아니오</label>
	</div>
</div>
<!-- 수신동의end -->
<button type="button" class="popupBut" id="close" onclick="location.href='managerPage.me'">
닫기
</button>
<c:if test="${ loginUser.userDtCd == 2 }">
	<button type="button" class="popupBut" id="updateBtn" onclick="updateEvent();">
	저장
	</button>
</c:if>
</form>

<script type="text/javascript">

</script>
</body>
</html>