function choiceRadio(element){
    
    // var checked = document.querySelector("[name=category]:checked").value;
    // document.getElementById("phoneView").style.display = "none";

    // var choiceRadio = document.getElementsByName("check");
    // console.log(choiceRadio);
    // var show ="";
    // for(var i=0; i<choiceRadio.length; i++){
    //     choiceRadio[i].checked?  show="block":show="none";
    // }

    // var checked =  "";
    // var unchecked ="";
    // for(var i=0; i<choiceRadio.length; i++){
    //     if(choiceRadio[i].checked?  
    //         document.getElementById(checked+"View").style.display ="block":
    //         document.getElementById(checked+"View").style.display ="block";){
    //         checked = choiceRadio[i].value;
    //         // unchecked = choiceRadio[choiceRadio.length-i].value;
    //         break;
    //     }
    // }
    
    /*라디오 버튼에 따라 나타나는 것이 다름  */
    // document.getElementById(unchecked+"View").style.display = "none";
    // document.getElementById(checked+"View").style.display ="block";


    var choiceRadio = element.value;
			
    //모두 안보이게 하기
    document.getElementById("phoneView").style.display = "none";	
    document.getElementById("emailView").style.display = "none";

    console.log(choiceRadio);
    //특정요소만 보이게 하기
    document.getElementById(choiceRadio+"View").style.display = "block";
}