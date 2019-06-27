//Define recepieFetcher object
(function (global) {

	//Define all snack recepies
	snack_1 = {id: "1", name: "Parmachips", season: "all", vegan: "no" };
	snack_2 = {id: "2", name : "Parmesanchips", season: "all", vegan: "no" };
	snackRecepieData = [snack_1, snack_2];

	//Define all starter recepies
		
	//Define all main-course recepies

	//Define all desert recepies

	//define recepieFetcher
	var recepieFetcher = {};

	recepieFetcher.snackRecepieData = snackRecepieData;

	recepieFetcher.testfunction = function (myString) {
		var helloStr = "Hello " + myString;
		return helloStr;
	}

 	//define local help function
 	
 	recepieFetcher.recepiecatcher = function (recepieType, recepieData ) {
 	
 		// loop over all recepies in recepie data
		var nRecepies = recepieData.length;
		var totalHtml = "";
		
		
		for (iRecepie = 0; iRecepie < nRecepies; iRecepie ++ ) {

				var recepieAddress = "../html/" + recepieType + "_" + recepieData[iRecepie].id + ".html";
				
				//get recepi html using ajax call and append to object
				var myHtml = $ajaxUtils.sendGetRequest( recepieAddress,
    			function (myRecepieHtml) {
    				return myRecepieHtml;
    			},
    			false );

				console.log(myHtml)
    			recepieData[iRecepie].html = myRecepieHtml;
    			totalHtml += myRecepieHtml;
    			
		};
		
		//set output
		var recepieOutput = [recepieData, totalHtml];
		return recepieOutput;

 	};
	
	/*
	// define function to fetch recepies
	recepieFetcher.getrecepies = function (recepieType) {

		if ( recepieType == "snack" ) {
			recepieOutput = recepieFetcher.recepiecatcher("snack", snackRecepieData );
		} else if ( recepieType == "starter" ) {
			recepieOutput = recepieFetcher.recepiecatcher("starter", starterRecepieData );
		} else if ( recepieType == "main-course") {
			recepieOutput = recepieFetcher.recepiecatcher("main-course", mainCourseRecepieData );
		} else {
			recepieOutput = recepieFetcher.recepiecatcher("desert", desertRecepieData );
		}

		return recepieOutput;
	}
	*/

	global.recepieFetcher = recepieFetcher;

})(window);