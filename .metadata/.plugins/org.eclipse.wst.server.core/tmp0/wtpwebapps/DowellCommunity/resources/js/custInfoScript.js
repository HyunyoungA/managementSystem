/**
고객정보 수정 페이지
 * 
 */
 
$( document ).ready(function() {
 var aftNo = $('#CNo').val();
$('#aftNo').val(aftNo);

//오늘날짜
const offset = new Date().getTimezoneOffset() * 60000;
var todaybe = new Date(Date.now() -offset).toISOString().substring(0, 10);
//하이픈 제거
var today = todaybe.replace(/\-/g,'');
console.log(today);


//휴대폰번호 연결
var phone1 = $("#phone1").val();
var phone2 = $("#phone2").val();
var phone3 = $("#phone3").val();
var mblNo = phone1 + phone2 + phone3;

console.log(phone1);
console.log(phone2);
console.log(phone3);
console.log(mblNo);
document.getElementById('phoneNumble').value = mblNo;

//생년월일 하이픈 제거
var custBirthdayBox = $('#custDateBox').val();
var brdyDt = custBirthdayBox.replace(/\-/g,'');
document.getElementById("birth").value = brdyDt;

//**원본생년월일 하이픈 제거
var custBirthdayBox = $('#custDateBox').val();
var brdyDt = custBirthdayBox.replace(/\-/g,'');
document.getElementById("birth").value = brdyDt;

//결혼기념일 하이픈 제거
var custMarryBox2 = $('#custMarryBox').val();
var mrrgDt = custMarryBox2.replace(/\-/g,'');
document.getElementById("MarryDay").value = mrrgDt;

//중지일자 하이픈 제거
var stopBox = $('#stopBox').val();
var stopDt = stopBox.replace(/\-/g,'');
document.getElementById("stopDt2").value = stopDt;

//해지일자 하이픈 제거
var cancelBox = $('#cancelBox').val();
var cancelDt = cancelBox.replace(/\-/g,'');
document.getElementById("cancelDt2").value = cancelDt;

//이메일 @붙히기
var custEmailId = document.getElementById('custEmailId').value;					//이메일아이디
var custEmailIdDetails = document.getElementById('custEmailIdDetails').value;	//이메일주소

//이메일값이 없을 경우 @만 들어갈 수 있기 때문에 이메일아이디와 이메일주소가 있을 시에만 넣어준다. 
if(custEmailId != ''&& custEmailIdDetails != ''){
	var email = custEmailId+'@'+custEmailIdDetails;
	//이메일
	document.getElementById("emailFull").value = email;
}
});

//휴대폰번호 중복, 중복확인했는지
var phoneCheck2 = false;
var phoneCheck3 = false;

$('#phone2').on('change paste keyup', function(){
	  phoneCheck2 = false; 
});

$('#phone3').on('change paste keyup', function(){
	  phoneCheck3 = false; 
});


//고객상태
var checkValue = $('input[name="CUST_SS_CD"]:checked').val();
console.log(checkValue);
var CssCd = $('#CssCd').val();//원본값
console.log(CssCd);

//정상
if(checkValue == 10){
	$('#outState').prop('disabled', true);//해지버튼 막기
	$('#causeBox').prop('disabled', true);//사유내용 막기
}
//중지
if(checkValue == 80){
	$('#causeBox').prop('disabled', true);
}
//해지
if(checkValue == 90){
	$('#custStateY').prop('disabled', false);
	$('#custStateN').prop('disabled', true);
	$('#causeBox').prop('disabled', false);

	$('#cancelBox').val(today);//원본값
}
if(checkValue == ''){
	$('#outState').prop('disabled', false);
}

//정상버튼 클릭시
$("#custStateY").change(function(){
	debugger;
	$('#causeBox').val('');
	$('#causeBox').prop('disabled', true);
	var checkVal = $('input[name="CUST_SS_CD"]:checked').val();
	var mb1 = $('#mb1').val();
	var mb2 = $('#mb2').val();
	var mb3 = $('#mb3').val();
	var CNm = $('#CNm').val();
	
	console.log(checkVal);
	console.log(CssCd);
	//해지->정상
	if(checkVal == 10 && CssCd == 90){
		alert("고객명과 휴대폰번호를 입력해주세요.")
		$('#custNameId2').val('');
		$('#phone1').val('');
		$('#phone2').val('');
		$('#phone3').val('');
		
		$('#cancelBox').val('');
		
	}
});

