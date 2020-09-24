var fs = require('fs');


// Read file from .json
var file1 = "./NEW.json";
var file2 = "./old.json";
var mockData = JSON.parse(fs.readFileSync( file1));
var prodData = JSON.parse(fs.readFileSync( file2));

// initial function to compare two json data
function JsonCompare(data1, data2) {
    // Initial Res as a map;
    const res = {}

    let data_id = 1;
    for(let i in data1.data){
        console.log(data1.data[i].id)
        console.log(data2.data[i]['id'])
    }
    const data1_key1 = Object.keys(data2["data"])
    const data1_key2 = Object.keys(data1["data"][0])
    // console.log(data1_key1)
    // console.log(data1_key2)

    return res
}


console.log(JsonCompare(mockData, prodData))
