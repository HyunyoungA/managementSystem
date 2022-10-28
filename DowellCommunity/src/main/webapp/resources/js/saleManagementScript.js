/**
고객판매관리 페이지
 * 
 */

console.log("고객판매관리 페이지 스크립트");

//날짜세팅
window.onload = function() {
	//오늘날짜
	//한국시간을 맞추기 위한 -32400000
	const offset = new Date().getTimezoneOffset() * 60000;
	//현재 날짜 시간 - 9시간(UTC시간을 기준이 우리나라보다 9시간 많음.)
	const today = new Date(Date.now() -offset);
	
	//7일전
	const proDate = new Date();
	const proDate_sevenDays = proDate.setDate(proDate.getDate() -7);
	
	const maxDay = new Date(Date.now() -offset).toISOString().substring(0, 10);
	document.getElementById('previousDate').value =  new Date(proDate_sevenDays -offset).toISOString().substring(0, 10);
	document.getElementById('currentDate').value = new Date(Date.now() -offset).toISOString().substring(0, 10);
}

$(document).ready(
	$(opener).one('beforeunload', function() {             // 부모창의 새로고침/닫기/앞으로/뒤로
	    window.close();                                    // 팝업을 닫는다
	})
);

///////////////////////////////-고객판매수금등록 팝업창-///////////////////////////////////

//고객판매수금등록 띄우기
function CollectBill() {
	Collect_Bill=window.open("CollectBill.me", "s2", "width=840px, height=750px, left=400, top=50");
};

///////////////////////////////-고객판매수금등록 팝업창end-///////////////////////////////////

////////////////////////////////-전체 조회-////////////////////////////////////////
//전체 조회
function sale_Search_Total(){
	var saleCode = $('#saleCode').val();							//매장
	var custInput = $('#custInput').val();							//고객번호
	var preDateBe = document.getElementById('previousDate').value;	//날짜검색
	var curDateBe = document.getElementById('currentDate').value;	//날짜검색
	
	//날짜 하이픈 제거
	var preDate = preDateBe.replace(/\-/g,'');
	var curDate = curDateBe.replace(/\-/g,'');
	
	console.log(saleCode);
	console.log(custInput);
	console.log(preDate);
	console.log(curDate);
	
	//시작날짜가 이후날짜보다 클 수 없습니다.
	if(preDate > curDate){
		alert("시작날짜가 이후날짜보다 클 수 없습니다.");
		$('#previousDate').focus();
		return false;
	}
	
	var userDtCd = $('#userDtCd').val();//본사&매장 구분코드
	
	//매장, 판매일자 필수입력** => 매장은 세션으로 readonly이지만, 판매일자는 검색가능하기 때문에 값이 비어있는지 체크해준다.
	//판매일자 비어있을 시, 필수입력
	if(preDate == ''){
		alert("판매일자를 입력해주세요.");
		document.getElementById("previousDate").focus();
		return false;
	}else if(curDate == ''){
		alert("판매일자를 입력해주세요.");
		$("#currentDate").focus();
		return false;
	}
	
	$.ajax({//전체 조건 조회
		url: 'saleManageTotal.me',
		data: {'saleCode':saleCode
			  ,'custCode':custInput
			  ,'preDate':preDate
			  ,'curDate':curDate},
		type: 'post',
		dataType: 'json',
		success: function(data){
			console.log(data);
			let html = "";
			let Foothtml = "";
			if(data.length > 1) {//데이터가 1보다 크면(하단 총합때문에 무조건 길이 1이 생성됨) 표를 생성하면서 데이터를 담아준다.
				//매장명&매장코드
				document.getElementById('saleCodeCon').value = $('#saleCode').val();
				document.getElementById('saleNameCon').value = $('#saleName').val();
				//판매일자
				document.getElementById('curDate').value = $('#currentDate').val();
				document.getElementById('preDate').value = $('#previousDate').val();
				
				$.each(data, function(index, item){//each반복문을 통해 표 생성하며 데이터를 넣어준다.
					html += "<tr style='width: 100%;'>";
					//하단에 총 합계가 들어가는 공간
					if(item.custNo == '총합'){
						Foothtml += "<tr style='width: 100%;'>";

						Foothtml += "<td class='sumTitle' style='coloe:white; text-align:center;'>"+'합계'+"</td>";//빈공간: 한글 합계가 들어가는 공간
						Foothtml += "<td class='countSum'>"+item.salQty+"</td>";//판매수량합계
						Foothtml += "<td class='moneySum'>"+item.salAmt+"</td>";//판매금액합계
						Foothtml += "<td class='cashSum'>"+item.cash+"</td>";//현금합계
						Foothtml += "<td class='cardSum'>"+item.card+"</td>";//카드합계
						Foothtml += "<td class='pointSum'>"+item.pnt+"</td>";//포인트합계
						Foothtml += "<td class='blank'></td>";//빈공간
						
						Foothtml += "</tr>";
					}

					//총합계가 아닌경우 : tbody부분에 들어갈 내용.
					if(item.custNo != '총합'){
						
						//판매구분코드가 반품인 경우 => 빨간 컬러
						if(item.salRtn == 'RTN'){
							
							html += "<td class='saleDateCon'>"+item.salDt+"</td>";//판매일자
							html += "<td class='CustNumCon'>"+item.custNo+"</td>";//고객번호
							html += "<td class='CustNameCon'>"+item.custNm+"</td>";//고객명
							html += "<td class='saleNumCon'>"+"<input style='width:20px; border:none;' value="+item.salNo+" readonly>"
							+"<button class='saleManageDetail' value="+ item.salRtn +" onclick='saleManageTotal(this)'>상세</button>"+"</td>";//판매번호
							html += "<td class='countCon' style='color: red'>"+item.salQty+"</td>";//판매수량
							html += "<td class='moneyCon' style='color: red'>"+item.salAmt+"</td>";//판매금액
							html += "<td class='cashCon'>"+item.cash+"</td>";//현금결제금액
							html += "<td class='cardCon'>"+item.card+"</td>";//카드결제금액
							html += "<td class='pointTitleCon'>"+item.pnt+"</td>";//포인트사용금액
							html += "<td class='savePeopleCon'>"+item.userNm+"</td>";//등록자
							
							html += "<td class='saveTimeCon'>"+"<input style='width:80px; border:none;'value="+item.fstRegDt+" readonly></td>";//최초등록일자
							html += "<td class='saveId' id=''>"+item.fstUserId+"</td>";//등록아이디
							html += "<td class='saveCode' id=''>"+item.prtCd+"</td>";//구매매장코드
							html += "<td class='saveCode' id=''>"+item.prtNm+"</td>";//구매매장명
							
							html += "</tr>";
							
						}else{
							//판매구분코드가 판매인 경우
							html += "<td class='saleDateCon'>"+item.salDt+"</td>";//판매일자
							html += "<td class='CustNumCon'>"+item.custNo+"</td>";//고객번호
							html += "<td class='CustNameCon'>"+item.custNm+"</td>";//고객명
							html += "<td class='saleNumCon'>"+"<input style='width:20px; border:none;' value="+item.salNo+" readonly>"
							+"<button class='saleManageDetail' value="+ item.salRtn +" onclick='saleManageTotal(this)'>상세</button>"+"</td>";//판매번호
							html += "<td class='countCon'>"+item.salQty+"</td>";//판매수량
							html += "<td class='moneyCon'>"+item.salAmt+"</td>";//판매금액
							html += "<td class='cashCon'>"+item.cash+"</td>";//현금결제금액
							html += "<td class='cardCon'>"+item.card+"</td>";//카드결제금액
							html += "<td class='pointTitleCon'>"+item.pnt+"</td>";//포인트사용금액
							html += "<td class='savePeopleCon'>"+item.userNm+"</td>";//등록자
							html += "<td class='saveTimeCon'>"+"<input style='width:80px; border:none;' value="+item.fstRegDt+" readonly></td>";//최초등록일자
							html += "<td class='saveId'>"+item.fstUserId+"</td>";//등록아이디
							html += "<td class='saveCode'>"+item.prtCd+"</td>";//구매매장코드
							html += "<td class='saveCode'>"+item.prtNm+"</td>";//구매매장명
							
							html += "</tr>";
						}
					}
				});
			} else {//판매 내역이 없을 시에 "판매 내역이 없습니다."라고 메세지를 보여준다.
					html += "<tr>";
					html += "<td colspan='11' style='text-align: center; height: 25px;'>판매 내역이 없습니다.</td>";
					html += "</tr>";
			}
			$("#totalTb").html(html);	  //판매수량 판매일자등 내용이 담긴 것들은 tbody에 넣어준다.
			$("#tfootSum").html(Foothtml);//합계를 담은 데이터는 tfoot 하단에 넣어준다.
			
			
		},
		error: function(data){
		console.log(data);
		alert('조회할 수 없습니다.');
		}
	});
	
};

