function alertBox(txt, callbackMethod, jsonData){
    modal({
        type: 'error',
        title: 'BIGBOX',
        text: txt,
        closeClick: false,
        closable: true,
        callback: function(result){
            if(callbackMethod){
                callbackMethod(jsonData);
            }
        },
        onShow: function() {
        	/*$("#modal-window .modal-box.modal-type-error .modal-title").css({
        		"background-color" : "#3999ff",
        		"color" : "#ffffff"
        	});*/
        	$(".modal-box").css({
        		"border-radius" : "8px 8px 8px 8px"
        	});
        }
    });
}

function alertBoxMove(txt, loc){
    modal({
        type: 'error',
        title: 'BIGBOX',
        text: txt,
        closeClick: false,
        closable: true,
        callback: function(result){
            if(typeof loc === 'undefined' || loc == "") {
                history.back();
            } else {
                location.href = loc;
            }
        },
        onShow: function() {
        	/*$("#modal-window .modal-box.modal-type-error .modal-title").css({
        		"background-color" : "#3999ff",
        		"color" : "#ffffff"
        	});*/
        	$(".modal-box").css({
        		"border-radius" : "8px 8px 8px 8px"
        	});
        }
    });
}

function alertBoxFocus(txt, id){
    modal({
        type: 'error',
        title: 'BIGBOX',
        text: txt,
        closeClick: false,
        closable: true,
        callback: function(result){
            $("#"+id).focus();
        },
		onShow: function() {
        	/*$("#modal-window .modal-box.modal-type-error .modal-title").css({
        		"background-color" : "#3999ff",
        		"color" : "#ffffff"
        	});*/
        	$(".modal-box").css({
        		"border-radius" : "8px 8px 8px 8px"
        	});
        }
    });
}


function confirmBox(txt, callbackMethod, jsonData){
    modal({
        type: 'confirm',
        title: 'BIGBOX',
        text: txt,
        closeClick: false,
        closable: true,
        callback: function(result) {
            if(result){
                callbackMethod(jsonData);
            }
        },
		onShow: function() {
        	/*$(".modal-title").css({
        		"background" : "#dc0000	",
        		"color" : "#ffffff"
        	});*/
        	$(".modal-box").css({
        		"border-radius" : "8px 8px 8px 8px"
        	});
        }
    });
}

function promptBox(txt, callbackMethod, jsonData){
    modal({
        type: 'prompt',
        title: 'BIGBOX',
        text: txt,
        closeClick: false,
        closable: true,
        callback: function(result) {
            if(result){
                callbackMethod(result, jsonData);
            }
        },
        onShow: function() {
        	/*$(".modal-title").css({
        		"background" : "#dc0000	",
        		"color" : "#ffffff"
        	});*/
        	$(".modal-box").css({
        		"border-radius" : "8px 8px 8px 8px"
        	});
        }
    });
}

function successBox(txt){
    modal({
        type: 'success',
        title: 'Success',
        text: txt
    });
}

function warningBox(txt){
    modal({
        type: 'warning',
        title: 'Warning',
        text: txt,
        center: false
    });
}

function infoBox(txt){
    modal({
        type: 'info',
        title: 'Info',
        text: txt,
        autoclose: true
    });
}

function errorBox(txt){
    modal({
        type: 'error',
        title: 'Error',
        text: txt
    });
}

function invertedBox(txt){
    modal({
        type: 'inverted',
        title: 'Inverted',
        text: txt
    });
}

function primaryBox(txt){
    modal({
        type: 'primary',
        title: 'Primary',
        text: txt
    });
}

/*
<script>
   alertBox("안녕", goNaver);

   function goNaver(){
      location.href = "http://www.naver.com";
   }
<script>

<script>
   alertBox("안녕", goNaver, {url:"http://www.naver.com"});

   function goNaver(urlData){
      location.href = urlData.url;
   }
<script>

			confirmBox("로그인 정보를 입력해 주세요.", function() {
				alert("Yes");
			});
*/
