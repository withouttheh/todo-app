$(document).ready(function() {

    // Date settings
    const months = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ];

    const now = new Date();
    let dayOfWeek = days[now.getDay()];
    let dayOfMonth = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    $('.date h2').text(dayOfWeek);
    $('.day').text(dayOfMonth);
    $('.month').text(month + ',');
    $('.year').text(year);

    // Input
    $(':text').val("");

    let form = $('.text-bar');

    // Add task
    let count = 0;

    form.submit(function(e) {
            e.preventDefault();
            // Select input value and task panel div
            let taskInput = $(':text');

            if (taskInput.val() === "") {
                alert('Please add a task!');
                return
            } else {
                count++;
                // Add task to task panel
                let taskPanel = $('.task-panel');
                let task = '<div class="task"><label for="check-' + count + '"><input type="checkbox" name="checkbox" id="check-' + count + '"></label><h4>' + taskInput.val() + '</h4><span><img src="images/delete.svg" alt="delete"></span></div>';
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