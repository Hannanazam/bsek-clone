import $ from 'jquery';

$("nav-link").first().addClass("active");
$(document).ready(function() {
    $("nav-link").click(function() {
    $("nav-link").first().removeClass("active");
    $(this).find().addClass("active");
});
});
