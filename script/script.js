
const abiut_list = [
    {
        title:'이름',
        text:'김은지'
    },{
        title:'이메일',
        text:'s202571@naver.com',
    },{
        title:'전화번호',
        text:'010-8878-6280',
    },{
        title:'github 주소',
        text:'바로가기',
    },{
        title:'주소',
        text:'경기도 부천시',
    },{
        title:'학력',
        text:'인천재능대학교(화장품과)',
    }
]

const abiut_container = document.querySelector('.abiut_container')

// abiut box 생성 함수 수정
function createbox(abiut) {
    let abiut_box = document.createElement('div');
    abiut_box.className = 'box'

    // title 
    let title = document.createElement('h3');
    title.innerHTML = abiut.title;
    title.classList.add('abiut_title')
    abiut_box.appendChild(title);

    // content
    let content = document.createElement('p');
    content.innerHTML = abiut.text;
    content.classList.add('abiut_title')
    abiut_box.appendChild(content);

    return abiut_box; // 요소 반환
}

// 페이지에 추가
abiut_list.forEach((abiut) => {
    const abiut_box = createbox(abiut);
    abiut_container.appendChild(abiut_box);
})
console.log(abiut_container)