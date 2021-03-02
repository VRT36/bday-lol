function vrt(){
  document.getElementById("name").innerHTML = document.location.href.replace('https://bday.vrt36.com/?vogel=','');
  var bdayArray = [
    'On your birthday I wish you success and endless happiness!.Wishing you an awesome birthday!',
    'Wish you a beautiful birthday and I hope you get double of everything you want in your life. Happy Birthday!',
    'May your birthday and your life be as wonderful as you are . Happy Birthday',
    'May you achieve everything you desire in life. I wish you a very sweet and happy birthday. May you have an awesome life ahead. Enjoy your day',
    'You are very special and you deserve the best. I wish you a wonderful life filled with love and happiness. Happy Birthday.',
    'Happy Birthday you are a beautiful person, inside and out .I hope that you remember that,today and always.',
    'Happy Birthday to the one who has made my life so special.',
    'Forget the fact that you are aging,and let us start celebrating!Happy birthday!',
    'Some special words on your birthday: keep smiling as long as you’ve those teeth.Happy Birthday',
    'It’s always good to have a birthday, but to me it’s another chance to eat lots more cakes. Happy birthday',
  ];
  var arrNum = Math.floor(Math.random()*bdayArray.length)
  document.getElementById("bday-text").innerHTML = bdayArray[arrNum];
}
