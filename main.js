//requires db.js
var data = {}
function onload(c){
  var e = c;
  for(b in e){
    data[b[e].id] = new DB(b[e].id, "$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
    data[b[e].id].get()
  }
}
window.onload = function(){
  var db = new DB("63db7034ace6f33a22d38abd","$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
  db.get("onload")
}
