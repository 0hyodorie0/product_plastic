let table = $('.prd_size_table_wrap');
$('.view_size_guide').on('click', function() {
    if (table.hasClass('active')) {
        table.removeClass('active')
    } else {
        table.addClass('active');
    }
});
$('.table_close_btn').on('click', function() {
    table.removeClass('active');
});

let mobile = $('.mobile_menu_btn');
let header = $('.header');
if ($(window).width() > 1112) {
    header.addClass('active');
} else {
    header.removeClass('active')
}
$('.mobile_menu').on('click', function() {
    mobile.toggleClass('active')
})