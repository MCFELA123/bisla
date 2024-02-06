
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then(function (registration) {
        console.log("success load");
      })
      .catch(function (err) {
        console.log(err);
      });
   }
// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>

    function wol() {
		if(document.getElementById("side-nav").onmouseenter + onpointerenter) {
		 document.getElementById("homes").className = 'home' ;
		
			document.getElementById("eco").className = 'eco' ;   
			document.getElementById("prof").className = 'prof' ;   
            document.getElementById("price").className = 'price' ;   
						document.getElementById("chat").className = 'chats' ;
				document.getElementById("aps").className = 'aps' ;
				  document.getElementById("inp").value = 'APPS & PAGES' ;
				 
				  document.getElementById("inp").className = 'inps' ;
						  document.getElementById("buy").className = 'buy' ;
document.getElementById("side-nav").style.width = '260px';
		 document.getElementById("ficxed").style.width = '31%' ;
down();
		}
		
		}
		
		function wol_fb() {
			if(document.getElementById("side-nav").onmouseleave + onpointerleave) {
					document.getElementById("homes").className = 'hmo' ;
		  document.getElementById("eco").className = 'ecoms' ;   
		  document.getElementById("prof").className = 'profile' ; 
          document.getElementById("price").className = 'pricing' ; 
		document.getElementById("chat").className = 'chat' ;
			document.getElementById("aps").className = 'ap' ;
				document.getElementById("inp").value = '...' ;
		
				   document.getElementById("buy").className = 'buys';
				   document.getElementById("side-nav").style.width = '70px';
				document.getElementById("inp").className = 'inp' ;
							document.getElementById("ficxed").style.width = '70px' ;

		up();
		
		 /*   document.getElementById("homes").className = 'hmo' ;
		  document.getElementById("homes").className = 'hmo' ;
		  document.getElementById("homes").className = 'hmo' ;
		  document.getElementById("homes").className = 'hmo' ;*/
		}
		function up() {
			
			document.getElementById("dd01").style.marginTop = '-6em';
			document.getElementById("dd01").className = 'dropdown-content';
				document.getElementById("dd02").className = 'dropdown-content';

		}

		function down() {
			document.getElementById("dd01").style.marginTop = '0';
			document.getElementById("dd01").className = 'droplist';
				document.getElementById("dd02").className = 'droplist';
		}
		
		}
		
function drop() {
		document.getElementById("dd01").style.marginTop = '-6em';
	document.getElementById("dd01").className = 'dropdown-content';
	document.getElementById("dd02").className = 'dropdown-content';
}



/*function dark() {
		var sec1 = document.getElementById("sec1").style;
		var sec2 = document.getElementById("sec2").style;
		var sec3 = document.getElementById("sec3").style;
		var sec4 = document.getElementById("sec4").style;
		var nav = document.getElementById("nav").style;
		var left = document.getElementById("side-nav").style;
		var container = document.getElementById("container").style;
		var cover = document.getElementById("cover").style;
		
		
		sec1.background = 'rgb(32, 16, 37)';
		container.background = 'rgba(30, 25, 33)';
		cover.background = 'rgba(30, 25, 33)';
		sec1.boxShadow = '0 0 10px 0 rgba(30, 25, 33, 0.382)';
		sec1.border = '1px dashed rgba(0, 0, 0, 0)';
		}
		*/
		
