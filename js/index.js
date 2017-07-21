//Tests to see if document finished loading
$(document).ready(function() {});

//Links to random article in new window
$("#random").click(function(event) {
  window.open(
    "https://en.wikipedia.org/wiki/Special:Random",
    "_blank",
    "resizable,scrollbars,status"
  );
});

//Sends search input to API URL, appends data to page
$("#searchButton").click(function(event) {
  var searchTerms = $("#searchTerms").val();
  var url =
    "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
    searchTerms +
    "&format=json";
  event.preventDefault()
  $.ajax({
    type:'GET',
    url:url,
    dataType:'jsonp',
    success:function(response){
      $("#output").html("");
      //array structure is [searchTerm],[title],[desc],[link]
     $("#output").append("<p>Results for " +response[0] +":</p>");
     for (i=0;i<response[1].length;i++){
      $("#output").append("<li><a href="+response[3][i]+ ">"+ response[1][i] + "</a>"+ "<p>" +response[2][i] +"</p>"+"</li>");
      
     }
      
    },
    error:function(error){
      alert("Error")
    }
    
  });
});