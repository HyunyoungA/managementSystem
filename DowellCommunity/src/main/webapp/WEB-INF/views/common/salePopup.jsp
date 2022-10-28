<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>매장검색</title>
 <!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
<link href="resources/CSS/admin.css" rel="stylesheet">
<style type="text/css">
#shopDetailId {
    width: 212px;
}
#shopNumId {
    width: 212px;
}
</style>
</head>
<body>
<!-- 매장조회 팝업창 -->
	<div id="light_shop" class="white_content_shop">
		<h3>매장조회</h3>
		<div class="CustCheck_Wrap_shop">
			<span>매장</span>
			<input class="CustCheck_Info" id="checkShop" placeholder="매장코드 또는 매장명 검색" style="margin-right: 26px;">
			<button id="Search_but" onclick=seachPop();>
				<img class="total_search" src="resources/cust_in/search.png">
			</button>
		</div>
				
		<!-- 매장조회 내용 -->
		<table class="Cust_popup_table" id="sTb">
			<thead>
				<tr>
					<th class="Check_Box">선택</th>
					<th class="shopNum">매장코드</th>
					<th class="shopDetail">매장명</th>
					<th class="shopState">매장상태</th>
				</tr>
			</thead>
			<tbody id="searchPopup">
			</tbody>
		</table>
		<!-- 매장조회 내용 end-->
		<button class="popupBut" onclick="window.close();">
		닫기
		</button>
		<button type="submit" class="popupBut" id="popUpsumitBtn" onclick="popUpsumit();">
		적용
		</button>
	</div>
<!-- 매장조회 팝업창end -->
</body>
<script type="text/javascript">

$(document).ready(
	$(opener).one('beforeunload', function() {             // 부모창의 새로고침/닫기/앞으로/뒤로
		window.close();                                    // 팝업을 닫는다
	})
);

var saleCode = $('#saleCode').val();	//매장코드
var saleName = $('#saleName').val();	//매장명
var checkShop = $('#checkShop').val();	//팝업창 검색창
	
//매장조회 팝업창 open 리스트 뿌리기
$(document).ready(function() {
	//부모창의 검색어(#saleName) =>자식창 팝업창에 넣음(checkShop)
	document.getElementById('checkShop').value = opener.$('#saleName').val();

	var saleName = $('#checkShop').val();	//팝업창 검색어
	
	$.ajax({
		url: 'SearchButSale.me',
		data: {"saleName":saleName},
		type: 'post',
		dataType: 'json',
		success: function(searchPopup){
			console.log(searchPopup);
			
			//테이블에 데이터 전달
			let html = "";
			if(searchPopup.length > 0) { //데이터가 0개 이상 존재하면 each로 표를 생성하면서 데이터를 뿌려준다.
				$.each(searchPopup, function(index, item){
					html += "<tr style='width: 100%;'>";  
					html += "<td class='Check_Box'>"+"<input class='searchPopupInput' id='shopCheck' type='checkbox' name='shopCheck' value="+(item.PRT_CD)+" onclick='checkOnlyOne(this)'>"+"</td>";
					html += "<td class='shopNum' id='shopNumId'>"+item.PRT_CD+"</td>";
					html += "<td class='shopDetail' id='shopDetailId'>"+item.PRT_NM+"</td>";
					html += "<td class='shopState' id='shopState'>"+item.PRT_SS_CD+"</td>";
					html += "</tr>";
				});
			} else {//데이터가 존재하지않을 시
				html += "<tr>";
				html += "<td colspan='4'>존재하지않는 매장입니다.</td>";
				html += "</tr>";
			}
			//each로 생성한 데이터를 담은 표를 tbody에 html에 넣는다.
			$("tbody#searchPopup").html(html);
					
			//부모팝업창->자식팝업창 input으로 포커스이동
			document.getElementById("checkShop").focus();
		},
		error: function(data){
			console.log(data);
			alert('조회할 수 없습니다.');
		}
	})
});

//엔터키 검색
$("#checkShop").keydown(function enter(event){               
	if(event.keyCode == 13) {	//keyCode: 13(enter)
		seachPop();//매장검색 함수
	}
});

