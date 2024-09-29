$(document).ready(function() {
    $(".drag-task").draggable();

    $(".drop-task").droppable({
        drop: function(event, ui) {
            $(".drag-task").draggable("option", "revert", false);
        }
    });

    $(".drop_todo").droppable({
        drop: function(event, ui) {
            let currentElement = $('span').siblings().attr('title');

            $("drag-task").find(currentElement).css("background-color", "blue");
        }
    });
});