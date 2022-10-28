package com.dowellcommunity.dowellcommunity.member.model.vo;

public class SaleCheck {//매장조회 팝업창
	private	String prtCd;	//매장코드
	private	String prtNm; 	//매장명
	private	String prtSsCd; 	//매장살태
	
	public SaleCheck() {}

	public SaleCheck(String prtCd, String prtNm, String prtSsCd) {
		super();
		this.prtCd = prtCd;
		this.prtNm = prtNm;
		this.prtSsCd = prtSsCd;
	}

	public String getPrtCd() {
		return prtCd;
	}

	public void setPrtCd(String prtCd) {
		this.prtCd = prtCd;
	}

	public String getPrtNm() {
		return prtNm;
	}

	public void setPrtNm(String prtNm) {
		this.prtNm = prtNm;
	}

	public String getPrtSsCd() {
		return prtSsCd;
	}

	public void setPrtSsCd(String prtSsCd) {
		this.prtSsCd = prtSsCd;
	}

	@Override
	public String toString() {
		return "SaleCheck [prtCd=" + prtCd + ", prtNm=" + prtNm + ", prtSsCd=" + prtSsCd + "]";
	}
	
}
