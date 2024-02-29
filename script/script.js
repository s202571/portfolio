
const about_list = [
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
const skill_list = [
    {
        skill_name:'Api',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'Notion',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'Figma',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'Photoshop',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'illustrator',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'GitHub',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'Git',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'Html',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'Css',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'Javascript',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'jQuery',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'Gpt',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'React',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },{
        skill_name:'Scss',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있습니다',
    },
]

const about_container = document.querySelector('.about_container')
const skill_text = document.querySelector('.skill_text')
console.log(about_container)

// about box 생성 함수 수정
about_list.forEach((about) => {
    const about_box = createBox(about);
    about_container.appendChild(about_box);
});

function createBox(about) {
    const box = document.createElement('div');
    box.classList.add('box');

    const title = document.createElement('h3');
    title.textContent = about.title;
    title.classList.add('about_title')

    const content = document.createElement('p');
    content.textContent = about.text;
    content.classList.add('about_content')

    box.appendChild(title);
    box.appendChild(content);

    return box;
}

console.log(about_container)



// skill_text skill_box 생성 함수 수정
function createbox(skill) {
    let skill_box = document.createElement('div');
    skill_box.className = 'box'

    // title
    let skill_title = document.createElement('h3');
    skill_title.innerHTML = skill.skill_name;
    skill_title.classList.add('skill_title')
    skill_box.appendChild(skill_title);

    // content
    let skill_content = document.createElement('p');
    skill_content.innerHTML = skill.skill_text;
    skill_content.classList.add('skill_content')
    skill_box.appendChild(skill_content);

    return skill_box; // 요소 반환
}

// 페이지에 추가
skill_list.forEach((skill) => {
    const skill_box = createbox(skill);
    skill_text.appendChild(skill_box);
})