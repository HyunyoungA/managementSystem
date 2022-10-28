package com.dowellcommunity.dowellcommunity.member.model.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dowellcommunity.dowellcommunity.member.model.dao.MemberDAO;
import com.dowellcommunity.dowellcommunity.member.model.vo.Customer;
import com.dowellcommunity.dowellcommunity.member.model.vo.Member;

@Service("mService")
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	private MemberDAO mDAO;
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	//로그인
	@Override
	public Member login(Member m) {
		return mDAO.login(sqlSession, m);
	}
	//고객 정보 리스트
	@Override
	public ArrayList<Customer> getBoardList() {
		return mDAO.getBoardList(sqlSession);
	}
	//매장조회 팝업창
	@Override
	public ArrayList<HashMap<String, String>> SaleCheck(Map<String, Object> map) {
		return mDAO.saleCheck(sqlSession, map);
	}
	//고객번호 조회
	@Override
	public int custNumListCount(Map<String, Object> map) {
		return mDAO.custNumListCount(sqlSession, map);
	}
	//고객번호 리스트
	@Override
	public ArrayList<HashMap<String, String>> custNumList(Map<String, Object> map) {
		return mDAO.custNumList(sqlSession, map);
	}
	//고객조회 팝업창
	@Override
	public ArrayList<HashMap<String, String>> custNumble(Map<String, Object> map) {
		return mDAO.custNumble(sqlSession, map);
	}
	//고객조회 팝업창-검색
	@Override
	public ArrayList<HashMap<String, String>> checkCustList(Map<String, Object> map) {
		return mDAO.checkCustList(sqlSession, map);
	}
	//전체조건조회-검색
	@Override
	public ArrayList<HashMap<String, String>> totale(Map<String, Object> map) {
		return mDAO.totale(sqlSession, map);
	}
	//고객변경이력-팝업창
	@Override
	public ArrayList<HashMap<String, String>> changeCust(Map<String, Object> map) {
		return mDAO.changeCust(sqlSession, map);
	}
	//고객변경이력-고객정보
	@Override
	public ArrayList<HashMap<String, String>> custInfoList(Map<String, Object> map) {
		return mDAO.custInfoList(sqlSession, map);
	}
	//매장월별식별조회 페이지 이동
	@Override
	public ArrayList<Member> saleMonth(String userId) {
		return mDAO.saleMonth(sqlSession, userId);
	}
	//매월전체월별실적조회-전체검색
	@Override
	public ArrayList<HashMap<String, String>> MonthTotale(Map<String, Object> map) {
		return mDAO.MonthTotale(sqlSession, map);
	}
	//핸드폰번호 중복체크
	@Override
	public int phoneNumble(String phoneNum) {
		return mDAO.phoneNumble(sqlSession, phoneNum);
	}
	//신규등록 버튼 클릭 시
	@Override
	public int joinForm(Map<String, Object> map) {
		return mDAO.joinForm(sqlSession, map);
	}
	//신규등록 포인트 1000추가
	@Override
	public int point(Map<String, Object> map) {
		return mDAO.point(sqlSession, map);
	}
	//신규등록 포인트 1000추가 디테일
	@Override
	public int pointDt(Map<String, Object> map) {
		return mDAO.pointDt(sqlSession, map);
	}
	@Override
	public HashMap<String, String> changeDtIn(String changeDt) {
		return mDAO.changeDtIn(sqlSession, changeDt);
	}
	//업데이트 클릭시 페이지 이동
	@Override
	public int updateBoard(Map<String, Object> map) {
		return mDAO.updateBoard(sqlSession, map);
	}
	//변경이력
	@Override
	public int ChangeHistory(Map<String, Object> map) {
		return mDAO.ChangeHistory(sqlSession, map);
	}
	//고객판매관리 통합 검색 버튼 클릭 시 
	@Override
	public ArrayList<HashMap<String, String>> saleManageTotal(Map<String, Object> map) {
		return mDAO.saleManageTotal(sqlSession, map);
	}
	//고객판매관리 상세보기-팝업창
	@Override
	public ArrayList<HashMap<String, String>> ManageDetail(Map<String, Object> map) {
		return mDAO.ManageDetail(sqlSession, map);
	}
	//상품코드 검색 조회-존재 시 자동완성
	@Override
	public ArrayList<HashMap<String, String>> goodsCode(Map<String, Object> map) {
		return mDAO.goodsCode(sqlSession, map);
	}
	//매장재고 조회
	@Override
	public ArrayList<HashMap<String, String>> stock(Map<String, Object> map) {
		return mDAO.stock(sqlSession, map);
	}
	//고객판매 수금등록 및 반품 매장현장고UPDATE
	@Override
	public int CustCollect(Map<String, Object> map) {
		return mDAO.CustCollect(sqlSession, map);
	}
	//고객판매 수금등록 및 반품  고객판매insertMT
	@Override
	public int saleInsert(Map<String, Object> map) {
		return mDAO.saleInsert(sqlSession, map);
	}
	//고객판매 수금등록 및 반품  고객판매상세insertDT
	@Override
	public int saleDtInsert(Map<String, Object> map) {
		return mDAO.saleDtInsert(sqlSession, map);
	}
	//공통코드 가져오기
	@Override
	public ArrayList<HashMap<String, String>> CollectBill() {
		return mDAO.CollectBill(sqlSession);
	}
	//포인트 사용액 체크
	@Override
	public int checkPoint(Map<String, Object> map) {
		return mDAO.checkPoint(sqlSession, map);
	}
	//재고 체크
	@Override
	public int stockCheck(Map<String, Object> map) {
		return mDAO.stockCheck(sqlSession, map);
	}



	


}
