// html 요소 가져오기
const scroll = document.querySelector(".show_more");
const modal = document.querySelector("#modal_scroll");
const modal_wrap = document.querySelector(".modal_wrap");
const subscribe = document.querySelector(".sub_btn");
const sub_img = document.querySelector("#modal_img");
const sub_close = document.querySelector(".sub_close");
const scr_btn = document.querySelector(".scroll-up");

// 모달 창 열기
function openModal() {
  modal.style.display = 'flex';
}

// 구독 창 열기
function openSub() {
  sub_img.style.display = 'flex';
}

function goUp() {
  window.scrollTo({top: 0, behavior: "instant"});
}

// 버튼 클릭 이벤트
scroll.addEventListener('click', openModal);
subscribe.addEventListener('click', openSub);
sub_close.addEventListener('click', closeSub);
scr_btn.addEventListener('click', goUp);

function closeModal(){
  modal.style.display = 'none';
};

// 구독 창 닫기
function closeSub() {
  sub_img.style.display = 'none';
}

//모달 창 윈도우 클릭으로 닫기
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
}

// 무한 스크롤
// modal_wrap.addEventListener("scroll", function () {
//   if (modal_wrap.offsetHeight + modal_wrap.scrollTop >= modal_wrap.scrollHeight) {
//     const img = document.createElement("img");
//     img.src = `https://picsum.photos/600`;
//     img.style.marginBottom = "90px";
//     img.style.borderRadius = "30px";
//     img.style.filter = "drop-shadow(10px 10px 30px #c3c3c3)";
//     modal_wrap.appendChild(img);
//   }
// });

// 아래와 같이 fetch api 사용 추가
modal_wrap.addEventListener("scroll", function () {
  if (modal_wrap.offsetHeight + modal_wrap.scrollTop >= modal_wrap.scrollHeight) {
    const img = document.createElement("img");
    fetch("https://picsum.photos/600/600/?random")
      .then((response) => response.blob())
      .then((blob) => {
        img.src = URL.createObjectURL(blob);
        img.style.marginBottom = "90px";
        img.style.borderRadius = "30px";
        img.style.filter = "drop-shadow(10px 10px 30px #c3c3c3)";
        modal_wrap.appendChild(img);
      });
  }
});

