$(document).ready(function() {
    // Below is about drag-section
    $("#drag-around").draggable();

    // Below is about drop-section
    $("#drag-target").draggable({
        revert: "invalid", // Makes the item return if not dropped
        start: function() {
            $(this).css("background-color", ""); // Reset background when starting drag
        },
        drag: function(event, ui) {
            $("#droppable").css("background-color", "")
            .find("p")
            .html("Drop here"); // Change back to original
        }
    });

    $("#droppable").droppable({
        drop: function(event, ui) {
            $(this).css("background-color", "yellow") // Change to yellow when an item is dropped
                    .find("p")
                    .html("Dropped!");
            $("#drag-target").css("background-color", ""); // Reset background
            $("#drag-target").draggable("option", "revert", false);
        }
    });

    // Below is for resizable section
    $( "#resizable" ).resizable();

    // Below is for dialog section
    $( "#dialog" ).dialog();
});