package com.dowellcommunity.dowellcommunity.member.model.vo;

import java.sql.Date;

public class Member {//MA_USER_MT
	private String userId;		//사용자 ID
	private String userNm;		//사용자 명
	private String userDtCd;	//사용자구분코드
	private String userYn;		//사용여부
	private String userPwd;		//비밀번호
	private String stDt;		//시작일자
	private String edDt;		//종료일자
	private String prtCd;		//매장코드
	private String pwdUpdDt;	//비밀번호변경일자
	private Date fstRegDt;		//최초등록일자
	private String fstUserId;	//최초등록자
	private Date lstUpdDt;		//최종수정일자
	private String lstUpdId;	//최종수정자
	private String prtNm;		//가입매장
	
	public Member() {}

	public Member(String userId, String userNm, String userDtCd, String userYn, String userPwd, String stDt,
			String edDt, String prtCd, String pwdUpdDt, Date fstRegDt, String fstUserId, Date lstUpdDt, String lstUpdId,
			String prtNm) {
		super();
		this.userId = userId;
		this.userNm = userNm;
		this.userDtCd = userDtCd;
		this.userYn = userYn;
		this.userPwd = userPwd;
		this.stDt = stDt;
		this.edDt = edDt;
		this.prtCd = prtCd;
		this.pwdUpdDt = pwdUpdDt;
		this.fstRegDt = fstRegDt;
		this.fstUserId = fstUserId;
		this.lstUpdDt = lstUpdDt;
		this.lstUpdId = lstUpdId;
		this.prtNm = prtNm;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserNm() {
		return userNm;
	}

	public void setUserNm(String userNm) {
		this.userNm = userNm;
	}

	public String getUserDtCd() {
		return userDtCd;
	}

	public void setUserDtCd(String userDtCd) {
		this.userDtCd = userDtCd;
	}

	public String getUserYn() {
		return userYn;
	}

	public void setUserYn(String userYn) {
		this.userYn = userYn;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public String getStDt() {
		return stDt;
	}

	public void setStDt(String stDt) {
		this.stDt = stDt;
	}

	public String getEdDt() {
		return edDt;
	}

	public void setEdDt(String edDt) {
		this.edDt = edDt;
	}

	public String getPrtCd() {
		return prtCd;
	}

	public void setPrtCd(String prtCd) {
		this.prtCd = prtCd;
	}

	public String getPwdUpdDt() {
		return pwdUpdDt;
	}

	public void setPwdUpdDt(String pwdUpdDt) {
		this.pwdUpdDt = pwdUpdDt;
	}

	public Date getFstRegDt() {
		return fstRegDt;
	}

	public void setFstRegDt(Date fstRegDt) {
		this.fstRegDt = fstRegDt;
	}

	public String getFstUserId() {
		return fstUserId;
	}

	public void setFstUserId(String fstUserId) {
		this.fstUserId = fstUserId;
	}

	public Date getLstUpdDt() {
		return lstUpdDt;
	}

	public void setLstUpdDt(Date lstUpdDt) {
		this.lstUpdDt = lstUpdDt;
	}

	public String getLstUpdId() {
		return lstUpdId;
	}

	public void setLstUpdId(String lstUpdId) {
		this.lstUpdId = lstUpdId;
	}

	public String getPrtNm() {
		return prtNm;
	}

	public void setPrtNm(String prtNm) {
		this.prtNm = prtNm;
	}

	@Override
	public String toString() {
		return "Member [userId=" + userId + ", userNm=" + userNm + ", userDtCd=" + userDtCd + ", userYn=" + userYn
				+ ", userPwd=" + userPwd + ", stDt=" + stDt + ", edDt=" + edDt + ", prtCd=" + prtCd + ", pwdUpdDt="
				+ pwdUpdDt + ", fstRegDt=" + fstRegDt + ", fstUserId=" + fstUserId + ", lstUpdDt=" + lstUpdDt
				+ ", lstUpdId=" + lstUpdId + ", prtNm=" + prtNm + "]";
	}

}