/**
매장월별실적조회
 * 
 */

console.log("매장월별실적스트립트");

window.onload = function() {
	//매출월 오늘날짜
	//한국시간을 맞추기 위한 -32400000
	const offset = new Date().getTimezoneOffset() * 60000;
	//현재 날짜 시간 - 9시간(UTC시간을 기준이 우리나라보다 9시간 많음.)
	const today = new Date(Date.now() -offset);
	var date = new Date(Date.now() -offset).toISOString().substring(0, 7);
	console.log(date);
	document.getElementById('saleMonth-list').value= new Date(Date.now() -offset).toISOString().substring(0, 7);
}
$(document).ready(
	$(opener).one('beforeunload', function() {          // 부모창의 새로고침/닫기/앞으로/뒤로
		window.close();                                 // 팝업을 닫는다
	})
);

////////////////////////////////-전체 조회-////////////////////////////////////////
//전체 조회
function Search_Total_search(){
	var saleMonth = $('#saleMonth-list').val();			//년도-월
	var CustCode = $('#saleCode').val();				//매장코드
	
	console.log(saleMonth);
	console.log(saleName);
	
	$.ajax({//전체 조건 조회
		url: 'salMonthSum.me',
		data: {'saleMonth':saleMonth
			  ,'CustCode':CustCode},
		type: 'post',
		dataType: 'json',
		success: function(data){
			console.log(data);
			let html = "";
			console.log(data[0].totalSum)
			if(typeof data[0].totalSum != 'undefined'){
				
				if(data.length > 0) {
					
					$.each(data, function(index, item){
						html += "<tr style='width: 100%;'>";
						
						if(item.prtCd != '총합'){
							html += "<td class='CustNum' id='custSumId'>"+item.prtCd+"</td>";//매장코드
							html += "<td class='CustDetail' id='CustDetailId'>"+item.prtNm+"</td>";//매장명
						}
						if(item.prtCd == '총합'){
							html += "<td class='CustNum' id='custNumSumId' colspan='2'>"+item.prtNm+"</td>";//매장명
						}
						html += "<td class='dateDay'>"+item.day1+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day2+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day3+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day4+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day5+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day6+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day7+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day8+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day9+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day10+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day11+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day12+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day13+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day14+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day15+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day16+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day17+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day18+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day19+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day20+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day21+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day22+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day23+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day24+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day25+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day26+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day27+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day28+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day29+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day30+"</td>";//날짜1-31일
						html += "<td class='dateDay'>"+item.day31+"</td>";//날짜1-31일
						html += "<td class='dateSum'>"+item.totalSum+"</td>";//총합계
						
						html += "</tr>";
					});
				}
			}else if(typeof data.day1 == 'undefined'){
					html += "<tr>";
					html += "<td colspan='4' id='unJoin'>매장 월별 매출이 등록되어 있지 않습니다.</td>";
					html += "</tr>";
			}
			$("tbody#saleMonthSum").html(html);
		},
		error: function(data){
		console.log(data);
		alert('조회할 수 없습니다.');
		}
	});
};