window.onload = function() {
         let xhr = new XMLHttpRequest();
         xhr.onreadystatechange = function($evt){
            if(xhr.readyState == 4 && xhr.status == 200){
                let res = JSON.parse(xhr.responseText);
                console.log("response: ",res);
            }
         }
         xhr.open("PUT", "https://global.xirsys.net/_turn/WebRTCChannel", true);
         xhr.setRequestHeader ("Authorization","Basic " + btoa("RajeshKamath007:26f3084a-7fe6-11ea-b2fd-0242ac110004") );
         xhr.setRequestHeader ("Content-Type","application/json");
         xhr.send( JSON.stringify({"format": "urls"}) );
      }
