
// JQuery readiness
$().ready(function(){ 

    //Displays current day & time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm: a")); 

    //assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        console.log(this);
        let value = $(this).siblings(".description").val(); 
        let time = $(this).parent().attr("id"); 

        //Save to Local Storage
        localStorage.setItem(time, value);

    })

    // Save to Local Storage 
    $("#hr9 .description").val(localStorage.getItem("hour9"));
    $("#hr10 .description").val(localStorage.getItem("hour10"));
    $("#hr11 .description").val(localStorage.getItem("hour11"));
    $("#hr12 .description").val(localStorage.getItem("hour12"));
    $("#hr13 .description").val(localStorage.getItem("hour13"));
    $("#hr14 .description").val(localStorage.getItem("hour14"));
    $("#hr15 .description").val(localStorage.getItem("hour15"));
    $("#hr16 .description").val(localStorage.getItem("hour16"));
    $("#hr17 .description").val(localStorage.getItem("hour17"));

    // Function to get time
    function timeTrack() {
        let currentTime = moment().hour();

        $(".time-block").each(function () {
            let blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentTime)
            
            if (blockHour < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockHour === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    timeTrack(); 
})
