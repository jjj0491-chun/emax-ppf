$(function() {
  $("<div>")
    .load("./components/head.html", function() {
      $("head").append($(this).contents());
    });
});
