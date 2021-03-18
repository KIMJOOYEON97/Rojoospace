window.onload=function(){
    var users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users)

    var $profileInfo=$("#profileInfo");
    $.each(users,function(i,user){
        $profileInfo.append("회원명 : "+user.Name+"<br><br>");
        $profileInfo.append("아이디 : "+user.Id+"<br><br>");
        $profileInfo.append("이메일 : "+user.Email+"<br><br>");
        $profileInfo.append("전화번호 : "+user.Phone+"<br><br>");
        $profileInfo.append("회원님 탄신일 : "+user.Birth+"<br><br>");
        $profileInfo.append("<br><br>");

    })

}