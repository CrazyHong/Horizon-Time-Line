$(function () {    $("#sf-log-container").css("width", $(".sf-log-list li").length * 147 + "px");    $(".sf-log-recorder > span").hover(function () {        $(this).parents("li").addClass("thiscur");    }, function () {        $(this).parents("li").removeClass("thiscur");    });    $(".log-point").hover(function () {        $(this).parents("li").addClass("thiscur");    }, function () {        $(this).parents("li").removeClass("thiscur");    });});
