

var agent = navigator.userAgent.toLowerCase();
if(agent.indexOf("chrome") != -1) {
	// chrome
} else {
	// ie
	var addConsoleNoOp =  function (window) {
	    var names = ["log", "debug", "info", "warn", "error",
	        "assert", "dir", "dirxml", "group", "groupEnd", "time",
	        "timeEnd", "count", "trace", "profile", "profileEnd"],
	        i, l = names.length,
	        noOp = function () {};
	    window.console = {};
	    for (i = 0; i < l; i = i + 1) {
	        window.console[names[i]] = noOp;
	    }
	};

	if (!window.console || !window.development_mode) {
	    this.addConsoleNoOp(window);
	}
}


var ajax = {

	openModal: function() {
		$('body').loadingModal({
			position: 'auto',
			text: 'Loading...',
			color: '#fff',
			opacity: '1.0',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			animation: 'threeBounce'
		});
	},

	errorModal: function(result, txtStatus, error) {
		ajax.closeModal();
		if(result.status == "900") {
			location.href = "/auth/login";
		} else {
			alert("데이터 처리에 문제가 발생했습니다.");
		}
	},

	closeModal: function() {
		$('body').loadingModal('destroy');
	},

	get: function(url, callback, modal) {

		modal = (typeof modal === 'undefined') ? true : modal;

		$.ajax({
			type: 'get',
			url: url,
			cache: false,
			headers: {
				"Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",
				"X-HTTP-Method-Override" : "GET",
				"AJAX" : "true"
			},
			dataType: 'html',
			beforeSend: function() {
				if(modal) ajax.openModal();
			},
			error: function(result, txtStatus, error) {
				ajax.errorModal(result, txtStatus, error);
			},
			success: function(data) {
				if(modal)  ajax.closeModal();
				callback(data);
			}
		});
	},

	post: function(url, params, callback, modal) {

		modal = (typeof modal === 'undefined') ? true : modal;

		$.ajax({
			type: 'post',
			url: url,
			cache: false,
			headers: {
				"Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",
				"X-HTTP-Method-Override" : "POST",
				"AJAX" : "true"
			},
			//contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        	dataType: 'html',
			data: params,
			beforeSend: function() {
				if(modal)  ajax.openModal();
			},
			error: function(result, txtStatus, error) {
				ajax.errorModal(result, txtStatus, error);
			},
			success: function(data) {
				if(modal)  ajax.closeModal();
				callback(data);
			}
		});
	},

	submit: function(url, id, callback, modal) {

		modal = (typeof modal === 'undefined') ? true : modal;

		$("#" + id).ajaxSubmit({
			url: url,
			type: 'post',
			dataType: 'html',
			beforeSend: function() {
				if(modal)  ajax.openModal();
			},
			error: function(result, txtStatus, error) {
				ajax.errorModal(result, txtStatus, error);
			},
			success: function(data) {
				if(modal)  ajax.closeModal();
				callback(data);
			}
		});
	},

	frame: function(url, frm) {
		//ajax.openModal();
		$("#temp_hidden_frame").remove();
		var frame = "<iframe name='temp_hidden_frame' id='temp_hidden_frame' scrollborder='0' border='0' scrolling='no' style='width:0px;height:0px;'></iframe>";
		$("body").append(frame);
		frm.target = "temp_hidden_frame";
		frm.action = url;
		frm.submit();
	}
};

var ajaxjson = {

	openModal: function() {
		$('body').loadingModal({
			position: 'auto',
			text: 'Loading...',
			color: '#fff',
			opacity: '1.0',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			animation: 'threeBounce'
		});
	},

	errorModal: function(result, txtStatus, error) {
		ajaxjson.closeModal();
		if(result.status == "900") {
			location.href = "/auth/login";
		} else {
			alert("데이터 처리에 문제가 발생했습니다.");
		}
	},

	closeModal: function() {
		$('body').loadingModal('destroy');
	},

	get: function(url, callback, modal, preview) {

		modal = (typeof modal === 'undefined') ? true : modal;
		preview = (typeof preview === 'undefined') ? false : preview;

		$.ajax({
			type: 'get',
			url: url,
			cache: false,
			headers: {
				"Content-Type" : "application/json",
				"X-HTTP-Method-Override" : "GET",
				"AJAX" : "true",
				"PREVIEW" : preview
			},
			dataType: 'text',
			beforeSend: function() {
				if(modal) ajaxjson.openModal();
			},
			error: function(result, txtStatus, error) {
				ajaxjson.errorModal(result, txtStatus, error);
			},
			success: function(data) {
				if(modal)  ajaxjson.closeModal();
				callback(data);
			}
		});
	},

	post: function(url, params, callback, modal) {

		modal = (typeof modal === 'undefined') ? true : modal;

		$.ajax({
			type: 'post',
			url: url,
			cache: false,
			headers: {
				"Content-Type" : "application/json",
				"X-HTTP-Method-Override" : "POST",
				"AJAX" : "true"
			},
			dataType: 'text',
			data: JSON.stringify(params),
			beforeSend: function() {
				if(modal)  ajaxjson.openModal();
			},
			error: function(result, txtStatus, error) {
				ajaxjson.errorModal(result, txtStatus, error);
			},
			success: function(data) {
				if(modal)  ajaxjson.closeModal();
				callback(data);
			}
		});
	}
};
