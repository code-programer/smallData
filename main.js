//requires db.js
var res = new DB("63dd1be8ebd26539d074f591","$2b$10$GQBXgX0qtSt9SMrLTUYkle8r3ine3QESBb8jK69jddclQRRmMufvS");
res.get()

function loadtotaldata(){
totaldata.length = 0 
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
  var returnnum = []
  for(num in totaldata){
    if(!totaldata[num].text === undefined){
      if(totaldata[num].text.includes(e) ){
        if(returner.includes(totaldata[num].anserwers)){returnnum[returner.indexOf(totaldata[num].anserwers)] += 1}
        else{
         returner.push(totaldata[num].anserwers)
          returnnum.push(1)
        }
      }
    }
  }
  return returner[returnnum.indexOf(Math.max(...returnnum))]
}
