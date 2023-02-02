//requires db.js
var data = {}
function onload(c){
  var e = c;
  for(b in e){
    data[e[b]].id = new DB(e[b].id, "$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
    data[e[b].id].get()
  }
}
window.onload = function(){
  var db = new DB("63db7034ace6f33a22d38abd","$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
  db.get("onload")
}