///////////////////////////////-판매 상세 조회 팝업창-///////////////////////////////////
//고객판매관리 상세보기-팝업창
function saleManageTotal(e){
	debugger;
	//클릭이벤트가 발생한 행에 대한 데이터들을 인풋히든창에 담는다. =>input type='hidden'에 값 담기
	$('#saleDateCon').val($(e).parent().parent().children().eq(0).text());//판매일자
	$('#CustNumCon').val($(e).parent().parent().children().eq(1).text());//고객번호
	$('#CustNameCon').val($(e).parent().parent().children().eq(2).text());//고객명
	$('#saleNumCon').val($(e).parent().parent().children().children().eq(0).val());//판매번호
	$('#salRtn').val($(e).val());//반품&판매
	$('#count').val($(e).parent().parent().children().eq(4).text());//판매수량
	$('#money').val($(e).parent().parent().children().eq(5).text());//판매금액
	$('#cash').val($(e).parent().parent().children().eq(6).text());//현금
	$('#card').val($(e).parent().parent().children().eq(7).text());//카드
	$('#point').val($(e).parent().parent().children().eq(8).text());//포인트
	
	$('#fstUserId').val($(e).parent().parent().children().eq(11).text());//등록아이디
	$('#prtCd').val($(e).parent().parent().children().eq(12).text());//구매매장코드
	$('#prtNm').val($(e).parent().parent().children().eq(13).text());//구매매장명
	
	console.log($('#saleDateCon').val());
	console.log($('#CustNumCon').val());
	console.log($('#CustNameCon').val());
	console.log($('#saleNumCon').val());
	console.log($('#count').val());
	console.log($('#money').val());
	console.log($('#cash').val());
	console.log($('#card').val());
	console.log($('#point').val());
	console.log($('#salRtn').val());
	console.log($('#fstUserId').val());
	console.log($('#prtCd').val());
	console.log($('#prtNm').val());
	
	//판매상세조회 팝업창 띄우는 함수.
	Detail_sale();
};

//판매상세조회팝업창 띄우기
function Detail_sale() {
	window.open("DetailSale.me", "d", "width=830px, height=530px, left=400, top=100");
};

//고객상세보기-페이지이동
function ChangeDt(e){
	//상세 버튼 - 클릭한 버튼의 값 가져오기
	var changeDt = $(e).val();
	console.log(changeDt);
	location.href = 'changeDt.me?changeDt=' + changeDt + "&page";	
};