//중지버튼 클릭시
$("#custStateN").change(function(){
	$('#causeBox').val('');
	$('#causeBox').prop('disabled', false);
	var checkVal = $('input[name="CUST_SS_CD"]:checked').val();
	var mb1 = $('#mb1').val();
	var mb2 = $('#mb2').val();
	var mb3 = $('#mb3').val();
	var CNm = $('#CNm').val();
	console.log();
	console.log(mb2);
	
	//중지->해지
	if(checkVal == 80){
		$('#custNameId2').val(CNm);
		$('#causeBox').val('');
		$('#causeBox').prop('disabled', true);
	}
});

//해지버튼 클릭시
$("#outState").change(function(){
	$('#causeBox').val('');
	$('#causeBox').prop('disabled', false);
	var checkVal = $('input[name="CUST_SS_CD"]:checked').val();
});

//날짜 체크 윤달
var previousDate = document.querySelector("#previousDate")

function date (value){
	var result = true;
	try {
	    var date = value.split("-");
	    var y = parseInt(date[0], 10),
	        m = parseInt(date[1], 10),
	        d = parseInt(date[2], 10);
	    
	    var dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
	    result = dateRegex.test(d+'-'+m+'-'+y);
	} catch (err) {
		result = false;
	}    
  return result;
};

//휴대폰번호 중복, 중복확인했는지
var phoneCheck2 = false;
var phoneCheck3 = false;

$('#phone2').on('change paste keyup', function(){
	  phoneCheck2 = false; 
});

$('#phone3').on('change paste keyup', function(){
	  phoneCheck3 = false; 
});
 

//핸드폰 중복체크
function phoneCheck() {
	debugger;
	var phone1 = $("#phone1").val();
	var phone2 = $("#phone2").val();
	var phone3 = $("#phone3").val();
	var phoneNum = phone1 + phone2 + phone3

	//휴대폰번호 길이 유효성 체크
	if (phone1.trim() == '' || phone1.trim().length != 3) {
		alert('휴대폰 번호를 확인해주세요.');
		$("#phone1").focus();
	}else if (phone2.trim() == ''|| phone2.trim().length < 3) {
		alert('휴대폰 번호를 확인해주세요.');
		$("#phone2").focus();
	} else if (phone3.trim() == '' || phone3.trim().length != 4) {
		alert('휴대폰 번호를 확인해주세요.');
		$("#phone3").focus();
	} else if(phone2.trim() == '000' || phone2.trim() == '0000'){
		alert('유효하지 않은 번호입니다.');
		return false;
	} else if(phone3.trim() == '000' || phone3.trim() == '0000'){
		alert('유효하지 않은 번호입니다.');
		phone3.focus();
		return false;
	} else {
		console.log('2');
		$.ajax({
			url : 'phoneNum.me',
			type : "post",
			data : {"phoneNum" : phoneNum},
			success : function(data) {
				console.log(data);
				if (data == '1') {
					alert("사용 중인 핸드폰 번호입니다.");
					$('#phone1').val($('#mb1').val());
					$('#phone2').val($('#mb2').val());
					$('#phone3').val($('#mb3').val());
					console.log($('#phone1').val());
					$('#idDuplicateCheck').val(0);
					Check2 = false;
					phoneCheck3 = false;
				} else {
					alert("사용 가능한 핸드폰 번호입니다.");
					$('#idDuplicateCheck').val(1);
					phoneCheck2 = true;
					phoneCheck3 = true;
					console.log('4');
				}
			},
			error : function(data) {
				console.log(data);
			}
		});
	};
};

//주소 1칸 입력시 2칸도 입력필수
function Address() {
	var firstAddress = $("#firstAddress").val();
	var TwoAddress = $("#TwoAddress").val();
	
	if (firstAddress.trim() !== '' && TwoAddress.trim() == '') {
		var area = document.getElementById('addressSpan');
		alert("상세주소도 입력해주세요.");
		return false;
	} else if (firstAddress.trim() == '' && TwoAddress.trim() !== '') {
		var area = document.getElementById('addressSpan');
		alert("시/구/동 주소도 입력해주세요.");
		return false;
	}
}

////////////////////////////////-고객정보전체 조회-////////////////////////////////////////

