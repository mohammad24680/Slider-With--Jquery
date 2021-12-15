var i = 0;
number = $(".slider>div").attr("data-num");
$(".slider>div").mousemove(function () {
  if ($(this).attr("data-num") == 3) {
    for (i = 0; i < 7; i++) {
      $(this).children("h3").css("transform", "scale(1)");
      $(this).prevAll().children("h3").css("transform", "scale(0)");
      $(this).nextAll().children("h3").css("transform", "scale(0)");
      $(this).children("button").css("transform", "scale(1)");
      $(this).prevAll().children("button").css("transform", "scale(0)");
      $(this).nextAll().children("button").css("transform", "scale(0)");
    }
  }
});
$(".slider>div").click(function () {
  number = $(this).attr("data-num");
  if (number >= 4) {
    for (i = 0; i < 7; i++) {
      temp = (
        Number($(".slider>div:nth-of-type(" + i + ")").attr("data-num")) - 1
      ).toString();
      if (temp == "-2") {
        $(".slider>div:nth-of-type(" + i + ")").attr("data-num", "-2");
      } else {
        $(".slider>div:nth-of-type(" + i + ")").attr("data-num", temp);
      }
      $(".slider>div:nth-of-type(" + i + ")").attr(
        "class",
        "img" + $(".slider>div:nth-of-type(" + i + ")").attr("data-num")
      );
    }
  } else if (number < 3) {
    for (i = 0; i < 7; i++) {
      temp = (
        Number($(".slider>div:nth-of-type(" + i + ")").attr("data-num")) + 1
      ).toString();
      if (temp == "9") {
        $(".slider>div:nth-of-type(" + i + ")").attr("data-num", "0");
      } else {
        $(".slider>div:nth-of-type(" + i + ")").attr("data-num", temp);
      }
      $(".slider>div:nth-of-type(" + i + ")").attr(
        "class",
        "img" + $(".slider>div:nth-of-type(" + i + ")").attr("data-num")
      );
    }
  }
});
