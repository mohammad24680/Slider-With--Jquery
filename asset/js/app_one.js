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
    for (i = 0; i < 8; i++) {
      temp = (
        Number($(".slider>div:nth-of-type(" + i + ")").attr("data-num")) - 1
      ).toString();

      if (temp == "-1") {
        $(".slider>div:nth-of-type(" + i + ")").attr("data-num", "6");
      } else {
        $(".slider>div:nth-of-type(" + i + ")").attr("data-num", temp);
      }

      $(".slider>div:nth-of-type(" + i + ")").attr(
        "class",
        "img" + $(".slider>div:nth-of-type(" + i + ")").attr("data-num")
      );
    }
  } else if (number < 3) {
    for (i = 0; i < 8; i++) {
      temp = (
        Number($(".slider>div:nth-of-type(" + i + ")").attr("data-num")) + 1
      ).toString();

      if (temp == "7") {
        $(".slider>div:nth-of-type(" + i + ")").attr("data-num", "0");
        $(".img6").css("opacity", "1");
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
