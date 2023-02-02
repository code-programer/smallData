//requires db.js
var data = {}
function onload(e){
  for(b in e){
    data[b[e]] = new DB(b[e], "$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
    data[b[e]].get()
  }
}
window.onload = function(){
  var db = new DB("63db701cace6f33a22d38aaf","$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
  db.get("onload")
}
