/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/

//SELECTS HELLO CLASS AND CHANGES BACKGROUND COLOR USING SHORTHAND CSS
$('.hello').on('click', function () {
    $(this).css("background", "red")
});


/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px.
 When you mouse off of it change it back */

//SELECTS H1 ELEMENT AND ADDS, THEN REMOVES A 20PX HEIGHT AND WIDTH CLASS
$("h1").on("mouseover", function () {
    $(this).addClass("changeSize")
}).on("mouseout", function () {
    $(this).removeClass("changeSize")
});


/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */

//SELECTS FIRST ELEMENT IN HELLO CLASS AND APPENDS A "." ON EVERY CLICK
$(".hello:first").click(function(){
    $(this).append(".");
});
