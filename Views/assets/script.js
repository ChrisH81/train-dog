
$(document).ready(function (){
   

    // On Click Function to create profile object or redirect if invalid
   $("#profileSubmit").click(function(){
    console.log("Handler for click succesful.");
    var clientName = $( "#clientName" ).val();
    

    // if all responses valid
    console.log(clientName);

    // if invalid/incomplete
   });



    TESTER = document.getElementById('tester');
	Plotly.newPlot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
    margin: { t: 0 } } );

});








// attempt animate again if time

// $(document).ready(function(){

// $("#slideshow > div:gt(0)").hide();

// setInterval(function() { 
//   $('#slideshow > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#slideshow');
// },  3000);
// });