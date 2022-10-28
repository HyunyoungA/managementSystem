/**
고객조회 팝업창
 * 
 */
 
console.log("고객조회 팝업창 스크립트");
 
 $(document).ready(
	$(opener).one('beforeunload', function() {             // 부모창의 새로고침/닫기/앞으로/뒤로
		window.close();                                    // 팝업을 닫는다
	})
);

var custInput = $('#custInput').val();	//고객번호 검색결과
var custNum = $('#custNum').val();	//고객번호
var CheckCustName = $('#CheckCustName').val();	//팝업창 검색창 -고객명
var CheckCustName = $('#CheckCustPhone').val();	//팝업창 검색창 -고객 핸드폰번호
// var custNum = $('#checkShop').val();	//페이지 검색어

//고객조회 팝업창 open 리스트 뿌리기
$(document).ready(function() {
	//부모창의 검색어 =>자식창 팝업창에 넣음
	document.getElementById('checkShop').value = opener.$('#custNum').val();
	console.log(document.getElementById('checkShop').value);
	var custNum = $('#checkShop').val();	//페이지 검색어
	$.ajax({
		url: 'custNumCheck.me',
		data: {"custNumble":custNum},
		type: 'post',
		dataType: 'json',
		success: function(custNumble){
			//테이블에 데이터 전달
			console.log(custNumble);
			let html = "";
			if(custNumble.length > 0) { 
				$.each(custNumble, function(index, item){
					html += "<tr style='width: 100%;' onclick='checkClick(this)'>";  
					html += "<td class='Check_Box_point'>"+(item.AVB_PNT)+"<input type='checkbox' name='custCheck' value="+(item.CUST_NO)+" onclick='custOnlyOne(this)'>"+"</td>";
					html += "<td class='CustNum'>"+item.CUST_NO+"</td>";
					html += "<td class='CustDetail'>"+item.CUST_NM+"</td>";
					html += "<td class='CustPhone'>"+item.MBL_NO+"</td>";
					html += "<td class='memberState'>"+item.CUST_SS_CD+"</td>";
					html += "</tr>";
				});
			} else {//데이터의 길이가 0개일 경우
					html += "<tr>";
					html += "<td colspan='5' style='text-align: center;'>존재하지않는 고객입니다.</td>";
					html += "</tr>";
			}
			//each로 생성한 데이터를 담은 표를 tbody에 html에 넣는다.
			$("tbody#custPopup").html(html);
	    
			//부모팝업창->자식팝업창 input으로 포커스이동
			document.getElementById("CheckCustName").focus();
		},
		error: function(data){
			console.log(data);
			alert('조회할 수 없습니다.');
		}
	})
})


//고객조회 팝업창 - 검색
function checkCust(){
	var custName = $('#CheckCustName').val(); //고객이름검색값
	var custPhone = $('#CheckCustPhone').val(); //휴대폰검색값
	var reCustPhone = custPhone.replace(/\-/g,"");
	console.log(custName);
	console.log(custPhone);
	console.log(reCustPhone);
	//휴대폰 자릿수 초과
	if(custPhone.trim() != '' && custPhone.trim().length < 12){
		alert('휴대폰 번호 전체를 입력하시오.');
		$('#CheckCustPhone').focus();
		return false;
	}else if(custPhone.trim() != '' && custPhone.trim().length > 13){
		alert('휴대폰 번호를 확인해주세요.');
		$('#CheckCustPhone').focus();
		return false;
	}
	//고객명 2글자 이상 입력하시오.
	if(custName.trim() != '' && custName.trim().length == 1) {
		alert('2글자 이상 입력하시오.');
		$('#CheckCustName').focus();
		return false;
	}
	
	$.ajax({//고객조회 팝업창 open
		url: 'checkCust.me',
		data: {'checkCustName':custName
			  ,'checkCustPhone':reCustPhone},
		type: 'post',
		dataType: 'json',
		success: function(data){
			console.log(data);
			
			let html = "";
			if(data.length > 0) { 
				$.each(data, function(index, item){
					html += "<tr style='width: 100%;' onclick='checkClick(this)'>";
					if(item.custNo.length = 1){//결과값이 하나인 경우 
						html += "<td class='Check_Box_point'>"+(item.AVB_PNT)+"<input type='checkbox' name='custCheck' value="+ item.custNo +" onclick='checkOnlyOne(this)'>"+"</td>";//고객번호
					}else{//결과값이 하나가 아닌 경우
						html += "<td class='Check_Box_point'>"+(item.AVB_PNT)+"<input type='checkbox' name='custCheck' value="+ (item.custNo +1) +" onclick='checkOnlyOne(this)'>"+"</td>";//고객번호
					}
					html += "<td class='CustNum'>"+item.custNo+"</td>";//고객번호
					html += "<td class='CustDetail'>"+item.custNM+"</td>";//고객명
					html += "<td class='CustPhone'>"+item.mblNo+"</td>";//핸드폰번호
					html += "<td class='memberState'>"+item.custSsCd+"</td>";//고객상태
					html += "</tr>";
				});
			} else {//데이터의 길이가 0개일 경우
					html += "<tr>";
					html += "<td colspan='5'>존재하지않는 고객입니다.</td>";
					html += "</tr>";
			}
			//each로 생성한 데이터를 담은 표를 tbody에 html에 넣는다.
			$("tbody#custPopup").html(html);
			
			//부모팝업창->자식팝업창 input으로 포커스이동
			document.getElementById("CheckCustName").focus();
		},
		error: function(data){
		console.log(data);
		alert('조회할 수 없습니다.');
		}
	});
	
};