//고객번호 인풋창에 값이 있을 시 실행
var custInput = '';
$(document).ready(function() {
	debugger;
	custInput = $('#cc').val();
	console.log(custInput);
	if(custInput == "" || custInput == null){
		console.log('값이 비어있음');
	}else{
		console.log('값이 있음');
	}

	//**원본생년월일**
	var custBirthdayBox = $('#CDateOrigin').val();
	var brdyDt = custBirthdayBox.replace(/\-/g,'');
	document.getElementById("CDate1").value = brdyDt;
	
	//**원본결혼기념일**
	var custMarryBox = $('#CMarryOrigin').val();
	var brdyDt = custMarryBox.replace(/\-/g,'');
	document.getElementById("CMarry").value = brdyDt;
	
	//**원본 중지일자**
	var stopDt1_BE = $('#stopDt').val();
	var stopDt1 = stopDt1_BE.replace(/\-/g,'');
	document.getElementById("stopDt").value = stopDt1;
	
	//**원본 해지일자**
	var cancelBox_BE = $('#cancelBox').val();
	var cancelBox = cancelBox_BE.replace(/\-/g,'');
	document.getElementById("cancelDt").value = cancelBox;
});


//고객정보전체 조회
function Search_but_TotalSerchs(){

	debugger;
	//재검색시 변경전후 내용 비교 함수.
	ReSearch();
	
	var ReSearchResult = $('#result').val();
	console.log(ReSearchResult);
	
	if(ReSearchResult == "true" || ReSearchResult == ""){//변경내용없이 넘어올때 "" 빈값으로 넘어온다, 변경된 내용이 있을때 "확인"누를 시 true반환
														//변경된 내용 "취소"누를 시 false 반환 
	var custInput = $('#custInput').val();				//고객번호
	var custNum = $('#custNum').val();
	console.log(custInput);
	//2글자 이상 입력하시오.
	if(custNum == '') {
		alert('고객조회 후 검색해주세요.');
		$('#custNum').focus();
		return false;
	}
	
	$.ajax({//고객정보전체 조회
		url: 'custTotal.me',
		data: {'custInput':custInput},
		type: 'post',
		dataType: 'json',
		success: function(data){
			console.log(data);
			console.log(data.custTotal.CUST_NM);
			//**원본고객번호
			$('#CNo').val(data.custTotal.CUST_NO);
			//고객번호
			$('#aftNo').val(data.custTotal.CUST_NO);
			//고객명
			$('#custNum').val(data.custTotal.CUST_NM);
			$('#custNameId2').val(data.custTotal.CUST_NM);
			console.log(data.custTotal.SEX_CD);
			//**원본 고객명**
			$('#CNm').val(data.custTotal.CUST_NM);
			
			//생년월일
			$('#custDateBox').val(data.custTotal.BRDY_DT);
			//생년월일 하이픈 제거
			var custBirthdayBox = $('#custDateBox').val();
			var brdyDt = custBirthdayBox.replace(/\-/g,'');
			document.getElementById("birth").value = brdyDt;
			
			//**원본생년월일**
			$('#CDate').val(data.custTotal.BRDY_DT);
			//**원본 생년월일 하이픈 제거**
			var custBirthdayBox = $('#CDate').val();
			var brdyDt = custBirthdayBox.replace(/\-/g,'');
			document.getElementById("CDate1").value = brdyDt;
			
			//결혼기념일
			$('#custMarryBox').val(data.custTotal.MRRG_DT);
			
			//통결혼기념일
			//결혼기념일 하이픈 제거
			var custMarryBox2 = $('#custMarryBox').val();
			var mrrgDt = custMarryBox2.replace(/\-/g,'');
			document.getElementById("MarryDay").value = mrrgDt;
			
			//**원본결혼기념일**
			$('#CMarryOrigin').val(data.custTotal.MRRG_DT);
			var custBirthdayBox = $('#CMarryOrigin').val();
			var brdyDt = custBirthdayBox.replace(/\-/g,'');
			document.getElementById("CMarry").value = brdyDt;
			
			//핸드폰번호
			$('#phone1').val(data.custTotal.MBL_NO1);
			$('#phone2').val(data.custTotal.MBL_NO2);
			$('#phone3').val(data.custTotal.MBL_NO3);
			
			//통핸드폰번호
			var phone1 = $('#phone1').val();	//핸드폰번호1
			var phone2 = $('#phone2').val();	//핸드폰번호2
			var phone3 = $('#phone3').val();	//핸드폰번호3
			var phoneFull = phone1+phone2+phone3;

			//통핸드폰번호
			document.getElementById("phoneNumble").value = phoneFull;
			
			//**원본핸드폰번호**
			var mb1 = $('#mb1').val(data.custTotal.MBL_NO1);
			var mb2 = $('#mb2').val(data.custTotal.MBL_NO2);
			var mb3 = $('#mb3').val(data.custTotal.MBL_NO3);
			//**원본통 핸드폰번호
			document.getElementById("mb_f").value = mb1+mb2+mb3
			
			//가입매장코드
			$('#saleCode').val(data.custTotal.JN_PRT_CD);
			//**원본가입매장코드**
			$('#Ccd').val(data.custTotal.JN_PRT_CD);
			//가입매장명
			$('#saleName').val(data.custTotal.PRT_NM);
			
			//**원본핸드폰**
			$('#mb_f').val(data.custTotal.MBL_NO);
			
			//이메일
			$('#custEmailId').val(data.custTotal.EMAIL1);
			//**원본이메일**
			$('#Cemail1').val(data.custTotal.EMAIL1);
			//**원본통이메일**
			$('#CSemail').val(data.custTotal.EMAIL);
			
			//이메일주소
			$('#custEmailIdDetails').val(data.custTotal.EMAIL2);
			//**원본이메일주소**
			$('#Cemail2').val(data.custTotal.EMAIL2);
			
			//이메일 @붙히기
			var custEmailId = $('#custEmailId').val();					//이메일아이디
			var custEmailIdDetails = $('#custEmailIdDetails').val();	//이메일주소
			
			//이메일값이 없을 경우 @만 들어갈 수 있기 때문에 이메일아이디와 이메일주소가 있을 시에만 넣어준다. 
			if(custEmailId != ''&& custEmailIdDetails != ''){
				var email = custEmailId+'@'+custEmailIdDetails;
				//이메일
				document.getElementById("emailFull").value = email;
			}
			
			
			//해지사유
			$('#causeBox').val(data.custTotal.CNCL_CNTS);
			//**원본해지사유**
			$('#Ccause').val(data.custTotal.CNCL_CNTS);
			//주소
			$('#firstAddress').val(data.custTotal.ADDR);
			//**원본주소**
			$('#Cadd').val(data.custTotal.ADDR);
			//상세주소
			$('#TwoAddress').val(data.custTotal.ADDR_DTL);
			//**원본상세주소**
			$('#CaddDt').val(data.custTotal.ADDR_DTL);
			//성별
			if(data.custTotal.SEX_CD == 'F'){
				console.log('f임')//성별 값에 따라 체크박스 체크 또는 해제
				$('#custSexIdM').prop('checked', false);
				$('#custSexId').prop('checked', true);
				//**원본성별**
				$('#CSexId').val(data.custTotal.SEX_CD);
			} else{
				console.log('m임')
				$('#custSexId').prop('checked', false);
				$('#custSexIdM').prop('checked', true);
				//**원본성별**
				$('#CSexId').val(data.custTotal.SEX_CD);
			}
			//생일
			if(data.custTotal.SCAL_YN == '0'){
				console.log('0임')//생일
				$('#custScalN').prop('checked', false);
				$('#custScalY').prop('checked', true);
				//**원본생일**
				$('#CScal').val(data.custTotal.SCAL_YN);
			} else{
				console.log('1임')
				$('#custScalY').prop('checked', false);
				$('#custScalN').prop('checked', true);
				//**원본생일**
				$('#CScal').val(data.custTotal.SCAL_YN);
			}
			//직업코드
			if(data.custTotal.POC_CD == '10'){
				console.log('10임')
				$('#10').prop('selected', true);
				//**원본 직업코드**
				$('#CPoc').val(data.custTotal.POC_CD);
			} else if(data.custTotal.POC_CD == '20'){
				console.log('20임')
				$('#20').prop('selected', true);
				//**원본 직업코드**
				$('#CPoc').val(data.custTotal.POC_CD);
			} else if(data.custTotal.POC_CD == '30'){
				console.log('30임')
				$('#30').prop('selected', true);
				//**원본 직업코드**
				$('#CPoc').val(data.custTotal.POC_CD);
			} else if(data.custTotal.POC_CD == '40'){
				console.log('40임')
				$('#40').prop('selected', true);
				//**원본 직업코드**
				$('#CPoc').val(data.custTotal.POC_CD);
			} else if(data.custTotal.POC_CD == '50'){
				console.log('50임')
				$('#50').prop('selected', true);
				//**원본 직업코드**
				$('#CPoc').val(data.custTotal.POC_CD);
			} else if(data.custTotal.POC_CD == '60'){
				console.log('60임')
				$('#60').prop('selected', true);
				//**원본 직업코드**
				$('#CPoc').val(data.custTotal.POC_CD);
			} else if(data.custTotal.POC_CD == '90'){
				console.log('90임')
				$('#90').prop('selected', true);
				//**원본 직업코드**
				$('#CPoc').val(data.custTotal.POC_CD);
			} else{
				$('#99').prop('selected', true);
				//**원본 직업코드**
				$('#CPoc').val(data.custTotal.POC_CD);
			}
			//우편물수령주소 자택/직장
			if(data.custTotal.PSMT_GRC_CD == 'H'){
				console.log('자택임')//성별 값에 따라 체크박스 체크 또는 해제
				$('#addressO').prop('checked', false);
				$('#addressH').prop('checked', true);
				//**원본 우편물수령주소 자택/직장**
				$('#CPsmt').val(data.custTotal.PSMT_GRC_CD);
			} else{
				console.log('직장임')
				$('#addressH').prop('checked', false);
				$('#addressO').prop('checked', true);
				//**원본 우편물수령주소 자택/직장**
				$('#CPsmt').val(data.custTotal.PSMT_GRC_CD);
			}
			//고객상태
			if(data.custTotal.CUST_SS_CD == '10'){
				console.log('정상임')//상태 값에 따라 체크박스 체크 또는 해제
				$('#custStateN').prop('checked', false);
				$('#outState').prop('checked', false);
				$('#custStateY').prop('checked', true);
				//**원본 고객상태**
				$('#CssCd').val(data.custTotal.CUST_SS_CD);
			} else if(data.custTotal.CUST_SS_CD == '80'){
				console.log('중지임')
				$('#custStateY').prop('checked', false);
				$('#outState').prop('checked', false);
				$('#custStateN').prop('checked', true);
				//**원본 고객상태**
				$('#CssCd').val(data.custTotal.CUST_SS_CD);
			} else{
				console.log('해지임')
				$('#custStateY').prop('checked', false);
				$('#custStateN').prop('checked', false);
				$('#outState').prop('checked', true);
				//**원본 고객상태**
				$('#CssCd').val(data.custTotal.CUST_SS_CD);
			}
			
			//최초가입일자
			$('#fstJsDt').val(data.custTotal.FST_JS_DT);
			//가입일자
			$('#custJoinBox').val(data.custTotal.JS_DT);
			console.log(data.custTotal.STP_DT);
			//중지일자
			$('#stopBox').val(data.custTotal.STP_DT);
			
			
			//**원본생년월일**
			$('#CDate').val(data.custTotal.BRDY_DT);
			//**원본 생년월일 하이픈 제거**
			var custBirthdayBox = $('#CDate').val();
			var brdyDt = custBirthdayBox.replace(/\-/g,'');
			document.getElementById("CDate1").value = brdyDt;
			
			//총구매금액
			$('#custNameId').val(data.custTotal.TOT_SAL_AMT);
			//당월 구매금액
			$('#buyId').val(data.custTotal.SAL_AMT);
			//최종구매일
			$('#buyDate').val(data.custTotal.SAL_DT);
			//총포인트
			$('#TotalePnt1').val(data.custTotal.TOT_PNT);
			//당월적립포인트
			$('#MonPnt').val(data.custTotal.PNT);
			//당월사용포인트
			$('#MonUsPnt').val(data.custTotal.USE_PNT);
			
			//이메일수신동의
			if(data.custTotal.EMAIL_RCV_YN == 'Y'){
				console.log('이메일동의임')//성별 값에 따라 체크박스 체크 또는 해제
				$('#emailStateId2').prop('checked', false);
				$('#emailStateId').prop('checked', true);
				//**원본 이메일수신동의**
				$('#Cemail').val(data.custTotal.EMAIL_RCV_YN);
			} else{
				console.log('이메일비동의임')
				$('#emailStateId').prop('checked', false);
				$('#emailStateId2').prop('checked', true);
				//**원본 이메일수신동의**
				$('#Cemail').val(data.custTotal.EMAIL_RCV_YN);
			}
			
			//SMS수신동의
			if(data.custTotal.SMS_RCV_YN == 'Y'){
				console.log('SMS동의임')//성별 값에 따라 체크박스 체크 또는 해제
				$('#SNSStateIdN').prop('checked', false);
				$('#SNSStateId').prop('checked', true);
				//**원본 SMS수신동의**
				$('#Csms').val(data.custTotal.SMS_RCV_YN);
			} else{
				console.log('SMS비동의임')
				$('#SNSStateId').prop('checked', false);
				$('#SNSStateIdN').prop('checked', true);
				//**원본 SMS수신동의**
				$('#Csms').val(data.custTotal.SMS_RCV_YN);
			}
			
			//DM수신동의
			if(data.custTotal.DM_RCV_YN == 'Y'){
				console.log('DM동의임')//성별 값에 따라 체크박스 체크 또는 해제
				$('#DMStateIdN').prop('checked', false);
				$('#DMStateId').prop('checked', true);
				//**원본 DM수신동의**
				$('#CDm').val(data.custTotal.DM_RCV_YN);
			} else{
				console.log('DM비동의임')
				$('#DMStateId').prop('checked', false);
				$('#DMStateIdN').prop('checked', true);
				//**원본 DM수신동의**
				$('#CDm').val(data.custTotal.DM_RCV_YN);
			}
			
		},
		error: function(data){
			console.log(data);
			alert('조회할 수 없습니다.');
		}
	});
	}
};

