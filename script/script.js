
const skill_list = [
    {
        skill_name:'Api',
        skill_text:'지도, 우편번호 등 간단한 것을 연결하여 사용할 수 있으며 채팅 api 구현 가능합니다',
    },{
        skill_name:'Notion',
        skill_text:'사용하여 메모, 일정관리 등을 할 수 있습니다.',
    },{
        skill_name:'Figma',
        skill_text:'피그마를 활용하여 와이어프레임 및 프로토타입을 구성 할 수 있습니다.',
    },{
        skill_name:'Photoshop',
        skill_text:'사진 보정, 합성, 상세페이지, SNS 디자인 등 다양한 실무 디자인을 창의적으로 제작할 수 있습니다.',
    },{
        skill_name:'illustrator',
        skill_text:'간단한 캐릭터 디자인, 로고 디자인 등 깔끔하고 돋보이는 벡터 디자인을 제작할 수 있습니다.',
    },{
        skill_name:'GitHub',
        skill_text:'협업을 위해서 사용 할 수 있으며 안전하게 저장할 수 있습니다',
    },{
        skill_name:'Git',
        skill_text:'git 명령어를 이용한 github를 이용할 수 있습니다',
    },{
        skill_name:'Html',
        skill_text:'유효성 문제없이 HTML5 웹접근성에 올바르며 모든 사람들이 편하게 이용할 수 있는 HTML 구조를 구성할 수 있습니다.',
    },{
        skill_name:'Css',
        skill_text:'Css를 활용한 화려한 디자인과 애니메이션 기능을 활용한 디자인을 제작할 수 있습니다',
    },{
        skill_name:'Javascript',
        skill_text:'슬라이드, 메뉴, 스크롤 애니메이션 기능 등 최신 트렌드에 적용된 다양한 동적 기능을 구현할 수 있습니다.',
    },{
        skill_name:'jQuery',
        skill_text:'제이쿼리를 활용하여 Cookie 등 동적 기능을 구현할 수 있습니다',
    },{
        skill_name:'Gpt',
        skill_text:'Ai를 이용한 채팅 프로그램으로 chatGpt를 제작할 수 있습니다',
    },{
        skill_name:'React',
        skill_text:'리액트를 공부하고 있습니다.',
    },{
        skill_name:'Scss',
        skill_text:'Scss를 활용한 디자인을 제작할 수 있습니다',
    },{
        skill_name:'Php',
        skill_text:'php include 명령어를 이용한 공통 페이지 관리를 할 수 있습니다.',
    },
]


const skill_text = document.querySelector('.skill_text')




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

// 버튼 클릭시
const skill_btn = document.querySelectorAll('.skill_photo button')
const skill_img = document.querySelectorAll('.skill_photo button img')
const last_skill_photo = document.querySelectorAll('.last_skill_photo img')
const skill_title = document.querySelectorAll('.skill_title')
const skill_content = document.querySelectorAll('.skill_content')
const skill_explanation = document.querySelector('.skill_explanation p')

console.log(skill_btn,last_skill_photo,skill_title,skill_content)
console.log(skill_explanation,skill_img)

let hide = (name)=>{
    for(let i of name){
        i.style.display = 'none'
    }
}
let hide_filter = (name)=>{
    for(let i of name){
        i.style.filter = 'none'
    }
}
hide(last_skill_photo)
hide(skill_title)
hide(skill_content)

skill_btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide(last_skill_photo)
        hide(skill_title)
        hide(skill_content)
        last_skill_photo[i].style.display = 'block'
        skill_title[i].style.display = 'block'
        skill_content[i].style.display = 'block'
        skill_explanation.style.display = 'none'
    })
    t.addEventListener('mouseover',()=>{
        hide_filter(skill_img)
        skill_img[i].style.filter = 'opacity(50%)'
        console.log('.')
    })
})

// 슬라이드
let swiperContainer = document.querySelector('.swiper-container')
let swiper = new Swiper('.swiper-container', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 1,
    // 슬라이드 사이의 간격
    spaceBetween: 15,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1, 
    loop: true,
    autoplay:{delay:3000,},
    centeredSlides : true,
    direction:'horizontal',
    pagination: {
        el: '.swiper-pagination',
        type:'fraction'
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    //마우스 휠 가능
    mousewheel:{
        invert:true,  
    },
})

// 재생 정지 버튼으로 swiper 제어하기
const pause_btn = document.querySelector('#pause')
const start_btn = document.querySelector('#start')
pause_btn.addEventListener('click', ()=>{
    // 정지하고 싶은 swiper을 가진 변수명 연결
    swiper.autoplay.stop()
})
start_btn.addEventListener('click',()=>{
    swiper.autoplay.start()
})
console.log(start_btn)

// 마우스 바꾸기
const circle = document.querySelector('.circle')
window.addEventListener('mousemove', (e)=>{
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})

const result_btn = document.querySelectorAll('.result_btn a')

console.log(result_btn)
result_btn[6].addEventListener('click',()=>{
    alert('현재 제작중 입니다.')
})
result_btn[7].addEventListener('click',()=>{
    alert('현재 제작중 입니다.')
})