$(document).ready(function(){$(".toggle_menu").click(function(){$(".top_menu").is(":visible")?$(".top_menu").fadeOut(600):$(".top_menu").fadeIn(600)}),$(".top_menu ul a").click(function(){$(".top_menu").fadeOut(600),$(".sandwich").toggleClass("active")}).append("<span>"),$(".toggle_menu").click(function(){$(".sandwich").toggleClass("active")})});