/**
 * 
 
 고객명/코드 검색 팝업창
 */
 
   console.log("고객명/코드 검색 팝업창 모듈자바스크립트");
//고객 엔터   
function custEnter(event){
       
	if(event.keyCode == 13) {
		debugger;                              
		Search_but_num();
	}
};

//고객조건 입력란 지워지면 앞에 코드값도 지움   
function custEvent(event){             
   if(event.keyCode == 8 || event.keyCode == 46) {        
      if( $("#custNum").val() == "" ) {    
         $("#custInput").val("");    
      } 
   }
};

//고객번호
function Search_but_num(){
	var custInput = $('#custInput').val();	//고객번호 검색결과
	var custNum = $('#custNum').val();	//고객번호
	var CheckCustName = $('#CheckCustName').val();	//팝업창 검색창 -고객명
	var CheckCustName = $('#CheckCustPhone').val();	//팝업창 검색창 -고객 핸드폰번호
	
	//2글자 이상 입력하시오.
	if(custNum.trim() == '' || custNum.trim().length == 1) {
		alert('2글자 이상 입력하시오.');
		$('#custNum').focus();
		return false;
	}

	//2글자 이상 검색 시 실행
	$.ajax({
		url: 'custNum.me',
		data: {"custNum":custNum},
		type: 'post',
		dataType: 'json', 
		success: function(data){
			console.log(data);
			
			if(data.length != 1) {
				alert("결과값이 여러 개 입니다.");
				custPopup(custInput);//팝업창 오픈
			}else if(data.length == 0){
				alert("결과값이 없습니다.");
				custPopup(custInput);//팝업창 오픈
			
			}else{					//결과값이 1개가 아니기 때문에 팝업창을 띄운다
				console.log(data);
				$('#custNum').val('');   // 매장명 비우기
	            $('#custNum').text('0'); // 글자 카운트 초기화
				$('#custInput').val(data[0].CUST_NO);//결과값이 1개이기 때문에 자동완성으로 값이 들어간다.
				$('#custNum').val(data[0].CUST_NM);
			
			}
		},
		error: function(data){
			console.log(data);
			alert('조회할 수 없습니다.');
		}
		
	});
	
};

//고객검색팝업창 띄우기
var custNum = $('#custNum').val();	//매장명
function custPopup(custNum) {
	window.open("custSearchPopup.me", "c", "width=800px, height=480px, left=400, top=210");
};
 