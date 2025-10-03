$(function() {
 /*
 // id属性がfadeOutの要素がクリックされたら
 $('#fadeOut').on('click',function() {
  // フェードアウトする
  //$('.box').fadeOut(3000,function() {alert('fadeOut完了'); 
  $('.box').fadeOut();
  
  // id属性がfadeInの要素がクリックされたら
  $('#fadeIn').on('click', function() {
    // フェードインする
    $('.box').fadeIn();
  });
  */
 // id属性がfadeToggleの要素がクリックされたら
 $('#fadeToggle').on('click', function() {
  // フェードイン・アウトを切り替える
  $('.box').fadeToggle();
 });
});