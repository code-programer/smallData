//requires db.js
var res = new DB("63dd1be8ebd26539d074f591","$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
res.get()

function loadtotaldata(){
  totaldata.lenght = 0;
  for(base in data){
    var database = data[base].data.db;
    for(el in database){
      totaldata.push(database[el])
    }
  }
}
var data = []
var totaldata = []
function doload(e){
  console.log(e)
  for(b in e){
    data.push(new DB(e[b].id, "$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS"))
    data[b].get()
  }
  loadtotaldata()
}
var db = new DB("63db7034ace6f33a22d38abd","$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
db.get("doload")
function search(e){
  loadtotaldata()
  var returner = []
  for(num in totaldata){
    if(totaldata[num].text.includes(e) ){
      returner.push(totaldata[num].anserwers)
    }
  }
  return returner;
}
