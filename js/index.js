$(document).ready(function () {
  $(window).scroll(function () {
    var position = $(this).scrollTop();

    $(".section").each(function () {
      var target = $(this).offset().top;
      var id = $(this).attr("id");

      if (position >= target) {
        $("#sidenav  div  div  a").removeClass("active");
        $('#sidenav  div  div  a[href="#' + id + '"]').addClass("active");
      }
    });
  });
});
