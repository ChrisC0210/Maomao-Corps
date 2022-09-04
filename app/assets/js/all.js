$(function() {
  console.log('Hello Bootstrap5');
  $(".login-click").click(function () {
    $(this).text(function(i, text){
        return text === "登入/註冊" ? "登出" : "登入/註冊";
    })
 });
});