//requires db.js
var data = []
var totaldata = []
function doload(e){
  console.log(e)
  for(b in e){
    console.log(e[b])
    data.push(new DB(e[b].id, "$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS"))
    data[b].get()
  }
  loadtotaldata()
}
function loadtotaldata(){
  for(base in data){
    var database = data[base].data;
    for(el in database){
      totaldata.push(database[el])
    }
  }
}
var db = new DB("63db7034ace6f33a22d38abd","$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
db.get("doload")
function search(e){
  var returner = []
  for(el in totaldata){
    if(totaldata[el].text.includes(e)){
      returner.push(totaldata[el].anserwers)
    }
  }
  return returner;
}
