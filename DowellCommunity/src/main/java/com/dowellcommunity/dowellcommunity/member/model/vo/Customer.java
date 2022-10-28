package com.dowellcommunity.dowellcommunity.member.model.vo;

import java.sql.Date;

public class Customer {//고객조회 페이지		 CS_CUST01_MT, MA_PRT_MT, MA_USER_MT (사용 테이블명) 
	private String custNo;		//고객번호
	private String custNm;		//고객이름
	private String sexCd;		//성별코드
	private String scalYn;		//양음력구분
	private String brdyDt;		//생년월일
	private String mrrgDt;		//결혼기념일
	private String pocCd;		//직업코드
	private String mblNo;		//휴대폰번호
	private String psmtGrcCd;	//우편물수령코드
	private String email;		//이메일주소
	private String zipCd;		//우편번호코드
	private String addr;		//주소
	private String addrDtl;		//상세주소
	private String custSsCd;	//고객상태코드
	private String cnclCnts;	//해지사유내용
	private String jnPrtCd;		//가입매장코드
	private String emailRcvYn;	//이메일수신동의여부
	private String smsRcvYn;	//SMS수신동의여부
	private String tmRcvYn;		//TM수신동의여부
	private String dmRcvYn;		//DM수신동의여부
	private String fstJsDt;		//최초가입일자
	private String jsDt;		//가입일자
	private String stpDt;		//중지일자
	private String cnclDt;		//해지일자
	private String fstRegDt;	//최초등록일자
	private String fstUserId;	//최초등록자
	private String lstUpdDt;	//최종수정일자
	private String lstUpdId;	//최종수정자
	
	public Customer() {}

	public Customer(String custNo, String custNm, String sexCd, String scalYn, String brdyDt, String mrrgDt,
			String pocCd, String mblNo, String psmtGrcCd, String email, String zipCd, String addr, String addrDtl,
			String custSsCd, String cnclCnts, String jnPrtCd, String emailRcvYn, String smsRcvYn, String tmRcvYn,
			String dmRcvYn, String fstJsDt, String jsDt, String stpDt, String cnclDt, String fstRegDt, String fstUserId,
			String lstUpdDt, String lstUpdId) {
		super();
		this.custNo = custNo;
		this.custNm = custNm;
		this.sexCd = sexCd;
		this.scalYn = scalYn;
		this.brdyDt = brdyDt;
		this.mrrgDt = mrrgDt;
		this.pocCd = pocCd;
		this.mblNo = mblNo;
		this.psmtGrcCd = psmtGrcCd;
		this.email = email;
		this.zipCd = zipCd;
		this.addr = addr;
		this.addrDtl = addrDtl;
		this.custSsCd = custSsCd;
		this.cnclCnts = cnclCnts;
		this.jnPrtCd = jnPrtCd;
		this.emailRcvYn = emailRcvYn;
		this.smsRcvYn = smsRcvYn;
		this.tmRcvYn = tmRcvYn;
		this.dmRcvYn = dmRcvYn;
		this.fstJsDt = fstJsDt;
		this.jsDt = jsDt;
		this.stpDt = stpDt;
		this.cnclDt = cnclDt;
		this.fstRegDt = fstRegDt;
		this.fstUserId = fstUserId;
		this.lstUpdDt = lstUpdDt;
		this.lstUpdId = lstUpdId;
	}

	public String getCustNo() {
		return custNo;
	}

	public void setCustNo(String custNo) {
		this.custNo = custNo;
	}

	public String getCustNm() {
		return custNm;
	}

	public void setCustNm(String custNm) {
		this.custNm = custNm;
	}

	public String getSexCd() {
		return sexCd;
	}

	public void setSexCd(String sexCd) {
		this.sexCd = sexCd;
	}

	public String getScalYn() {
		return scalYn;
	}

	public void setScalYn(String scalYn) {
		this.scalYn = scalYn;
	}

	public String getBrdyDt() {
		return brdyDt;
	}

	public void setBrdyDt(String brdyDt) {
		this.brdyDt = brdyDt;
	}

	public String getMrrgDt() {
		return mrrgDt;
	}

	public void setMrrgDt(String mrrgDt) {
		this.mrrgDt = mrrgDt;
	}

	public String getPocCd() {
		return pocCd;
	}

	public void setPocCd(String pocCd) {
		this.pocCd = pocCd;
	}

	public String getMblNo() {
		return mblNo;
	}

