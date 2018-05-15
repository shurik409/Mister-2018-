function Time(){
	var date = new Date();
	document.getElementById('time').innerHTML = date.getHours() + ':' + date.getMinutes() + ':'  + date.getSeconds();

	console.log(date.getHours() + ':' + date.getMinutes() + ':'  + date.getSeconds());
}


function time() {
   var nowDate = new Date();
    var achiveDate = new Date(2018,2,1,18,0,0); 
  //	var achiveDate = new Date(2017,9,13,00,03,00); 
    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('time');
        elmnt.innerHTML = '';
       // console.log("KEK");
        var child = document.createElement('iframe');
        child.height = "480";
        child.width = "640";
        child.frameborder = "0";
        child.setAttribute('frameborder', '0');
        child.setAttribute('allowfullscreen', 'true');
        child.src =  encodeURI("https://www.youtube.com/embed/live_stream?channel=UCtYRZOIqiowhoFchLWsyjKQ&autoplay=1");
        
    	elmnt.appendChild(child);
    	clearInterval(interval);

       // elmnt.innerHTML = "<iframe src height="480" width="640" frameborder="0" allowfullscreen="true"> </iframe>"
        return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    var days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
	//console.log(hours+ ':' + minutes + ':'  + seconds);
    var elmnt = document.getElementById('time');
    elmnt.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
   
}

	
    var interval = setInterval(time, 1000);
   

