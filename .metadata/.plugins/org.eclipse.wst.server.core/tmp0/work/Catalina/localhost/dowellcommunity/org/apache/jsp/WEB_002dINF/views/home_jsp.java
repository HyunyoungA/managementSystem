/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/9.0.62
 * Generated at: 2022-09-08 05:54:52 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.views;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class home_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(2);
    _jspx_dependants.put("/WEB-INF/lib/taglibs-standard-impl-1.2.5.jar", Long.valueOf(1661494379773L));
    _jspx_dependants.put("jar:file:/C:/Dowellcommunity/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/DowellCommunity/WEB-INF/lib/taglibs-standard-impl-1.2.5.jar!/META-INF/c.tld", Long.valueOf(1425946270000L));
  }

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fc_005fimport_0026_005furl_005fnobody;

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fc_005fimport_0026_005furl_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fc_005fimport_0026_005furl_005fnobody.release();
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    if (!javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSP들은 오직 GET, POST 또는 HEAD 메소드만을 허용합니다. Jasper는 OPTIONS 메소드 또한 허용합니다.");
        return;
      }
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("<title>두웰커뮤니티</title>\n");
      out.write("<link href=\"resources/CSS/home.css\" rel=\"stylesheet\">\n");
      out.write("<script src=\"https://code.jquery.com/jquery-1.12.4.min.js\"></script>\n");
      out.write("</head>\n");
      out.write("<body id=\"body\">\n");
      out.write("<!-- 네비바 -->\n");
      if (_jspx_meth_c_005fimport_005f0(_jspx_page_context))
        return;
      out.write("\n");
      out.write("	\n");
      out.write("<div id=\"wrap\">\n");
      out.write("	<div id=\"header\">\n");
      out.write("		<!-- 검색창 -->\n");
      out.write("		<div class=\"Top_wrap\">\n");
      out.write("			<div class=\"banner\"></div>\n");
      out.write("			<div class=\"search_wrap\">\n");
      out.write("				  <input id=\"search\" value=\"\"/>\n");
      out.write("			</div>\n");
      out.write("		</div>\n");
      out.write("		\n");
      out.write("		<!-- 팝업창 -->\n");
      out.write("		<div id=\"pop_info_1\" class=\"pop_wrap\" style=\"display:none;\">\n");
      out.write("			<div class=\"pop_inner\">\n");
      out.write("				<p class=\"dsc\">팝업 안내문구 입니다.</p>\n");
      out.write("			    <button type=\"button\" class=\"btn_close\">닫기</button>\n");
      out.write("			</div>\n");
      out.write("		</div>\n");
      out.write("		<!-- 팝업창 end-->\n");
      out.write("		\n");
      out.write("		<!-- 카테고리 -->\n");
      out.write("		<div class=\"totalCate\">\n");
      out.write("			<ul>\n");
      out.write("				<li>\n");
      out.write("					<a>전체 카테고리</a>\n");
      out.write("					<ul class=\"gnb\">\n");
      out.write("						<li><a>브랜드패션</a></li>\n");
      out.write("						<li><a>패션잡화</a></li>\n");
      out.write("						<li><a>뷰티</a></li>\n");
      out.write("						<li><a>식품</a></li>\n");
      out.write("						<li><a>생활</a></li>\n");
      out.write("					</ul>\n");
      out.write("				</li>\n");
      out.write("				<li><a>홈</a></li>\n");
      out.write("				<li><a>위메프데이</a></li>\n");
      out.write("				<li><a>특가</a></li>\n");
      out.write("				<li><a>디지털워크</a></li>\n");
      out.write("				<li><a>투어컬처위크</a></li>\n");
      out.write("				<li><a>베스트</a></li>\n");
      out.write("				<li><a>베이비프로</a></li>\n");
      out.write("				<li><a>패션뷰티프로</a></li>\n");
      out.write("			</ul>\n");
      out.write("		</div>\n");
      out.write("		<!-- 카테고리 end-->\n");
      out.write("	</div>\n");
      out.write("	<!-- 메인배너 슬라이드 -->\n");
      out.write("	<div id=\"contain\">\n");
      out.write("		<div class=\"mySlideDiv fade active\" id=\"active\" style=\"background-color: #EB002B;\">\n");
      out.write("	        <img src=\"https://view01.wemep.co.kr/wmp-main/34/202208/01/pmb_xgcwkf14xe0q.jpg\"> \n");
      out.write("	    </div>\n");
      out.write("	            \n");
      out.write("	    <div class=\"mySlideDiv fade\" style=\"background-color: #E4F1F7;\">\n");
      out.write("	         <img src=\"https://view01.wemep.co.kr/wmp-main/11/202208/02/pmb_wlbwy4ak6iwu.jpg\"> \n");
      out.write("	    </div>\n");
      out.write("	            \n");
      out.write("	    <div class=\"mySlideDiv fade\" style=\"background-color: #E2EAF7;\">\n");
      out.write("	         <img src=\"https://view01.wemep.co.kr/wmp-main/25/202208/01/pmb_mgjbgi9qydwj.jpg\"> \n");
      out.write("	    </div>\n");
      out.write("	    <a class=\"prev\" id=\"prevId\" onclick=\"prevSlide()\">&#10094;</a>\n");
      out.write("	    <a class=\"next\" onclick=\"nextSlide()\">&#10095;</a>\n");
      out.write("	    <!-- 메인배너 슬라이드 end -->\n");
      out.write("	    <br><br>\n");
      out.write("	    <!-- 카테고리 -->\n");
      out.write("	    <span class=\"service\">\n");
      out.write("	    	위메프 주요 서비스\n");
      out.write("	    </span>\n");
      out.write("	    <div class=\"cateGroup\">\n");
      out.write("	    	<div class=\"cate\"><a></a></div>\n");
      out.write("	    	<div class=\"cate\"><a></a></div>\n");
      out.write("	    	<div class=\"cate\"><a></a></div>\n");
      out.write("	    	<div class=\"cate\"><a></a></div>\n");
      out.write("	    	<div class=\"cate\"><a></a></div>\n");
      out.write("	    	<div class=\"cate\"><a></a></div>\n");
      out.write("	    	<div class=\"cate\"><a></a></div>\n");
      out.write("	    </div>\n");
      out.write("	    <!-- 카테고리end -->\n");
      out.write("	    <!-- 게시물 -->\n");
      out.write("<!-- 	    <div class=\"list_wrap\"> -->\n");
      out.write("<!-- 	    	상품 리스트 -->\n");
      out.write("\n");
      out.write("<!-- 			<div class=\"list_conts\"> -->\n");
      out.write("<!-- 	    		<img src=\"https://view01.wemep.co.kr/wmp-deal/2/260/627962602/627962602_medium.jpg?1659453267\"> -->\n");
      out.write('\n');
      out.write("\n");
      out.write("<!-- 	    	</div> -->\n");
      out.write("\n");
      out.write("<!-- 	    </div> -->\n");
      out.write("	    <!-- 게시물end -->\n");
      out.write("	    <br><br><br><br><br><br><br><br>\n");
      out.write("	</div>\n");
      out.write("	<!-- 메인배너 슬라이드 end-->\n");
      out.write("	\n");
      out.write("</div>\n");
      out.write("<script>\n");
      out.write("$(document).ready(function () {\n");
      out.write("	$(\".mySlideDiv\").not(\"#active\").hide(); //화면 로딩 후 첫번째 div를 제외한 나머지 숨김\n");
      out.write("	setInterval(nextSlide, 4000); //4초(4000)마다 다음 슬라이드로 넘어감\n");
      out.write("});\n");
      out.write("\n");
      out.write("//이전 슬라이드\n");
      out.write("function prevSlide() {\n");
      out.write("	$(\".mySlideDiv\").hide(); //모든 div 숨김\n");
      out.write("	var allSlide = $(\".mySlideDiv\"); //모든 div 객체를 변수에 저장\n");
      out.write("	var currentIndex = 0; //현재 나타난 슬라이드의 인덱스 변수\n");
      out.write("	\n");
      out.write("	//반복문으로 현재 active클래스를 가진 div를 찾아 index 저장\n");
      out.write("	$(\".mySlideDiv\").each(function(index,item){ \n");
      out.write("		if($(this).hasClass(\"active\")) {\n");
      out.write("			currentIndex = index;\n");
      out.write("		}\n");
      out.write("        \n");
      out.write("	});\n");
      out.write("	\n");
      out.write("	//새롭게 나타낼 div의 index\n");
      out.write("	var newIndex = 0;\n");
      out.write("    \n");
      out.write("	if(currentIndex <= 0) {\n");
      out.write("		//현재 슬라이드의 index가 0인 경우 마지막 슬라이드로 보냄(무한반복)\n");
      out.write("		newIndex = allSlide.length-1;\n");
      out.write("	} else {\n");
      out.write("		//현재 슬라이드의 index에서 한 칸 만큼 뒤로 간 index 지정\n");
      out.write("		newIndex = currentIndex-1;\n");
      out.write("	}\n");
      out.write("\n");
      out.write("	//모든 div에서 active 클래스 제거\n");
      out.write("	$(\".mySlideDiv\").removeClass(\"active\");\n");
      out.write("    \n");
      out.write("	//새롭게 지정한 index번째 슬라이드에 active 클래스 부여 후 show()\n");
      out.write("	$(\".mySlideDiv\").eq(newIndex).addClass(\"active\");\n");
      out.write("	$(\".mySlideDiv\").eq(newIndex).show();\n");
      out.write("\n");
      out.write("}\n");
      out.write("\n");
      out.write("//다음 슬라이드\n");
      out.write("function nextSlide() {\n");
      out.write("	$(\".mySlideDiv\").hide();\n");
      out.write("	var allSlide = $(\".mySlideDiv\");\n");
      out.write("	var currentIndex = 0;\n");
      out.write("	\n");
      out.write("	$(\".mySlideDiv\").each(function(index,item){\n");
      out.write("		if($(this).hasClass(\"active\")) {\n");
      out.write("			currentIndex = index;\n");
      out.write("		}\n");
      out.write("        \n");
      out.write("	});\n");
      out.write("	\n");
      out.write("	var newIndex = 0;\n");
      out.write("	\n");
      out.write("	if(currentIndex >= allSlide.length-1) {\n");
      out.write("		//현재 슬라이드 index가 마지막 순서면 0번째로 보냄(무한반복)\n");
      out.write("		newIndex = 0;\n");
      out.write("	} else {\n");
      out.write("		//현재 슬라이드의 index에서 한 칸 만큼 앞으로 간 index 지정\n");
      out.write("		newIndex = currentIndex+1;\n");
      out.write("	}\n");
      out.write("\n");
      out.write("	$(\".mySlideDiv\").removeClass(\"active\");\n");
      out.write("	$(\".mySlideDiv\").eq(newIndex).addClass(\"active\");\n");
      out.write("	$(\".mySlideDiv\").eq(newIndex).show();\n");
      out.write("	\n");
      out.write("}\n");
      out.write("	\n");
      out.write("	\n");
      out.write("</script>\n");
      out.write("</body>\n");
      out.write("</html>\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }

  private boolean _jspx_meth_c_005fimport_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:import
    org.apache.taglibs.standard.tag.rt.core.ImportTag _jspx_th_c_005fimport_005f0 = (org.apache.taglibs.standard.tag.rt.core.ImportTag) _005fjspx_005ftagPool_005fc_005fimport_0026_005furl_005fnobody.get(org.apache.taglibs.standard.tag.rt.core.ImportTag.class);
    boolean _jspx_th_c_005fimport_005f0_reused = false;
    try {
      _jspx_th_c_005fimport_005f0.setPageContext(_jspx_page_context);
      _jspx_th_c_005fimport_005f0.setParent(null);
      // /WEB-INF/views/home.jsp(12,0) name = url type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
      _jspx_th_c_005fimport_005f0.setUrl("common/navbar.jsp");
      int[] _jspx_push_body_count_c_005fimport_005f0 = new int[] { 0 };
      try {
        int _jspx_eval_c_005fimport_005f0 = _jspx_th_c_005fimport_005f0.doStartTag();
        if (_jspx_th_c_005fimport_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
          return true;
        }
      } catch (java.lang.Throwable _jspx_exception) {
        while (_jspx_push_body_count_c_005fimport_005f0[0]-- > 0)
          out = _jspx_page_context.popBody();
        _jspx_th_c_005fimport_005f0.doCatch(_jspx_exception);
      } finally {
        _jspx_th_c_005fimport_005f0.doFinally();
      }
      _005fjspx_005ftagPool_005fc_005fimport_0026_005furl_005fnobody.reuse(_jspx_th_c_005fimport_005f0);
      _jspx_th_c_005fimport_005f0_reused = true;
    } finally {
      org.apache.jasper.runtime.JspRuntimeLibrary.releaseTag(_jspx_th_c_005fimport_005f0, _jsp_getInstanceManager(), _jspx_th_c_005fimport_005f0_reused);
    }
    return false;
  }
}