////////////////////////////////-고객정보전체 조회end-////////////////////////////////////////

/////////////////////////////////저장버튼 클릭시///////////////////////

function updateEvent(){
	
	debugger;
// 	ReSearch();
// 	changCheckV();

	//오늘날짜
	const offset = new Date().getTimezoneOffset() * 60000;
	var todaybe = new Date(Date.now() -offset).toISOString().substring(0, 10);
	//하이픈 제거
	var today = todaybe.replace(/\-/g,'');
	console.log(today);
	
	var CssCd = $('#CssCd').val();
	var checkValue = $('input[name="CUST_SS_CD"]:checked').val();
	console.log(CssCd);
	console.log(checkValue);
	
	var custNameId2 = $('#custNameId2').val();
	var phone1 = $('#phone1').val();
	var phone2 = $('#phone2').val();
	var phone3 = $('#phone3').val();
	var fullphone = phone1+phone2+phone3;
	console.log(fullphone);
	
	var mb_f = $('#mb_f').val();
	console.log(mb_f);
	
	if(custNameId2 == '' || custNameId2.length == 0){
		alert('고객명을 입력해주세요.')
		return false;
	}
	if(phone1 == ''){
		alert('휴대폰번호를 입력해주세요.')
		return false;
	} else if(phone2 == ''){
		alert('휴대폰번호를 입력해주세요.')
		return false;
	} else if(phone3 == ''){
		alert('휴대폰번호를 입력해주세요.')
		return false;
	} else if(phoneCheck2 && phoneCheck3){//ajax 핸드폰번호 중복확인요청
		console.log('1');
	} else if(mb_f != fullphone){
		alert('휴대폰번호 중복확인을 해주세요');
        return false;
	}
	
	//주소 1칸 입력시 2칸도 입력필수
	Address();
	
	//통핸드폰번호
	var phone1 = $('#phone1').val();	//핸드폰번호1
	var phone2 = $('#phone2').val();	//핸드폰번호2
	var phone3 = $('#phone3').val();	//핸드폰번호3
	var phoneFull = phone1+phone2+phone3;

	//통핸드폰번호
	document.getElementById("phoneNumble").value = phoneFull;
	
	//통이메일
	var custEmailId = $('#custEmailId').val();	//이메일
	var custEmailIdDetails = $('#custEmailIdDetails').val();	//이메일주소
	var emailFull = custEmailId+'@'+custEmailIdDetails;	
	
	document.getElementById("emailFull").value = emailFull;
// 	var changCheckVal = $('#changCheckVal').val();
// 	if(changCheckVal != false){
	
	//해지버튼 값 전달
	//->해지
	if(checkValue == 90){
		$('#custNameId2').val('해지고객');
		$('#phone1').val('000');
		$('#phone2').val('0000');
		$('#phone3').val('0000');
		$('#phoneNumble').val('00000000000');
		
		//해지일자 값 넣기
		$('#cancelBox').val(today);
	}
	//->중지
	if(checkValue == 80){
		//중지일자 값 넣기
		$('#stopBox').val(today);
		//히든으로 숨겨져있는 변경확인용 중지일자 값 넣기
		$('#stopDt2').val(today);
	}
	//정상
	if(checkValue == 10){
		$('#causeBox').val('');//해지사유
		$('#cancelBox').val('');//해지일자
		
		//정상으로 돌아올 시 가입날짜 변경
		$('#custJoinBox').val(today);
		//히든으로 숨겨져있는 변경확인용 가입날짜
		$('#jsDt2').val(today);
		
	}
	//해지->정상
	if(checkValue == 10 && CssCd == 90){
		$('#causeBox').val('');//해지사유
		$('#cancelBox').val('');//해지일자
	}
	
	//등록버튼 안에 등록버튼 누를 시
	if(confirm("고객정보를 수정하시겠습니까?")){
		debugger;
		//해지->정상
		if(checkValue == 10 && CssCd == 90){
			$('#causeBox').val('');//해지사유
			$('#cancelBox').val('');//해지일자
		}
			
		//히스토리
		debugger;
		//변경값(변경후 값 확인)
		var custNameId2 = $('#custNameId2').val();
		var custDateBox = $('#custDateBox').val();
		var custMarryBox = $('#custMarryBox').val();
		var custSex = $('input[name=SEX_CD]:checked').val();
		var custScal = $('input[name=SCAL_YN]:checked').val();
		var jobCode = $('#jobCode').val();
		var causeBox = $('#causeBox').val();
		var custState = $('input[name=CUST_SS_CD]:checked').val();
		var emailState = $('input[name=emailState]:checked').val();
		var SMSState = $('input[name=SNSState]:checked').val();
		var DMState = $('input[name=DMState]:checked').val();
		var firstAddress = $('#firstAddress').val();
		var TwoAddress = $('#TwoAddress').val();
		var custAddress = $('input[name=PSMT_GRC_CD]:checked').val();
		var cancelBox = $('#cancelBox').val();
		
		//핸드폰번호 변경
		var phone1 = $('#phone1').val();
		var phone2 = $('#phone2').val();
		var phone3 = $('#phone3').val();
				
		var saleCode = $('#saleCode').val();
		//이메일
		var custEmailId = $('#custEmailId').val();
		var custEmailIdDetails = $('#custEmailIdDetails').val();
				
		var custCh = $('#custChange').serializeArray();//변경전 내용
		var custUpdate = $('#custUpdateId').serializeArray();//변경 후 내용
		console.log(custCh);
		console.log(custUpdate);
		var c = -1;
		for(var i = 0; i < custUpdate.length; i++){//변경한 내용 name이 더 많아서
			var custUpdate_name = custUpdate[i].name;
			var custUpdate_value = custUpdate[i].value;
			for(var e = 0; e < custCh.length; e++){//변경전 내용
				var custCh_name = custCh[e].name;
				var custCh_value = custCh[e].value;
				
				if(custCh_name == custUpdate_name && custCh_value != custUpdate_value){
					var BemapObject = new Map();
					console.log("custCh_name:"+custCh_name);//DMState
					console.log("custCh_value:"+custCh_value);//N
							
					console.log("custUpdate_name:"+custUpdate_name);//DMState
					console.log("custUpdate_value:"+custUpdate_value);//Y
							
					c++;
					arr[c] = {
							'FST_USER_ID':custCh[0].value,
							'CUST_NO':custCh[1].value,
							'CHG_BF_CNT':custCh_value,
							'CHG_CD':custUpdate_name,
							'CHG_AFT_CNT':custUpdate_value,
							'CUST_NO':$('#aftNo').val(),
							'MBL_NO':$('#phoneNumble').val(),
							'BRDY_DT':$('#birth').val(),
							'MRRG_DT':$('#MarryDay').val(),
							'STP_DT':$('#stopDt2').val(),
							'CNCL_DT':$('#cancelDt2').val(),
							'CNCL_CNTS':$('#causeBox').val(),
							'LST_UPD_ID':$('#useridS').val(),
							'EMAIL':$('#emailFull').val(),
							'CUST_NM':$('#custNameId2').val(),
							'JS_DT':$('#jsDt2').val(),
							'SEX_CD':$('input[name="SEX_CD"]:checked').val(),
							'SCAL_YN':$('input[name="SCAL_YN"]:checked').val(),
							'POC_CD':$('#jobCode').val(),
							'JN_PRT_CD':$('#saleCode').val(),
							'PSMT_GRC_CD':$('input[name="PSMT_GRC_CD"]:checked').val(),
							'ADDR':$('#firstAddress').val(),
							'ADDR_DTL':$('#TwoAddress').val(),
							'CUST_SS_CD':$('input[name="CUST_SS_CD"]:checked').val(),
							'emailState':$('input[name="emailState"]:checked').val(),
							'SNSState':$('input[name="SNSState"]:checked').val(),
							'DMState':$('input[name="DMState"]:checked').val()
					};
				}
			}
		}
		console.log(arr);
				
		$.ajax({
			url : 'ChangeHistory.me',
			type : 'post',
			data : JSON.stringify(arr),
			dataType: 'json',
			contentType: "application/json",
			success: function(data){
				console.log(data);
				window.location.reload();
			},
			error: function(data) {
				console.log(data);
			}
		});
		
	}else{
		return false;
	}
};

