
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var image3 = {};	// @image
	var image2 = {};	// @image
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	image3.click = function image3_click (event)// @startlock
	{// @endlock
		chgLangue("en");
	};// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
		chgLangue("fr");
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		chgLangue("fr");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("image3", "click", image3.click, "WAF");
	WAF.addListener("image2", "click", image2.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
