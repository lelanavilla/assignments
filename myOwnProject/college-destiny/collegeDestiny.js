//For jQwery UI Datepicker plug in Animation
$(function() {
    $("#datepicker").datepicker();
    $("#anim").on("change", function() {
        $("#datepicker").datepicker("option", "showAnim", $(this).val());
    });
});
$(".selector").datepicker({
    showAnim: "slide"
});