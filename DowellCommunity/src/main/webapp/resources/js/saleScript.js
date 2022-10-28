/**
 * 
 매장명/코드 검색 팝업창
 */
 
 
  console.log("매장명/코드 검색 팝업창 모듈자바스크립트");
//매장조건 입력란 지워지면 앞에 코드값도 지움
function saleEvent(event){                  
	if(event.keyCode == 8 || event.keyCode == 46) { //keyCode: 8(Backspace), keyCode: 46(Delete)       
	   if( $("#saleName").val() == "" ) {    //매장 입력창이 비워지면   
	      $("#saleCode").val("");   		 //앞에 매장코드가 입력되있는 창이 지워진다.
	   } 
	}
};

//매장 엔터 시 실행
var saleName = $("#saleName").val();
function enter(event){               
	if(event.keyCode == 13) { //keyCode: 13(Enter)
		Search_but_search();  //매장검색 함수
	}
};

//매장검색
function Search_but_search(){
	debugger;
	var saleCode = $('#saleCode').val();	//매장코드
	var saleName = $('#saleName').val();	//매장명
	var checkShop = $('#checkShop').val();	//팝업창 검색창
	
	//2글자 이상 입력하시오.
	if(saleName.trim() == '' || saleName.trim().length == 1) { //앞뒤공백을 뺀 값이 빈값이거나, 길이가 1일 때 2글자 이하이기때문에 막음.
		alert('2글자 이상 입력하시오.');
		$('#saleName').focus();
		return false;
	}
	console.log(saleCode);
	
	//2글자 이상 검색 시 실행
	$.ajax({
		url: 'SearchButSale.me',
		data: {"saleName":saleName},
		type: 'post',
		dataType: 'json', 
		success: function(data){
			console.log(data);
			
			if(data.length != 1) {//데이터의 길이가 1이 아닐 경우 => 팝업창 오픈
				console.log(data);
				console.log(saleName);
				
				salePopup(saleName);//팝업창 오픈 함수
				
			}else{//데이터가 1개만 존재할때 자동완성
				$('#saleName').val(''); // 매장명 비우기
				$('#saleCode').val(data[0].PRT_CD);
				$('#saleName').val(data[0].PRT_NM);
				console.log(data);
				console.log(data[0].PRT_CD);
				console.log(data[0].PRT_NM);
			}
		},
		error: function(data){
			console.log(data);
			alert('조회할 수 없습니다.');
		}
	});
}

//매장검색 팝업창 띄우기
var saleName = $('#saleName').val();	//매장명

function salePopup(saleName) {
	window.open("salePopup.me", "a", "width=800px, height=480px, left=400, top=210");
}