	public void setMblNo(String mblNo) {
		this.mblNo = mblNo;
	}

	public String getPsmtGrcCd() {
		return psmtGrcCd;
	}

	public void setPsmtGrcCd(String psmtGrcCd) {
		this.psmtGrcCd = psmtGrcCd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getZipCd() {
		return zipCd;
	}

	public void setZipCd(String zipCd) {
		this.zipCd = zipCd;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getAddrDtl() {
		return addrDtl;
	}

	public void setAddrDtl(String addrDtl) {
		this.addrDtl = addrDtl;
	}

	public String getCustSsCd() {
		return custSsCd;
	}

	public void setCustSsCd(String custSsCd) {
		this.custSsCd = custSsCd;
	}

	public String getCnclCnts() {
		return cnclCnts;
	}

	public void setCnclCnts(String cnclCnts) {
		this.cnclCnts = cnclCnts;
	}

	public String getJnPrtCd() {
		return jnPrtCd;
	}

	public void setJnPrtCd(String jnPrtCd) {
		this.jnPrtCd = jnPrtCd;
	}

	public String getEmailRcvYn() {
		return emailRcvYn;
	}

	public void setEmailRcvYn(String emailRcvYn) {
		this.emailRcvYn = emailRcvYn;
	}

	public String getSmsRcvYn() {
		return smsRcvYn;
	}

	public void setSmsRcvYn(String smsRcvYn) {
		this.smsRcvYn = smsRcvYn;
	}

	public String getTmRcvYn() {
		return tmRcvYn;
	}

	public void setTmRcvYn(String tmRcvYn) {
		this.tmRcvYn = tmRcvYn;
	}

	public String getDmRcvYn() {
		return dmRcvYn;
	}

	public void setDmRcvYn(String dmRcvYn) {
		this.dmRcvYn = dmRcvYn;
	}

	public String getFstJsDt() {
		return fstJsDt;
	}

	public void setFstJsDt(String fstJsDt) {
		this.fstJsDt = fstJsDt;
	}

	public String getJsDt() {
		return jsDt;
	}

	public void setJsDt(String jsDt) {
		this.jsDt = jsDt;
	}

	public String getStpDt() {
		return stpDt;
	}

	public void setStpDt(String stpDt) {
		this.stpDt = stpDt;
	}

	public String getCnclDt() {
		return cnclDt;
	}

	public void setCnclDt(String cnclDt) {
		this.cnclDt = cnclDt;
	}

	public String getFstRegDt() {
		return fstRegDt;
	}

	public void setFstRegDt(String fstRegDt) {
		this.fstRegDt = fstRegDt;
	}

	public String getFstUserId() {
		return fstUserId;
	}

	public void setFstUserId(String fstUserId) {
		this.fstUserId = fstUserId;
	}

	public String getLstUpdDt() {
		return lstUpdDt;
	}

	public void setLstUpdDt(String lstUpdDt) {
		this.lstUpdDt = lstUpdDt;
	}

	public String getLstUpdId() {
		return lstUpdId;
	}

	public void setLstUpdId(String lstUpdId) {
		this.lstUpdId = lstUpdId;
	}

	@Override
	public String toString() {
		return "Customer [custNo=" + custNo + ", custNm=" + custNm + ", sexCd=" + sexCd + ", scalYn=" + scalYn
				+ ", brdyDt=" + brdyDt + ", mrrgDt=" + mrrgDt + ", pocCd=" + pocCd + ", mblNo=" + mblNo + ", psmtGrcCd="
				+ psmtGrcCd + ", email=" + email + ", zipCd=" + zipCd + ", addr=" + addr + ", addrDtl=" + addrDtl
				+ ", custSsCd=" + custSsCd + ", cnclCnts=" + cnclCnts + ", jnPrtCd=" + jnPrtCd + ", emailRcvYn="
				+ emailRcvYn + ", smsRcvYn=" + smsRcvYn + ", tmRcvYn=" + tmRcvYn + ", dmRcvYn=" + dmRcvYn + ", fstJsDt="
				+ fstJsDt + ", jsDt=" + jsDt + ", stpDt=" + stpDt + ", cnclDt=" + cnclDt + ", fstRegDt=" + fstRegDt
				+ ", fstUserId=" + fstUserId + ", lstUpdDt=" + lstUpdDt + ", lstUpdId=" + lstUpdId + "]";
	}

	
}
