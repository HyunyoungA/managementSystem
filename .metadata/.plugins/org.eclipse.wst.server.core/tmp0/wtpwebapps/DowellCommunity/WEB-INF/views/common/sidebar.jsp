<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>사이드바</title>
<style type="text/css">
/* 사이드바 */
.sideBar {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  width: 205px;
  background: #F6F6F6;
  height: 100%;
  overflow: auto;
  position: fixed;
}
.sideBar_list a {
  text-decoration: none;
  padding: 15px 10px 15px 40px;
  display: block;
  color: #000;
  font-weight: bold;
}
.sideBar_list a:hover {
  background: #B3C8E6;
}
#side_list_one{
margin-top: 90px;
}
</style>
</head>
<body>
<ul class="sideBar">
  <li class="sideBar_list" id="side_list_one"><a class="home" href="managerPage.me">고객조회</a></li>
  <li class="sideBar_list"><a href="custInfo.me">고객정보조회</a></li>
  <li class="sideBar_list"><a href="saleMonth.me">매장월별실적조회</a></li>
  <li class="sideBar_list"><a href="saleManagement.me">고객판매관리</a></li>
</ul>
</body>
</html>