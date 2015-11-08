$(document).ready(
		function() {
			var user = getURLParameter('user');
			// call the php that has the php array which is json_encoded
			var url = 'getChartsFromDb.php?user=' + user;
			$.getJSON(url).done(
					function(data) {
						// data will hold the php array as a javascript object
						$.each(data, function(key, val) {
							$('#navigation').append(
									'<li id="' + key
											+ '" class="nav-item" ><a href="#" onclick="getJsonFromDB('+val.chart_id+');">'+ val.chart_name + '</a></li>');
						});
					});
		});

function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '='
			+ '([^&;]+?)(&|#|;|$)').exec(location.search) || [ , "" ])[1]
			.replace(/\+/g, '%20'))
			|| null;
}

function getJsonFromDB(chart_id){
	var json ;
	 $.ajax({
	       url: "getJSONFromDb.php?chart_id="+chart_id,
	       type: "GET",//type of posting the data
	       success: function (data) {
	         json = data;
	         
	       },
	       error: function(xhr, ajaxOptions, thrownError){
	    	   json=null;
	       },
	       async: false
	  });
}