//매장조회 팝업창 - 검색
function seachPop(){
	var checkShop = $('#checkShop').val(); //검색값
	console.log(checkShop);
	
	//2글자 이상 입력하시오.
	if(checkShop.trim() == '' || checkShop.trim().length == 1) {
		alert('2글자 이상 입력하시오.');
		$('#checkShop').focus();
		return false;
	}
	
	//매장검색
	$.ajax({
		url: 'SearchButSale.me',
		data: {"saleName":checkShop},
		type: 'post',
		dataType: 'json',
		success: function(data){
			console.log(data);
			
			//테이블에 데이터 전달
			let html = "";
			if(data.length > 0) {//데이터의 길이가 0개 이상일 경우
				$.each(data, function(index, item){//데이터를 item에 담아서 each로 반복실행
					html += "<tr style='width: 100%'>";
					if(item.PRT_CD.length == 1){//결과값이 하나인 경우 
						html += "<td class='Check_Box'>"+"<input class='searchPopupInput' type='checkbox' name='shopCheck' value="+ item.PRT_CD +" onclick='checkOnlyOne(this)'>"+"</td>";
					}else{//결과값이 하나가 아닌 경우
						html += "<td class='Check_Box'>"+"<input class='searchPopupInput' type='checkbox' name='shopCheck' value="+ (item.PRT_CD +1) +" onclick='checkOnlyOne(this)'>"+"</td>";
					}
					html += "<td class='shopNum' id='shopNumId' name='shopName'>"+item.PRT_CD+"</td>";
					html += "<td class='shopDetail' id='shopDetailId' name='shopName'>"+item.PRT_NM+"</td>";
					html += "<td class='shopState' id='shopState' name='shopName'>"+item.PRT_SS_CD+"</td>";
					html += "</tr>";
				});
			} else {//데이터의 길이가 0개일 경우
					html += "<tr>";
					html += "<td colspan='4'>존재하지않는 매장입니다.</td>";
					html += "</tr>";
			}
			//each로 생성한 데이터를 담은 표를 tbody에 html에 넣는다.
			$("tbody#searchPopup").html(html);
			
			//부모팝업창->자식팝업창 input으로 포커스이동
			document.getElementById("checkShop").focus();
		},
		error: function(data){
		console.log(data);
		alert('조회할 수 없습니다.');
		}
	});
};

//매장조회 팝업창 - 체크박스 1개만 체크가능
function checkOnlyOne(element) {
	const checkboxes = document.getElementsByName("shopCheck");
	  
	checkboxes.forEach((cb) => {//foreach를 통해 체크되지않은것들은 false로 설정.
		cb.checked = false;
	})
	element.checked = true;//체크된 체크박스는 true로 체크설정
}

//매장조회 팝업창 안에 표 클릭시 이벤트
$("#sTb").on('click', 'tr', function(e){
	//행 클릭 시 체크박스 체크
	var chkbox = $(this).find('td:first-child :checkbox');	//클릭이벤트가 일어난 행의 체크박스선택
	$('input[type="checkbox"][name="shopCheck"]').prop('checked',false);//다른 체크박스는 체크해지.
	chkbox.prop('checked', !chkbox.prop('checked'));//클릭이벤트가 일어난 행의 체크박스선택, 다른체크박스는 체크해지

	//행 더블클릭 시 팝업창 닫히고 데이터 전달
	$("#searchPopup tr").dblclick(function() {
		var PRT_CD = $("input[name='shopCheck']:checked").val();//더블클릭이 일어난 행에 체크박스 체크.(체크박스에 매장코드를 담아놓았음.)
		var PRT_NM = $("input[name='shopCheck']:checked").parent().parent().children().eq(2).text();//체크한 행의 매장명
		console.log(PRT_CD);
		console.log(PRT_NM);
		$("#saleName", opener.document).val(PRT_NM);//부모창에 데이터 전달(매장명)           
		$("#saleCode", opener.document).val(PRT_CD);//부모창에 데이터 전달(매장코드)
		window.close();//팝업창을 닫아준다.
	});
});


//매장조회 팝업창 - 적용버튼 클릭시 실행
function popUpsumit(){
	//체크박스의 값 전달
	var items = $('input:checkbox[type=checkbox]:checked').map(function () {
	    return this.value;//체크한 자신의 값을 담음.
	}).get();
	var popUpsumit = items[0];//체크한 0번째 값
	
	//체크박스 선택 안할 시 알림창
	var sumit = $("input:checkbox[name='shopCheck']").is(":checked");
	if(!sumit) {
		alert("조회할 회원을 선택해주세요.");
		return false;
	}
	
	var PRT_CD = $("input[name='shopCheck']:checked").val();//체크박스 체크값.(체크박스에 매장코드를 담아놓았음.)
	var PRT_NM = $("input[name='shopCheck']:checked").parent().parent().children().eq(2).text();//체크한 행의 매장명
	console.log(PRT_CD);
	console.log(PRT_NM);
	$("#saleName", opener.document).val(PRT_NM);//부모창에 데이터 전달(매장명)                     
	$("#saleCode", opener.document).val(PRT_CD);//부모창에 데이터 전달(매장코드)

	window.close();//팝업창을 닫아준다.

};
</script>
</html>