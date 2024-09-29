$(document).ready(function() {
    $(".drag-task").draggable();

    $(".drop-task").droppable({
        drop: function(event, ui) {
            $(".drag-task").draggable("option", "revert", false);

            let dropSection = $(this).parent().attr("id");

            let color;

            switch(dropSection) {
                case 'todo':
                    color = 'blue';
                    break;
                case 'in-progress':
                    color = 'orange';
                    break;
                case 'for-approval':
                    color = 'pink';
                    break;
                case 'testing':
                    color = 'violet';
                    break;
                case 'done':
                    color = 'green';
                    break;
                default :
                    color = 'white';
            }

            $(ui.draggable).css("background-color", color)
                            .css("color", "white");
        }
    });
});