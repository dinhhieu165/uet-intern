// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets


function sticky_header() {
    var scrollPosition = $(this).scrollTop();
    var el = $("#navbar-header");
    var next = el.next();
    if (scrollPosition >= 50) {
        $("#navbar-header").removeClass("sticky");
        $("#navbar-header").addClass("fixed");
        next.addClass("mt-50");
    }else{
        $("#navbar-header").removeClass("fixed");
        $("#navbar-header").addClass("sticky");
        next.removeClass("mt-50");
    }
}
$(window).on('scroll', sticky_header);
function hightlight_active( ) {
    var loc = window.location.pathname;
    $("#header-type-option li a").click(function(e){
        $("#header-type-select").html($(this).text()+' <span class="caret"> </span>');
    })
    $('#menu-extra').find('a').each(function() {
        $(this).parent().toggleClass('active', $(this).attr('href') == loc);
    });
}


$(document).ready(hightlight_active);
$(document).on('turbolinks:load',hightlight_active);
