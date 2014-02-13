Array.prototype.shuffle = function () { //v1.0
  for(var j, x, i = this.length; i; j = Math.floor(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
  return this;
};

window.activities = 'take a walk, reread a good book, stare at a wall, try a new tea, type gibberish into a text file, doodle a rabbit, find a dog and pet it, make a nice sandwich, smell a candle, think about penguins, image search "marmoset", turn off the internet, bake some cookies, learn to finger knit, memorize a poem, go outside for like three goddamn minutes'.split(", ").shuffle();

window.colors = "#444".split(", ").shuffle()

