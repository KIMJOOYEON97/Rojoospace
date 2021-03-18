//Dom의 요소들을 잡아준다.
var form = document.querySelector("#form__wrap");
var checkAll = document.querySelector("#chkAll");
var checkBoxes = document.querySelectorAll('.checkbox_group')
var submitButton = document.querySelector('#register');
var move = document.querySelector("#move")

var agreements={
    usingtermch: false, //필수
    personalinforqch: false, //필수
    personalinfoch: false //선택
}

// form.addEventListener('submit',(e)=>e.preventDefault());//새로고침 되는 것을 막음

window.onload=function(){checkBoxes.forEach((item) => item.addEventListener('input',toggleCheckbox));}

function toggleCheckbox(e){
    var{checked, id} = e.target;
    agreements[id] = checked;
    this.parentNode.classList.toggle('active');
    checkAllStatus();
    toggleSubmitButton();
}

function checkAllStatus(){
    var{usingtermch,personalinforqch, personalinfoch} =agreements;
    if(usingtermch&&personalinforqch&&personalinfoch){
        // console.log("되는데..")
        checkAll.checked=true;
    }else{
        checkAll.checked=false;

    }
}

function toggleSubmitButton(){
    var{personalinfoch,usingtermch,personalinforqch} = agreements;
    if(personalinfoch||(usingtermch&&personalinforqch)){
        submitButton.disabled= false;
    }else{
        submitButton.disabled=true;
        // move.disabled= true;
        // // document.addEventListener("DOMContentLoaded", function(event) {
        // //     document.getElementById("Button").disabled = true;
        // //   });
        // // window.addEventListener('load', () => {
        // //     document.querySelector('#Button').disabled = true;
        // //   });
        // // function Clicked(){
        // //     document.getElementById("Button").disabled = true;
        // // }
        // if (file.disabled) {
        //     self.volOptions[file.volumeid].disabled = file.disabled;
        // }
    }
}


checkAll.addEventListener('click',function(e){
    var{checked} = e.target;
    // var checked = e.target.checked; 구조분해할당
    if(checked){
        checkBoxes.forEach((item)=>{
            item.checked = true;
            agreements[item.id] = true;
            // item.parentNode.classList.add('active');
        });
    }
    else{
        checkBoxes.forEach((item)=>{
            item.checked=false;
            agreements[item.id] = false;
            // item.parentNode.classList.remove('active');
        });
    }
    toggleSubmitButton();
})

// function move(){
//     location.href="./joinmember_b.html"
// }