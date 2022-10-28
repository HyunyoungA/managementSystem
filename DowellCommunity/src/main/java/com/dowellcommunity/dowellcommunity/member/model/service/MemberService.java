package com.dowellcommunity.dowellcommunity.member.model.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.dowellcommunity.dowellcommunity.member.model.vo.Customer;
import com.dowellcommunity.dowellcommunity.member.model.vo.Member;

public interface MemberService {
	//로그인
	Member login(Member m);
	//고객 정보 리스트
	ArrayList<Customer> getBoardList();
	//매장 팝업창
	ArrayList<HashMap<String, String>> SaleCheck(Map<String, Object> map);
	//고객번호 조회
	int custNumListCount(Map<String, Object> map);
	//매장 리스트
	ArrayList<HashMap<String, String>> custNumList(Map<String, Object> map);
	//고객조회 팝업창
	ArrayList<HashMap<String, String>> custNumble(Map<String, Object> map);
	//고객조회 팝업창-검색
	ArrayList<HashMap<String, String>> checkCustList(Map<String, Object> map);
	//전체조건조회-검색
	ArrayList<HashMap<String, String>> totale(Map<String, Object> map);
	//고객변경이력-팝업창
	ArrayList<HashMap<String, String>> changeCust(Map<String, Object> map);
	//고객변경이력-고객정보
	ArrayList<HashMap<String, String>> custInfoList(Map<String, Object> map);
	//매장월별식별조회 페이지 이동
	ArrayList<Member> saleMonth(String userId);
	//매월전체월별실적조회-전체검색
	ArrayList<HashMap<String, String>> MonthTotale(Map<String, Object> map);
	//핸드폰번호 중복체크
	int phoneNumble(String phoneNum);
	//신규등록 버튼 클릭 시
	int joinForm(Map<String, Object> map);
	//신규등록 포인트 1000추가
	int point(Map<String, Object> map);
	//신규등록 포인트 1000추가 디테일
	int pointDt(Map<String, Object> map);
	//고객상세정보 리스트
	HashMap<String, String> changeDtIn(String changeDt);
	//업데이트 클릭시 페이지 이동
	int updateBoard(Map<String, Object> map);
	//변경이력 저장
	int ChangeHistory(Map<String, Object> map);
	//고객판매관리 통합 검색
	ArrayList<HashMap<String, String>> saleManageTotal(Map<String, Object> map);
	//고객판매관리 상세보기-팝업창
	ArrayList<HashMap<String, String>> ManageDetail(Map<String, Object> map);
	//상품코드 검색 조회-존재 시 자동완성
	ArrayList<HashMap<String, String>> goodsCode(Map<String, Object> map);
	//매장재고 조회
	ArrayList<HashMap<String, String>> stock(Map<String, Object> map);
	//고객판매 수금등록 UPDATE => SD_IVCO01_MT
	int CustCollect(Map<String, Object> map);
	//고객판매 수금등록  고객판매insert
	int saleInsert(Map<String, Object> map);
	//고객판매 수금등록  고객판매상세insert
	int saleDtInsert(Map<String, Object> map);
	//공통코드 가져오기
	ArrayList<HashMap<String, String>> CollectBill();
	//포인트 사용액 체크
	int checkPoint(Map<String, Object> map);
	//재고 체크
	int stockCheck(Map<String, Object> map);


	





}
