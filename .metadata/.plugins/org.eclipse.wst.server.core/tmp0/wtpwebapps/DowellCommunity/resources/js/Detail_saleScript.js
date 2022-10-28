/**
반품 팝업창
 * 
 */

console.log("반품 팝업창 스크립트");
 
//고객조회 팝업창 open 리스트 뿌리기
$(document).ready(function() {
	//판매상세조회 정보 전달
	//부모창의 value =>자식창 팝업창에 넣음(상단에 데이터)
	//상세버튼 클릭시 담아뒀던 인풋히든의 값들을 가져온다.
	document.getElementById('loginNm').value = opener.$('#loginNm').val();
	//매장명
	document.getElementById('Cust_Sale_Nm').value = opener.$('#prtNm').val();
	//매장코드
	document.getElementById('Cust_Sale_No').value = opener.$('#prtCd').val();
	//등록아이디
	document.getElementById('Cust_fst_User_Id').value = opener.$('#fstUserId').val();
	//고객번호
	document.getElementById('Cust_Num').value = opener.$('#CustNumCon').val();
	//고객명
	document.getElementById('Cust_Nm').value = opener.$('#CustNameCon').val();
	//판매수량
	document.getElementById('Cust_Count').value = opener.$('#count').val();
	//판매금액
	document.getElementById('Cust_Sum').value = opener.$('#money').val();
	//현금
	document.getElementById('Cust_Cash').value = opener.$('#cash').val();
	//카드
	document.getElementById('Cust_Card').value = opener.$('#card').val();
	//포인트
	document.getElementById('Cust_Pin').value = opener.$('#point').val();
	//반품&판매
	document.getElementById('salRtn_Btn').value = opener.$('#salRtn').val();
	document.getElementById('salRtn_val').value = opener.$('#salRtn').val();
	//판매일자
	document.getElementById('curDate').value = opener.$('#saleDateCon').val();
	//판매번호
	document.getElementById('saleNumCon').value = opener.$('#saleNumCon').val();
	//세션의 매장, 본사 구분코드 => 반품버튼 막기
	document.getElementById('login_userDtCd').value = opener.$('#userDtCd').val();

	var dtcd = document.getElementById('login_userDtCd').value;
	console.log(dtcd);
	
	//본사일 경우 버튼 비활성화(로그인 세션의 데이터)
	if(dtcd == 1){
		document.getElementById('salRtn_Btn').style.display = 'none';
	}
	
	//판매내역 조회
	var Cust_Sale_No = $('#Cust_Sale_No').val();	//매장코드
	var Cust_Num = $('#Cust_Num').val();			//고객번호
	var curDateBe = $('#curDate').val();			//판매일자
	var salRtn = $('#salRtn_val').val();			//반품&판매
	var saleNumCon = $('#saleNumCon').val();		//판매번호
	
	//날짜 하이픈 제거
	var curDate = curDateBe.replace(/\-/g,'');
	
	console.log(Cust_Sale_No);
	console.log(Cust_Num);
	console.log(saleNumCon);
	console.log(curDate);
	
	//tobody에 들어갈 데이터, tfoot의 합계 가져오기.
	$.ajax({
		url: 'ManageDetail.me',
		data: {'Cust_Sale_No':Cust_Sale_No
			 , 'Cust_Num':Cust_Num
			 , 'curDate':curDate
			 , 'saleNumCon':saleNumCon
			 , 'salRtn':salRtn},
		type: 'post',
		dataType: 'json',
		success: function(data){
			console.log(data);
			console.log(data.length);
			console.log(data[0].ORG);
			//판매중 반품인경우
			$('#ORG').val(data[0].ORG);
			//카드번호
			$('#CRD_NO').val(data[0].CRD_NO);
			//유효년월
			$('#VLD_YM').val(data[0].VLD_YM);
			//카드회사
			$('#CRD_CO_CD').val(data[0].CRD_CO_CD);
			console.log($('#CRD_NO').val());
			console.log($('#VLD_YM').val());
			console.log($('#CRD_CO_CD').val());
			
			let html = "";
			let Foothtml = "";
			if(data.length > 0) { 
				$.each(data, function(index, item){
					html += "<tr style='width: 100%;'>";
					//하단의 총 합계에 대한 데이터.
					if(item.prdCd == '합계'){

						Foothtml += "<tr style='width: 100%;'>";

						Foothtml += "<td class='goodsSum' style='coloe: white;'>"+'합계'+"</td>";//상품코드
						Foothtml += "<td class='goodsCountSum'>"+"<input class='goodsNa' id='goodsCountSum' style='width: 63px;text-align: end;' value="+item.salQty+" readonly></td>";//판매수량
						Foothtml += "<td class='supplySum'>"+"<input class='goodsNa' id='supplySum' style='width: 120px;text-align: end;' value="+item.salVosAmt+" readonly></td>";//판매공급가
						Foothtml += "<td class='taxSum'>"+"<input class='goodsNa' id='taxSum' style='width: 63px;text-align: end;' value="+item.salVatAmt+" readonly></td>";//부가세
						Foothtml += "<td class='saleCountSum'>"+"<input class='goodsNa' id='saleCountSum' style='width: 110px;text-align: end;' value="+item.salAmt+" readonly></td>";//판매금액
						
						Foothtml += "</tr>";
					}
					//구매내역 데이터.
					if(item.prdCd != '합계'){
						html += "<td class='goodsUqNumCon'>"+"<input class='goodsNa' id='goodsUqNumCon"+(index+1)+"' style='width: 55px; text-align:center;' value="+item.salSeq+" readonly></td>";//번호
						html += "<td class='goodsNumCon'>"+"<input class='goodsNa' id='goodsNumCon"+(index+1)+"' style='width: 124px;' value='"+item.prdCd+"' readonly></td>";//상품코드
						html += "<td class='goodsNameCon'>"+"<input class='goodsNa' id='goodsNameCon"+(index+1)+"' style='width: 109px;' value='"+ item.prdNm +"' readonly></td>";//상품명
						html += "<td class='goodsCountCon'>"+"<input class='goodsNa' id='goodsCountCon"+(index+1)+"'style='width: 70px;text-align: end;' value="+item.salQty+" readonly></td>";//판매수량
						html += "<td class='supplyCon'>"+"<input class='goodsNa' id='supplyCon"+(index+1)+"'style='width: 130px;text-align: end;' value="+item.salVosAmt+" readonly></td>";//판매공급가
						html += "<td class='taxCon'>"+"<input class='goodsNa' id='taxCon"+(index+1)+"' style='width: 63px;text-align: end;' value="+item.salVatAmt+" readonly></td>";//부가세
						html += "<td class='saleCountCon'>"+"<input class='goodsNa' id='saleCountCon"+(index+1)+"' style='width: 115px;text-align: end;' value="+item.salAmt+" readonly></td>";//판매금액
						
						html += "</tr>";
					}
				});
			} else {
					html += "<tr>";
					html += "<td colspan='7' style='text-align: center; height: 25px;'>판매 내역이 없습니다.</td>";
					html += "</tr>";
			}
			$("#custPopup").html(html);
			$("#tfootSum").html(Foothtml);
			
			var salRtn_Btn = document.getElementById('salRtn_Btn').value;
			var ORG = document.getElementById('ORG').value;
			var Cust_fst_User_Id = document.getElementById('Cust_fst_User_Id').value;//판매 아이디
			var loginNm = document.getElementById('loginNm').value;//판매 아이디
			console.log(salRtn_Btn);
			console.log(ORG);
			console.log(Cust_fst_User_Id);
			console.log(loginNm);
			
			//반품일 경우 버튼 비활성화
			if(salRtn_Btn == "RTN" || ORG == "RTN"){	//판매구분코드가 반품이거나, 원매장코드가 존재한다면, 반품된 내역이기 때문에 버튼을 보여주지않는다.
				document.getElementById('salRtn_Btn').style.display = 'none';
			}
			
		},
		error: function(data){
		console.log(data);
		alert('조회할 수 없습니다.');
		}
	});
	
});

