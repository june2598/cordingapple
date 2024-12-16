// 첫번째 버튼 누르면
// 모든 버튼에 붙은 orange 클래스 제거
// orange 클래스를 부착
// 첫번째 div박스를 보여줘야됨
// 모든 div박스에 잇는 show 제거
// 첫번째 div박스에 show 클래스명 부착


// let btnNum = $('.tab-button').length;
// for (let i = 0; i < btnNum; i++) {
//   $('.tab-button').eq(i).on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(i).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(i).addClass('show');
//   });
// }


// var btn = document.querySelectorAll('.tab-button');

// $('.list').click(function (e) {
//   for (let i = 0; i < btn.length; i++) {
//     if (e.target == btn[i]) {
//       탭열기(i);
//       break;
//     }
//   }
// });

$('.list').click(function (e){
  탭열기(e.target.dataset.id);
})



function 탭열기(숫자) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(숫자).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(숫자).addClass('show');
}






// $('.tab-button').eq(0).on('click', function () {
//   // 모든 버튼에 붙은 orange 클래스 제거
//   $('.tab-button').removeClass('orange');
//   // orange 클래스를 부착
//   $('.tab-button').eq(0).addClass('orange');
//   // 모든 div박스에 잇는 show 제거
//   $('.tab-content').removeClass('show');
//   // 첫번째 div박스에 show 클래스명 부착
//   $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).on('click', function () {
//   // 모든 버튼에 붙은 orange 클래스 제거
//   $('.tab-button').removeClass('orange');
//   // orange 클래스를 부착
//   $('.tab-button').eq(1).addClass('orange');
//   // 모든 div박스에 잇는 show 제거
//   $('.tab-content').removeClass('show');
//   // 첫번째 div박스에 show 클래스명 부착
//   $('.tab-content').eq(1).addClass('show');
// });


// $('.tab-button').eq(2).on('click', function () {
//   // 모든 버튼에 붙은 orange 클래스 제거
//   $('.tab-button').removeClass('orange');
//   // orange 클래스를 부착
//   $('.tab-button').eq(2).addClass('orange');
//   // 모든 div박스에 잇는 show 제거
//   $('.tab-content').removeClass('show');
//   // 첫번째 div박스에 show 클래스명 부착
//   $('.tab-content').eq(2).addClass('show');
// });

