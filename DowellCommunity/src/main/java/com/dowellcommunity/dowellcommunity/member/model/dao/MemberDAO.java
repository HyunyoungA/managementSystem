package com.dowellcommunity.dowellcommunity.member.model.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.dowellcommunity.dowellcommunity.member.model.vo.Customer;
import com.dowellcommunity.dowellcommunity.member.model.vo.Member;

@Repository("mDAO")
public class MemberDAO {
	//로그인
	public Member login(SqlSessionTemplate sqlSession, Member m) {
		return sqlSession.selectOne("memberMapper.login", m);
	}
	//로그아웃
	public ArrayList<Customer> getBoardList(SqlSessionTemplate sqlSession) {
		return (ArrayList)sqlSession.selectList("memberMapper.getBoardList");
	}
	//매장조회 팝업창
	public ArrayList<HashMap<String, String>> saleCheck(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.saleCheck",map);
	}
	//고객조회 카운트
	public int custNumListCount(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return sqlSession.selectOne("memberMapper.custNumListCount", map);
	}
	//고객조회 리스트
	public ArrayList<HashMap<String, String>> custNumList(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.custNumList",map);
	}
	//고객조회 팝업창
	public ArrayList<HashMap<String, String>> custNumble(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.custNumble",map);
	}
	//고객조회 팝업창-검색
	public ArrayList<HashMap<String, String>> checkCustList(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.checkCustList",map);
	}
	//전체조건조회-검색
	public ArrayList<HashMap<String, String>> totale(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.totale",map);
	}
	//고객변경이력-팝업창
	public ArrayList<HashMap<String, String>> changeCust(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.changeCust",map);
	}
	//고객변경이력-고객정보
	public ArrayList<HashMap<String, String>> custInfoList(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.custInfoList",map);
	}
	public ArrayList<Member> saleMonth(SqlSessionTemplate sqlSession, String userId) {
		return (ArrayList)sqlSession.selectList("memberMapper.saleMonth",userId);
	}
	//매월전체월별실적조회-전체검색
	public ArrayList<HashMap<String, String>> MonthTotale(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.MonthTotale",map);
	}
	//핸드폰번호 중복체크
	public int phoneNumble(SqlSessionTemplate sqlSession, String phoneNum) {
		return sqlSession.selectOne("memberMapper.phoneNumble",phoneNum);
	}
	//신규등록 버튼 클릭 시
	public int joinForm(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		System.out.println("DAO"+map);
		return sqlSession.insert("memberMapper.joinForm",map);
	}
	//신규등록 포인트 1000추가
	public int point(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return sqlSession.insert("memberMapper.point", map);
	}
	//신규등록 포인트 1000추가 디테일
	public int pointDt(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return sqlSession.insert("memberMapper.pointDt", map);
	}
	public HashMap<String, String> changeDtIn(SqlSessionTemplate sqlSession, String changeDt) {
		return sqlSession.selectOne("memberMapper.changeDtIn", changeDt);
	}
	//변경 고객정보 저장
	public int updateBoard(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return sqlSession.update("memberMapper.updateBoard", map);
	}
	//변경이력
	public int ChangeHistory(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return sqlSession.insert("memberMapper.ChangeHistory", map);
	}
	//고객판매관리 통합 검색 버튼 클릭 시 
	public ArrayList<HashMap<String, String>> saleManageTotal(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.saleManageTotal", map);
	}
	//고객판매관리 상세보기-팝업창
	public ArrayList<HashMap<String, String>> ManageDetail(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.ManageDetail", map);
	}
	//상품코드 검색 조회-존재 시 자동완성
	public ArrayList<HashMap<String, String>> goodsCode(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.goodsCode", map);
	}
	//매장재고 조회
	public ArrayList<HashMap<String, String>> stock(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return (ArrayList)sqlSession.selectList("memberMapper.stock", map);
	}
	//고객판매 수금등록 insert
	public int CustCollect(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return sqlSession.update("memberMapper.CustCollect", map);
	}
	//고객판매 수금등록  고객판매insert
	public int saleInsert(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return sqlSession.insert("memberMapper.saleInsert", map);
	}
	//고객판매 수금등록  고객판매상세insert
	public int saleDtInsert(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return sqlSession.insert("memberMapper.saleDtInsert", map);
	}
	//공통코드 가져오기
	public ArrayList<HashMap<String, String>> CollectBill(SqlSessionTemplate sqlSession) {
		return (ArrayList)sqlSession.selectList("memberMapper.CollectBill");
	}
	//포인트 사용액 체크
	public int checkPoint(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return sqlSession.selectOne("memberMapper.checkPoint", map);
	}
	//재고 체크
	public int stockCheck(SqlSessionTemplate sqlSession, Map<String, Object> map) {
		return sqlSession.selectOne("memberMapper.stockCheck", map);
	}

}
