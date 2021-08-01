$(document).ready(function() {

    // Date settings
    var months = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ];

    var now = new Date();
    var dayOfWeek = days[now.getDay()];
    var dayOfMonth = now.getDate();
    var month = months[now.getMonth()];
    var year = now.getFullYear();

    $('.date h2').text(dayOfWeek);
    $('.day').text(dayOfMonth);
    $('.month').text(month + ',');
    $('.year').text(year);

    // Input
    $(':text').val("");

    var form = $('.text-bar');

    // Add task
    var count = 0;

    form.submit(function(e) {
            e.preventDefault();
            // Select input value and task panel div
            var taskInput = $(':text');

            if (taskInput.val() === "") {
                alert('Please add a task!');
                return
            } else {
                count++;
                // Add task to task panel
                var taskPanel = $('.task-panel');
                var task = '<div class="task"><label for="check-' + count + '"><input type="checkbox" name="checkbox" id="check-' + count + '"></label><h4>' + taskInput.val() + '</h4><span><img src="images/delete.svg" alt="delete"></span></div>';
                taskPanel.append(task).fadeIn(1000);
                $('#text-input').val("");

            };
        })
        //On check
    $(document).on('change', 'input[type="checkbox"]', function() {
        if ($(this).is(':checked')) {
            $(this).closest('div').children('h4')
                .css({ 'text-decoration': 'line-through', 'text-decoration-thickness': '0.1em' })
                .fadeTo('normal', .75);
            $(this).css('border', 'none');
        } else {
            $(this).closest('div').children('h4')
                .css('text-decoration', 'none')
                .fadeTo('normal', 1);

            $(this).css('border', '1px solid black');
        }
    })

    //Delete specific task
    $(document).on('click', 'span > img', function() {
        $(this).closest('div').fadeOut(600, function() {
            $(this).closest('div').remove();
        });

    })
})