<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>에러 메세지</title>
</head>
<body>
<script type="text/javascript">
alert("${requestScope.msg}");// 메시지 출력해주기
location.href = "${requestScope.back}";// 페이지 이동
self.close(); // 팝업창 닫기
opener.location.reload(true);
</script>
</body>
</html>