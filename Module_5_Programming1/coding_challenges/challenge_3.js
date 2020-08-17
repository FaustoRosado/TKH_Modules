//codepen - https://codepen.io/faust0/pen/RwaRbmL

let quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, "

let splitLyric = quote.split(' ');
//console.log(splitLyric);

let newLyric = [];

for (let i = 0; i < splitLyric.length; i++) {
    newLyric.push(splitLyric[i].replace(/s/g, "$").replace(/S/g, "$"));
}

let transformQuote = newLyric.join(" ");
//console.log(newLyric);
console.log(transformQuote);