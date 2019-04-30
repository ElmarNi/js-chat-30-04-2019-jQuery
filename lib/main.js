"use strict";

$(document).ready(function () {
  "use strict";

  $(document).on("click", ".extendable-chat", function () {
    $(this).hide(1500);
    $(this).next().show(2000);
  });
  $(document).on("click", ".close-icon", function () {
    $(this).parents(".main-chat").hide(2000);
    $(this).parents(".main-chat").prev().show(1500);
  });
  $("input").keypress(function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      replyUploader();
    }
  });
  $(".send").click(replyUploader);
  $(document).on("click", ".right-div img", function () {
    toggleSelected(this);
  });
  $(document).on("click", ".left-div img", function () {
    toggleSelected(this);
  });
  $(document).on("click", ".delete", function () {
    $(".reply").each(function (index, element) {
      if ($(element).hasClass("selected")) {
        $(element).remove();
      }
    });
    $(".delete").hide(500);
  });
});

function replyUploader() {
  var replyArr = [];
  var inputValue = $(".inputs input").val();
  var reply = $("<div></div>");
  $(reply).text(inputValue.trim());

  if (inputValue[0] == inputValue[0].toLowerCase() && isNaN(inputValue)) {
    $("<img>").attr("src", "img/costumer.jpg").appendTo(reply);
    $(reply).addClass("reply text-right right-div");
    $(reply).appendTo(".main-chat .title");
    replyArr.push(reply);
  }

  if (inputValue[0] == inputValue[0].toUpperCase() && isNaN(inputValue)) {
    $(reply).addClass("reply left-div");
    $("<img>").attr("src", "img/download.png").prependTo(reply);
    $(reply).appendTo(".main-chat .title");
    replyArr.push(reply);
  }

  $(".inputs input").val("");
  document.querySelector('.title').scrollTo(0, document.querySelector('.title').scrollHeight);
}

function toggleSelected(which) {
  if ($(which).parent().hasClass("selected")) {
    $(which).parent().removeClass("selected");
  } else {
    $(which).parent().addClass("selected");
  }

  $(which).parent().parent().children().each(function (index, element) {
    if ($(element).hasClass("selected")) {
      $(".delete").show(500);
      return false;
    } else {
      $(".delete").hide(500);
    }
  });
}