//재검색시 변경전후 내용 비교
var arr = new Array();
var result = "";
function ReSearch(){
	//변경전후 내용 비교
	var custCh = $('#custChange').serializeArray();//변경전 내용
	var custUpdate = $('#custUpdateId').serializeArray();//변경 후 내용
	console.log(custCh);
	console.log(custUpdate);
	var c = -1;
	for(var i = 0; i < custUpdate.length; i++){//변경한 내용 name이 더 많아서
		var custUpdate_name = custUpdate[i].name;
		var custUpdate_value = custUpdate[i].value;
		for(var e = 0; e < custCh.length; e++){//변경전 내용
			var custCh_name = custCh[e].name;
			var custCh_value = custCh[e].value;
			
			if(custCh_name == custUpdate_name && custCh_value != custUpdate_value){
				var BemapObject = new Map();
				console.log("custCh_name:"+custCh_name);//DMState
				console.log("custCh_value:"+custCh_value);//N
				
				console.log("custUpdate_name:"+custUpdate_name);//DMState
				console.log("custUpdate_value:"+custUpdate_value);//Y
				
				c++;
				arr[c] = {
						'FST_USER_ID':custCh[0].value,
						'CUST_NO':custCh[1].value,
						'CHG_BF_CNT':custCh_value,
						'CHG_CD':custUpdate_name,
						'CHG_AFT_CNT':custUpdate_value
				};
			}
		}
	}
	debugger;
	console.log(arr);
	if(arr.length != 0 || arr != ''){
		var result = confirm("저장하지않은 내역이 존재합니다. 재검색 하시겠습니까?");
		document.getElementById('result').value = result;	
	}
};

