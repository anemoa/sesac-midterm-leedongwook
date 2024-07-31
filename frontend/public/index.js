function getTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then( json => {
        console.log(json.slice(0,10));

        const lists = json.slice(0, 10);
        const todoList = document.querySelector('#todo_list li');
        for(i = 0; i < 10; i++){
            todoList.textContent += lists[i].title;
        }

    })
}

getTodos();

// document.addEventListener("DOMContentLoaded", ()=> {
// 	getTodos();
// });


function addTodo(){
    console.log('click fetch Post');
    // 폼 선택하기
    const form = document.forms['todo'];

    // 서버로 보낼 데이터 양식 생성하기
    const data = {
        illdo: form.illdo.value,
    };

    // fetch: POST 요청시 headers 옵션을 통해 JSON 포맷을 사용한다고 알려줘야 함\
    // => body에서도 json 형식으로 데이터를 바꿔 보내야 함
    fetch(`fetch`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // js object를 json으로 바꿔서 body에 보내야 한다.
    })
        .then((res) => {
            console.log(res);
            return res.json(); // res 객체로부터 json 포맷의 응답을 js object로 변환
        })
        .then((data) => {
            console.log(data); // js object
            resultBox.textContent = `POST /fetch 요청에 의한 응답 완료! ${data.name}님은 ${data.gender}시군요`;
            resultBox.style.color = 'violet';
        });
}