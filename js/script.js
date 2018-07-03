const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

setInterval(function() {
   
   const date = new Date();
   const seconds = date.getSeconds();
   const minutes = date.getMinutes();
   const hours = date.getHours();
   const secondsDeg = seconds * 360 / 60;
   const minutesDeg = minutes * 360 / 60;
   const hoursDeg = (hours * 360 / 12);
   console.log(minutesDeg);
   secondHand.style.transform = `rotate(${secondsDeg + 90}deg) translateY(-50%)`;
   minuteHand.style.transform = `rotate(${minutesDeg + 90}deg) translateY(-50%)`;
   hourHand.style.transform = `rotate(${hoursDeg + 90}deg) translateY(-50%)`;

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