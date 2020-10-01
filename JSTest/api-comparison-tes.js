var fs = require('fs');


// Read file from .json
var file1 = "./mockStore.json";
var file2 = "./prodStore.json";

//Read in Json
var mockData = JSON.parse(fs.readFileSync( file1));
var prodData = JSON.parse(fs.readFileSync( file2));


// initial function to compare two json data
function JsonCompare(data1, data2) {
    // Initial Res as a map;
    const res = {}

    // Initial Stores and field;
    res['stores'] = [];
    res['fields'] = [];

    // save id and attributes into set
    let data1_id = new Set()
    let data2_id = new Set()
    let data1_attributes = new Set()
    let data2_attributes = new Set()

    // Operation 1: deal with store

    // fill set1 of mockDataset
    for(let i of data1.data) {
        data1_id.add(i.id);
        for(let j in i.attributes){
            data1_attributes.add(j);
        }
    }

    // fill set2 of prodDataset, find missing from prod
    for(let i of data2.data) {
        data2_id.add(i.id);
        let temp = {};
        temp['storeId'] = i.id;
        temp['missingFrom'] = 'prod';
        if (!data1_id.has(i.id)) res['stores'].push(temp)

        for(let j in i.attributes){
            data2_attributes.add(j);
        }
    }

    //find missing from mock
    for(let i of data1.data) {
        let temp = {};
        temp['storeId'] = i.id;
        temp['missingFrom'] = 'mock';
        if (!data2_id.has(i.id)) res['stores'].push(temp)
    }

    // Operation 2: deal with field
    let intersectData = new Set([...data2_attributes].filter(x => !data1_attributes.has(x)))
    for(let i of intersectData){
        res['fields'].push(i);
    }
    return res;

}

console.log(JsonCompare(mockData, prodData));
// JsonCompare(mockData, prodData)



// fs.writeFile('./mock_copy.json',mockData,'utf8',function(err){
//     if(err)
//         console.log('写文件出错了，错误是：'+err);
//     else
//         console.log('ok');
// })



