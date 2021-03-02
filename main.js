function vrt(){
  document.getElementById("name").innerHTML = document.location.href.replace('https://bday.vrt36.com/?vogel=','');
  var bdayArray = [
    'On your birthday I wish you success and endless happiness!.Wishing you an awesome birthday!',
    'Wish you a beautiful birthday and I hope you get double of everything you want in your life. Happy Birthday!'
  ];
  var arrNum = Math.floor(Math.random()*bdayArray.length)
  document.getElementById("bday-text").innerHTML = bdayArray[arrNum];
}
