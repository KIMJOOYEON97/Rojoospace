document.loginFrm.onsubmit = function(){
    var users = JSON.parse(localStorage.getItem('users'))||[]
    console.log(users);

    var $inputId = $("#input-id").val();
    var $inputPw = $("#input-pw").val();
    console.log($inputId);
    console.log($inputPw);

    if(users.length){
        console.log(users.length);
        $.each(users,function(i,user){
            if(user.Id == $inputId && user.Pw ==$inputPw){
                return true, alert("환영합니다, "+user.Name+"님.")
            }
            if(user.Id != $inputId && user.Pw ==$inputPw){
                alert("잘못된 아이디 입니다.")
                return false;
            }
            if(user.Id == $inputId && user.Pw !=$inputPw){
                alert("잘못된 비밀번호 입니다.")
                return false;
            }
            else{
                alert("잘못된 정보입니다. 다시입력하세요!")
            }
        });
    }
    else{
        alert("조회된 회원이 없습니다. 첫 회원이 되어주세요!")
    }

    return false;
}