//변경된 값이 없을 시 저장진행X
//변경전후 내용 비교
function changCheckV(){
var custCh = $('#custChange').serializeArray();//변경전 내용
var custUpdate = $('#custUpdateId').serializeArray();//변경 후 내용
console.log(custCh);
console.log(custUpdate);
	var c = -1;
	for(var i = 0; i < custUpdate.length; i++){//변경한 내용 name이 더 많아서
		var custUpdate_name = custUpdate[i].name;
		var custUpdate_value = custUpdate[i].value;
		for(var e = 0; e < custCh.length; e++){//변경전 내용
			var custCh_name = custCh[e].name;
			var custCh_value = custCh[e].value;
			
			if(custCh_name == custUpdate_name && custCh_value != custUpdate_value){
				var BemapObject = new Map();
				console.log("custCh_name:"+custCh_name);//변경전 이름
				console.log("custCh_value:"+custCh_value);//변경전 밸류
				
				console.log("custUpdate_name:"+custUpdate_name);//변경후 이름
				console.log("custUpdate_value:"+custUpdate_value);//변경후 밸류
				
				c++;
				arr[c] = {
						'FST_USER_ID':custCh[0].value,
						'CUST_NO':custCh[1].value,
						'CHG_BF_CNT':custCh_value,
						'CHG_CD':custUpdate_name,
						'CHG_AFT_CNT':custUpdate_value
				};
			}
		}
	}
	console.log(arr);
	if(arr.length == 0 || arr == ''){
		document.getElementById('changCheckVal').value = false;
		console.log(document.getElementById('changCheckVal').value);
	}
};