//하이픈 자동완성
function autoHypen(obj) {
 var number = obj.value.replace(/[^0-9]/g, "");
 var phone = "";
 
if(number.length < 4) {
   return number;
} else if(number.length < 7) {//000-0
   phone += number.substr(0, 3);
   phone += "-";
   phone += number.substr(3);
} else if(number.length < 11) {//000-000-0
   phone += number.substr(0, 3);
   phone += "-";
   phone += number.substr(3, 3);
   phone += "-";
   phone += number.substr(6);
} else {//000-0000-0
   phone += number.substr(0, 3);
   phone += "-";
   phone += number.substr(3, 4);
   phone += "-";
   phone += number.substr(7);
}
obj.value = phone;//phone(하이픈생성을 담은 번호)를 인풋창의 밸류에 담아준다.
};

//고객조회 팝업창 - 체크박스 1개만 체크가능
function custOnlyOne(element) {
	const checkboxes = document.getElementsByName("custCheck");
	  
	checkboxes.forEach((cb) => {//forEach 반복을 통해 모두 체크false로 체크해지.
		cb.checked = false;
	})
	element.checked = true;//체크한 체크드만 true로 체크설정.
}

//고객조회 팝업창 안에 표 클릭시 이벤트
function checkClick(e){
	//행 클릭 시 체크박스 체크
  var chkbox = $(e).find('td:first-child :checkbox');
	$('input[type="checkbox"][name="custCheck"]').prop('checked',false);
  chkbox.prop('checked', !chkbox.prop('checked'));
  
  //행 더블클릭 시 팝업창 닫히고 데이터 전달
  $(document).ready(function() {
	    $("#custPopup tr").dblclick(function() {

	    	var custNo = $("input[name='custCheck']:checked").val();
	    	var custNm = $("input[name='custCheck']:checked").parent().parent().children().eq(2).text();
	    	var point = $("input[name='custCheck']:checked").parent().text();
	    	const repoint = point.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //,천단위 쉼표추가
	    	console.log(custNo);
	    	console.log(custNm);
	    	console.log(point);
	    	$("#custNum", opener.document).val(custNm);                
			$("#custInput", opener.document).val(custNo);             
			$("#pointPossible", opener.document).val(repoint);
			window.close();
	    	
	    });
	});
};

//고객조회 팝업창 - 적용버튼 클릭시 실행
function custPopUpsumit(){
	//체크박스의 값 전달
	var items = $('input:checkbox[type=checkbox]:checked').map(function () {
	    return this.value;
	}).get();
	console.log(items[0]);
	var custSumit = items[0];
	
	
	//체크박스 선택 안할 시 알림창
	var sumit = $("input:checkbox[name='custCheck']").is(":checked");
	if(!sumit) {
		alert("조회할 회원을 선택해주세요.");
		return false;
	}
	
	var custNo = $("input[name='custCheck']:checked").val();
	var custNm = $("input[name='custCheck']:checked").parent().parent().children().eq(2).text();
	var point = $("input[name='custCheck']:checked").parent().text();
	const repoint = point.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //,천단위 쉼표추가
	console.log(custNo);
	console.log(custNm);
	console.log(repoint);
	$("#custInput", opener.document).val(custNo);
	$("#custNum", opener.document).val(custNm);
	$("#pointPossible", opener.document).val(repoint);
	
	window.close();
};