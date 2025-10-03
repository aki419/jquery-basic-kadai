$(function() {
  // id属性がchange-colorの要素がクリックされたとき
  $('#change-color').on('click', function() {
    // id属性がtargetの要素の文字色を赤に変更
    $('#target').css('color', 'red');
  });

  // id属性がchange-textの要素がクリックされたとき
  $('#change-text').on('click', function() {
    // id属性がtargetの要素のテキストを変更
    $('#target').text('テキストが変更されました');
  });

  // id属性がfade-outの要素がクリックされたとき
  $('#fade-out').on('click', function() {
    // id属性がtargetの要素をフェードアウト
    $('#target').fadeOut();
  });
  
  // id属性がfade-inの要素がクリックされたとき
  $('#fade-in').on('click', function() {
    // id属性がtargetの要素をフェードイン
    $('#target').fadeIn();
  });
});