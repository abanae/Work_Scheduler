

$(document).ready(function(){ 
    //Displays current day & time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
    //assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        //Save to Local Storage
        localStorage.setItem(time, text);
    })
})
