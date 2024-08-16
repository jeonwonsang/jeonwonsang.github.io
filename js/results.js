import { results , mbtis } from "./data.js";

const mbti = new URLSearchParams(location.search)
            .get('mbti');
console.log(location.search);
console.log(mbti)
// 가져온 mbti 유형의 번호를 출력
// ?mbti = isfp ===> 2인 것을 출력
console.log(mbtis[mbti]);
// 위의 results 중 1번 결과에 해당하는 자료 출력
console.log(results[mbtis[mbti]]);
let result = results[mbtis[mbti]];
// 그 중 결과의 제목을 출력
console.log(results[mbtis[mbti]].title);
// querySelector로 변수 선언
// --- innerHtml로 넣어주기
const title = document.querySelector('.page-title');
const resultCharacter = document.querySelector('.character');
const boxes = document.querySelectorAll('.box');
const jobs = document.querySelectorAll('.job');
const lectureUrl = document.querySelector('.lecture');
const lectureImage = document.querySelector('.lecture img');

title.innerHTML = result.title;
resultCharacter.src = result.character;
boxes.forEach(function(boxeEl, index){
    boxeEl.innerHTML = result.results[index];
});
jobs.forEach(function(job, index){
    job.innerHTML = result.jobs[index];
});
lectureImage.src = result.lectureImg;
lectureUrl.href = result.lectureUrl;
