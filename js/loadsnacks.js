
(function (global) {

	// On page load (before images or CSS)
	document.addEventListener("DOMContentLoaded", function (event) {

		// get snack recepies and put in html for snacks
		recepieOutput = recepieFetcher.getrecepies("snack");
		document.querySelector("#recepie-main-content").innerHTML = recepieOutput[1];

	});

})(window);

