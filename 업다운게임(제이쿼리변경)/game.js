
//사용할 변수
    let ran = 0;
    let count = 1;

//윈도우가 로드된 후 실행하기위함.
$(function() {
    /* 
    const userNum = document.querySelector("#user_num");    // 입력 받는 곳
    const startButton = document.querySelector("#start_button");    // 시작 버튼
    const gameForm = document.querySelector("#game_form");  // 입력 받는 form(submit)
    gameForm.firstElementChild.disabled = true; // disabled 사용할수 없다=참으로 되어있어서
    gameForm.lastElementChild.disabled = true; //막혀있다고 생각하면됨.

    원하는 객체에 이벤트 리스너 호출
    startButton.addEventListener('click', gameStart);
    gameForm.addEventListener('submit', gameCheck);
    //form요소는 submit 이벤트를 이용하여 함수를 실행시킬수있다.
    */
   $("#start_button").on("click",function() { // 게임 시작
            //start_button의 css backgroundColor값 랜덤하게 바꾸기
            const r = Math.floor(Math.random()*256); //0~255 , rgb( r, g, b)
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
            //메소드나 함수로 전달해 주는 것은 항상 값 (문자열, 숫자, blooean)
            //변수를 넣으면 변수의 값, 함수를 넣으면 함수의 결과 값이 전달된다.
            $("#start_button").css("backgroundColor", `rgb(${r},${g},${b})`);

            // 랜덤 숫자를 할당하고 count값 및 창의 내용 초기화
            ran = Math.floor ( Math.random()*100 + 1 ); // 0~99까지의 값이 랜덤으로 들어간다, 1~100하고싶으면 +1하면됨!, floor 정수
            count = 1;

        /*/ 입력 받는 form(submit)
        const gameForm = document.querySelector("#game_form");  
        gameForm.firstElementChild.disabled = false; // disabled 사용할수 없다=참으로 되어있어서
        gameForm.lastElementChild.disabled = false; //막혀있다고 생각하면됨.*/

        $("#game_form").children().prop("disabled",false);
        //explain내용 수정
        /*const explan = document.querySelector("#explan");
        explan.textContent = "게임이 시작되었습니다. 1~100사이의 수를 입력하세요";*/
        $("#explan").text("게임이 시작되었습니다. 1~100사이의 수를 입력하세요");

   });

   $("#game_form").on("submit",function(event){
        event.preventDefault();
        const userNum = $("#user_num").prop("value");
        //attr() : 문서에 이미 작성된 고정값을 가져옴
        //prop() : 바뀌는 값
            if(ran > userNum) {
                $("#explan").text(userNum + " 보다 큽니다");
                //explan.textContent = userNum + " 보다 큽니다";
            
            }
            else if ( ran < userNum) {
                $("#explan").text(userNum + " 보다 작습니다");
                //explan.textContent = userNum + " 보다 작습니다";
                
            }
            else if (ran == userNum) {
                $("#explan").text(userNum + " 정답입니다!");
                $("#game_form").children().prop("disabled",true);
                //랭킹
                    //prompt를 열어서 이름입력
                    
                    const name = prompt("이름을 입력해주세요.");
                    //새로운 노드를 생성하여 (ul태그) li로 이름과 횟수(count)기록 
                    $("#rank").append($("<li>").text(name + "님, " + count + "회 성공!"));
            }
            $("#result").text(`${count++}번째 입니다`);
            $("#user_num").prop("value","");
   });
   $("#game_form").children().prop("disabled",true);
})


//랜덤 숫자와 입력된 값 확인
    function gameCheck(e) {
        // submit으로 들고오면 창 새로고침이 발생
        e.preventDefault();  //새로고침을 막아줌
        console.log(ran)

        // DOM객체들고오기
        /*
        const explan = document.querySelector("#explan");
        const userNum = document.querySelector("#user_num");
        const result = document.querySelector("#result");
        const rank = document.querySelector("#rank");
        */
        //그 DOM객체의 값으로 ran값 비교
        //if문을 이용해서 DOM객체값 수정

        $("#result").text(`시도한 횟수는 ${count}번 입니다.`) ;
        count++;
        userNum.value = "";
        
    }

