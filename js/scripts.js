$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var startInput = $ ("input#start-time").val();
    var endInput = $ ("input#end-time").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".start-time").text(startInput);
    $(".end-time").text(endInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