//반품버튼 클릭시 실행
function Rtn(){
	debugger;
	//반품상품 버튼 비활성화
	var salRtn_Btn = document.getElementById('salRtn_Btn').value;
	var ORG = document.getElementById('ORG').value;
	var Cust_fst_User_Id = document.getElementById('Cust_fst_User_Id').value;//판매 아이디
	var loginNm = document.getElementById('loginNm').value;//판매 아이디
	console.log(salRtn_Btn);
	console.log(ORG);
	console.log(Cust_fst_User_Id);
	console.log(loginNm);
	
	//동일한 매장직원만 반품가능
	if(Cust_fst_User_Id != loginNm){//판매등록한 직원과 로그인한 세션의 직원이 동일해야 반품가능합니다.
		alert("반품은 동일한 매장직원이 가능합니다.");
		return false;
	}
	debugger;
	//반품버튼 누를 시
	var arr;
	var arr2 = new Array();
	var pointDt = new Array();//포인트DT
	var pointMt;//포인트MT
	if(confirm("반품하시겠습니까?")){
		debugger;
		//리스트
		
		var trSize = $('#custPopup').children().size()-1;//행의 사이즈 개수 => 하단의 합계행까지 포함이기 때문에 -1을 해준다.
		console.log(trSize);//합계 행 제외
		
		//판매일자 하이픈 제거
		var curDateBe = $('#curDate').val();				//판매일자
		var curDate = curDateBe.replace(/\-/g,'');			//천단위빼기
		
		
		var goodsCountSum1 = $('#goodsCountSum').val();		//판매금액
		var goodsCountSum = goodsCountSum1.replace(/\,/g,'');//천단위빼기
		
		var supplySum1 = $('#supplySum').val();				//총공급가
		var supplySum = supplySum1.replace(/\,/g,'');		//천단위빼기
		
		var taxSum1 = $('#taxSum').val();					//총부가세
		var taxSum = taxSum1.replace(/\,/g,'');				//천단위빼기
		
		
		var saleCountSum1 = $('#saleCountSum').val();		//총판매금액
		var saleCountSum = saleCountSum1.replace(/\,/g,'');	//천단위빼기
		var saleCountSumNum = Number(saleCountSum);			//숫자 형변환
		
		var Cust_Cash1 = $('#Cust_Cash').val();				//현금결제금액
		var Cust_Cash = Cust_Cash1.replace(/\,/g,'');		//천단위빼기
		var Cust_Cash_Num = Number(Cust_Cash);				//숫자 형변환
		console.log(Cust_Cash1);

		var Cust_Card1 = $('#Cust_Card').val();				//카드결제금액
		var Cust_Card = Cust_Card1.replace(/\,/g,'');		//천단위빼기
		var Cust_Card_Num = Number(Cust_Card);				//숫자 형변환
		console.log(Cust_Card1);
		var Cust_Pin1 = $('#Cust_Pin').val();				//포인트결제금액
		var Cust_Pin = Cust_Pin1.replace(/\,/g,'');			//천단위빼기
		var Cust_Pin_Num = Number(Cust_Pin);				//천단위빼기
		
		//포인트 적립 시 포인트 사용액을 제외한 금액의 10%적립
		var RSVG_PNT = (saleCountSumNum-Cust_Pin_Num)*0.1 	//포인트 적립액 = (총판매금액-사용포인트)*0.1
		//포인트 사용액 0일경우 비워준다.
		if(Cust_Pin == 0){
			var Cust_Point = '';
		}else{
			var Cust_Point = Cust_Pin;
		}
		
		//적립포인트:(카드결제금액+현금결제금액)*0.1
		var PNT = (Cust_Cash_Num+Cust_Card_Num)*0.1
		console.log(PNT);
		//포인트
		var pntList_DT;
		//포인트 사용액이 있을 경우: 구매적립취소+구매사용취소
		//적립포인트(현금또는 카드를 사용한 금액이 있을 시) 존재+사용포인트 존재
		if((PNT != 0 || PNT != '')&&(Cust_Pin != 0 || Cust_Pin != '')){//Cust_Pin: 사용액
			
			//포인트 구매사용
			pntList_DT = {
				'PNT_DS_CD':"200",					//포인트구분코드 200:사용
				'PNT_DS_DT_CD':"202",				//포인트구분상세코드 202:구매사용취소
				'PNT':Cust_Pin,						//사용포인트
				'fstUserId':$('#loginNm').val(),	//세션 이름
				'CUST_NO':$('#Cust_Num').val()		//고객번호
			}
			pointDt.push(pntList_DT);
		
			//포인트 구매적립
			pntList_DT = {
				'PNT_DS_CD':"100",					//포인트구분코드 100:적립
				'PNT_DS_DT_CD':"104",				//포인트구분상세코드 104:구매적립취소
				'PNT':PNT,							//적립포인트
				'fstUserId':$('#loginNm').val(),	//세션 아이디
				'CUST_NO':$('#Cust_Num').val()		//고객번호
			}
			pointDt.push(pntList_DT);

		//포인트 사용액이 0인경우:(적립)
		}else if(Cust_Pin == 0 || Cust_Pin == ''){	//적립포인트: PNT
			poinUseType = '';						//포인트 사용액 0으로 들어가기때문에 비워준다.
			pntList = {
				'PNT_DS_CD':"100",					//포인트구분코드 100:적립
				'PNT_DS_DT_CD':"104",				//포인트구분상세코드 104:구매적립취소
				'PNT':PNT,							//적립포인트
				'fstUserId':$('#loginNm').val(),	//세션 아이디
				'CUST_NO':$('#Cust_Num').val()		//고객번호
			}
			
			pointDt.push(pntList);
			
		//포인트 사용액이 100% 결제인 경우:(사용)
		}else if(PNT == 0 || PNT == ''){			//적립포인트가 0이거나 비어있는경우
			//포인트 구매사용
			pntList_DT = {
				'PNT_DS_CD':"200",					//포인트구분코드 200:사용
				'PNT_DS_DT_CD':"202",				//포인트구분상세코드 202:구매사용취소
				'PNT':Cust_Pin,						//사용포인트
				'fstUserId':$('#loginNm').val(),	//세션 아이디
				'CUST_NO':$('#Cust_Num').val()		//고객번호
			}
			pointDt.push(pntList_DT);
		}
		
		//포인트MT CUST_NO, PNT_SEQ, fstUserId
		if(Cust_Pin == 0 || Cust_Pin == ''){
			Cust_Pin = 0;
		}
		
		pointMt = {
			'fstUserId':$('#loginNm').val(),		//세션 아이디
			'CUST_NO':$('#Cust_Num').val(),			//고객번호
			'PNT':PNT,								//적립포인트
			'PNT_STLM_AMT':Cust_Pin,				//포인트 사용액
			'PNT_DS':"RTN"							//포인트 구분
		}
		
		
		var c = 0;
		var a = 0;
		for(var i = 0; i < trSize; i++){
			
			c++;
			
			var saleCountCon1 = $('#saleCountCon'+c).val();//판매금액
			var saleCountIn = saleCountCon1.replace(/\,/g,'');//천단위빼기
			
			//소비자 단가 = 판매금액/판매수량
			var goodsCountCon1 = $('#goodsCountCon'+c).val();//판매수량
			var goodsCountCon = goodsCountCon1.replace(/\,/g,'');//천단위빼기
			
			var saleCountInNum = Number(saleCountIn); //판매금액 숫자형변환
			var goodsCountConNum = Number(goodsCountCon); //판매수량 숫자형변환
			var PRD_CSMR_UPR = (saleCountInNum / goodsCountConNum);
			console.log("판매금액/판매수량");
			console.log(PRD_CSMR_UPR);
			
			
			var supplyCon1 = $('#supplyCon'+c).val();//부가세
			var supplyCon = supplyCon1.replace(/\,/g,'');//천단위빼기
			
			var taxCon1 = $('#taxCon'+c).val();//부가세
			var taxCon = taxCon1.replace(/\,/g,'');//천단위빼기
			
			if(i == 0){
				//판매MT들어갈 정보
				arr={ 'PRT_CD':$('#Cust_Sale_No').val(),		//세션 매장코드
					  'SAL_TP_CD':'RTN',						//판매구분
					  'TOT_SAL_QTY':goodsCountSum,				//총 판매수량
					  'TOT_SAL_AMT':saleCountSum,				//총 판매금액
					  'TOT_VAT_AMT':taxSum,						//총 부가세액
					  'TOT_VOS_AMT':supplySum,					//총 공급가액
					  'CSH_STLM_AMT':Cust_Cash,					//현금 결제금액
					  'CRD_STLM_AMT':Cust_Card,					//카드 결제금액
					  'PNT_STLM_AMT':Cust_Point,				//포인트 사용액
					  'CUST_NO':$('#Cust_Num').val(),			//고객번호
					  'CRD_NO':$('#CRD_NO').val(),				//카드번호
					  'VLD_YM':$('#VLD_YM').val(),				//유효일자
					  'CRD_CO_CD':$('#CRD_CO_CD').val(),		//카드회사
					  'LST_UPD_ID':$('#loginNm').val(),			//세션 아이디
					  'SAL_DT':curDate,							//원판매일자
					  'SAL_NO':$('#saleNumCon').val()			//원판매번호
				}
			}
			
			arr2[a] ={'PRT_CD':$('#Cust_Sale_No').val(),		//세션 매장코드
					  'SAL_TP_CD':'RTN',						//판매구분
					  'PRD_CD':$('#goodsNumCon'+c).val(),		//상품코드
				      'SAL_QTY':$('#goodsCountCon'+c).val(),	//판매수량
				      'PRD_CSMR_UPR':PRD_CSMR_UPR,				//소비자가
				      'SAL_AMT':saleCountIn,					//판매금액
			          'SAL_VAT_AMT':taxCon,						//부가세액
				      'SAL_VOS_AMT':supplyCon,					//공급가액
				      'SEQ':$('#goodsUqNumCon'+c).val(),		//시퀀스:판매일련번호
				      'LST_UPD_ID':$('#loginNm').val(),			//세션 아이디
				      'RSVG_PNT':RSVG_PNT,						//포인트 적립액
			}
			a++;
		}
			
		console.log(JSON.stringify(arr));
		console.log(JSON.stringify(arr2));
		console.log(JSON.stringify(pointDt));
		console.log(JSON.stringify(pointMt));
		
		$.ajax({
			url : 'collectBill.me',
			type : 'post',
		    data: {'salePay':JSON.stringify(arr),
		    	   'payList':JSON.stringify(arr2),
		    	   'pointDt':JSON.stringify(pointDt),
		    	   'pointMt':JSON.stringify(pointMt)},
			dataType: 'json',
			success: function(data){
				console.log(data);
				if (data.collectBill == '1') {//컨트롤러에서 반품성공 시 1을 반환함.
					alert("반품되었습니다.");//반품성공 안내메세지.
					window.close();
				}else{
					alert("고객정보를 확인해주세요");
				}
			},
			error: function(data) {
				console.log(data);
			}
		});
	//반품 안할시
	}else{
		return false;
	}
};