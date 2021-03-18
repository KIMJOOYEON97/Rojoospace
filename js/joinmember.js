// 유효성검사
document.memberFrm.onsubmit = function(){

    var userId = document.getElementById("userId");
    var pwd = document.getElementById("pwd");
    var pwdCheck = document.getElementById("pwdCheck");
    var userName = document.getElementById("userName");
    var email = document.getElementById("email");
    var tel1 = document.getElementById("tel1");
    var tel2 = document.getElementById("tel2");
    var tel3 = document.getElementById("tel3");
    var birth = document.getElementById("member_birth");


    //1.아이디검사
    //(영문소문자/숫자, 4~16자)
    var regExp1 = /^[a-z][a-z\d]{4,12}$/;
    var regExp2 = /[0-9]/;
    if(!regExpTest(regExp1
                  ,userId
                  ,"아이디는 영소문자로 시작하는 4~12글자입니다."))
        return false;
    if(!regExpTest(regExp2
                  ,userId
                  ,"아이디는 숫자를 하나이상 포함하세요."))
        return false;


    //2.비밀번호 확인 검사
    // (영문 대소문자(반드시 포함)/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
    var regExpPw1=/^.{10,16}$/;
    var regExpPw2= /[a-zA-Z]+([*&~^%$#@!+-]|\d)+/g;
 


    if(!regExpTest(regExpPw1, pwd, "비밀번호는 10자~16자자리이어야 합니다.")){
            return false;
    }
    if(!regExpTest(regExpPw2, pwd, "비밀번호는 영문 대소문자/숫자/특수문자 중 2가지 이상 조합해야 합니다.")){
            return false;
    }
    
    //비밀번호일치여부
    if(!isEqualPwd()){
        return false;
    }

    //3.이름검사
    //한글2글자 이상만 허용. [가-힣] 으로 해도되긴 하지만 자음만(ㄱㄴㄷㄹ)있으면 필터링이 안됨
    var regExp3 = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
    if(!regExpTest(regExp3,userName,"한글2글자이상 입력하세요."))
        return false;


    //4.이메일 검사
    // 4글자 이상(\w = [a-zA-Z0-9_], [\w-\.]) @가 나오고
    // 1글자 이상(주소). 글자 가 1~3번 반복됨
    if(!regExpTest(/^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/, email, "이메일 형식에 어긋납니다."))
            return false;

    
    
    //5. 전화번호 검사
    // 전화번호 앞자리는 010, 두번째 자리는 3~4자리 숫자, 세번째 자리는 4자리 숫자
    if (!regExpTest(/^010$/, tel1, "번호 2자리 이상 입력해야합니다."))
            return false;
    if (!regExpTest(/^[0-9]{3,4}$/, tel2, "번호 3자리 이상 입력해야합니다."))
            return false;
    if (!regExpTest(/^[0-9]{4}$/, tel3, "4자리 번호 입력해야합니다."))
            return false;

    return true, alert('회원가입을 환영합니다.'),saveUser();
}


function isEqualPwd(){
    var pwd = document.getElementById("pwd");
    var pwdcheck = document.getElementById("pwdCheck");
    if(pwd.value == pwdcheck.value){
        return true;
    }
    else{
        alert("비밀번호가 일치하지 않습니다.");
        pwd.select();
        return false;
    }
}

function regExpTest(regExp, el, msg){
    if(regExp.test(el.value))
        return true;
    //적합한 문자열이 아닌 경우
    alert(msg);
    el.value=""; //값 초기화
    el.focus();
    return false;
}

//회원정보 저장
function saveUser(){

    var userId = document.getElementById("userId");
    var pwd = document.getElementById("pwd");
    var userName = document.getElementById("userName");
    var email = document.getElementById("email");
    var tel1 = document.getElementById("tel1");
    var tel2 = document.getElementById("tel2");
    var tel3 = document.getElementById("tel3");
    var birth = document.getElementById("member_birth");

    var user={
        Id: $(userId).val(),
        Pw: $(pwd).val(),
        Name : $(userName).val(),
        Email: $(email).val(),
        Phone: $(tel1).val()+$(tel2).val()+$(tel3).val(),
        Birth: $(birth).val()
    }

    var users= JSON.parse(localStorage.getItem('users')) ||[];

    users.push(user);

    var jsonUsers = JSON.stringify(users);
    
    localStorage.setItem('users',jsonUsers);

    document.entryFrm.reset();


}