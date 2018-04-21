function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
 
}
function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, duration) {
  this.title = title;
  this.rating = rating;
  this.duration = duration;   
}

Library.prototype.addPlaylist = function(playlist) {
   this.playlists.push(playlist);
}
Playlist.prototype.addTrack = function (track) {
   this.tracks.push(track);
}


 Playlist.prototype.overallRating = function() {
  const rating = this.tracks.reduce((amount,total) => {return amount + total.rating}, 0);
 return rating / this.tracks.length;
 }

 Playlist.prototype.totalDuration = function() {
  return this.tracks.reduce((amount, total) => {return amount + total.duration}, 0);

}

const library1 = new Library("Library 1")
const p01 = new Playlist("Playlist 1")
const t01 = new Track("Smells like Teen Spirit", 3, 240)
const t02 = new Track("Karma Police", 5, 340)
library1.addPlaylist(p01)
p01.addTrack(t01);
p01.addTrack(t02);

console.log(p01.overallRating());
console.log(p01.totalDuration());
console.log(library1);
console.log(p01);

