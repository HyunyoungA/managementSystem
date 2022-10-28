<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<title>메뉴</title>
<style>
/* 	네비바css */
nav {
	z-index: 1;
	position: fixed;
	width: 1536px;
	height: 60px;
	background: white;
	color: black;
	text-align:center;
	top:0;
	left:0;
	box-shadow: rgb(0 0 0 / 4%) 2px 4px 5px;
}
.navbar-nav{
	display: table-row;
}
.navbar-nav li{
	display: table-cell;
    height: 60px;
    list-style-type: none;
    vertical-align: middle;
}
.nav-link{
	padding: 10px;
	color: black;
	text-decoration: none;
}
.nav-link:hover {
    color: #3E76D6;
}
.nav-list{
	display: inline-block;
}
#nav_id{
padding-left: 850px;
}
.logoBox{
	width: 95px;
    height: 98px;
    overflow:hidden;
    margin:0 auto;
}
#logoSpace{
	height: 50px;
	width: 150px;
	padding-left: 170px;
}
.img{
	vertical-align: middle;
    width: 187px;
    height: 100%;
    object-fit: cover;
}
.manager{
	display: inline-block;
    border-radius: 6px;
    width: 106px;
    height: 34px;
    background-color: black;
}
.manager a{
	display: block;
    text-decoration: none;
    margin: 5px;
    text-align: center;
    color: white;
}
.manager:hover{
	cursor: pointer;
	background-color: #3E76D6;
}
</style>
</head>
<body>
<!-- 네비바 -->
	<nav>
		<ul class="navbar-nav">
			<!-- 로고 -->
			<li id="logoSpace">
				<a href="home.do" class="nav-link">
					<img class="img" alt="logo" src="resources/home/logo.png">
				</a>
			</li>
			<!-- 로그인 -->
			<li class="nav-list" id="nav_id">
				<c:if test="${ empty sessionScope.loginUser }">
					<a href="login.me" class="nav-link" id="login_ID">로그인</a>
				</c:if>
			</li>
			<li class="nav-list">
				<c:if test="${ !empty sessionScope.loginUser }">
					<a href="logout.me" class="nav-link" id="">로그아웃</a>
				</c:if>
			</li>
			<li class="nav-list">
				<c:if test="${ !empty sessionScope.loginUser }">
					<div class="manager">
						<a href="managerPage.me">관리자페이지</a>
					</div>
				</c:if>
			</li>
		</ul>
	</nav>
</body>
</html>