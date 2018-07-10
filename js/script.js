const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

const date = new Date();                    // this solution don't restart 
const secondsForStart = date.getSeconds();  // the value of seconds after 59 second
let seconds = secondsForStart;              // and so we don't lose the animation.

setInterval(function() {

   ++seconds;
   const minutes = date.getMinutes();
   const hours = date.getHours();
   const secondsDeg = seconds * 360 / 60;
   const minutesDeg = minutes * 360 / 60;
   const hoursDeg = (hours * 360 / 12);
   const angularBetweenHours = (minutes * 30) / 60; //The angular value between an hours
   const angularBetweenMinutes = (seconds * 6) / 60; //The angular value between an minutes
   console.log(seconds);
   secondHand.style.transform = `rotate(${secondsDeg + 90}deg) translateY(-50%)`;
   minuteHand.style.transform = `rotate(${minutesDeg + angularBetweenMinutes + 90}deg) translateY(-50%)`;
   hourHand.style.transform = `rotate(${hoursDeg + angularBetweenHours + 90}deg) translateY(-50%)`;

   if(seconds === 86400) seconds = 0; // restarting a seconds value after 24h 
   									  // one lack of animation between 59 and 60 second per day. 
   if(secondsDeg !== 0) {
	  secondHand.style.transition = 'all .2s';
	  secondHand.style.transitionTimingFunction = 'cubic-bezier(0,1.91,.67,.28)';
   } else {
	  secondHand.style.transition = 'none';
   };

   if(minutesDeg !== 0) {
		 minuteHand.style.transition = 'all .2s';
	  } else {
		 minuteHand.style.transition = 'none';
	  };
   if(hoursDeg !== 0) {
		 hourHand.style.transition = 'all .2s';
	  } else {
		 hourHand.style.transition = 'none';
	  };
}, 1000);