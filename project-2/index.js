$(".question").click(function () {
    // console.log($(this).next());
    $(this).next().fadeToggle("fast"); //next() to get the immediate sibbling
    // console.log($(this).children());
    $(this).children().toggleClass("collapse");
})



// $("#q1").click(function () {
//     $("#a1").fadeToggle("fast");
//     $("#arrow1-down, #arrow1-up").toggleClass("collapse");
// })

// $("#q2").click(function () {
//     $("#a2").fadeToggle("fast");
//     $("#arrow2-down, #arrow2-up").toggleClass("collapse");
// })

// $("#q3").click(function () {
//     $("#a3").fadeToggle("fast");
//     $("#arrow3-down, #arrow3-up").toggleClass("collapse");
// })