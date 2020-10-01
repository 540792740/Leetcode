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
    res['field'] = [];

    // save id into set
    let data1_id = new Set()
    let data2_id = new Set()

    // fill set1 of mockDataset
    for(let i of data1.data) {
        data1_id.add(i.id);
    }

    // fill set2 of prodDataset, find missing from prod
    for(let i of data2.data) {
        data2_id.add(i.id);
        let temp = {};
        temp['storeId'] = i.id;
        temp['missingFrom'] = 'prod';
        if (!data1_id.has(i.id)) res['stores'].push(temp)
    }

    //find missing from mock
    for(let i of data1.data) {
        let temp = {};
        temp['storeId'] = i.id;
        temp['missingFrom'] = 'mock';
        if (!data2_id.has(i.id)) res['stores'].push(temp)
    }

    // console.log(data1_id[0])
    // console.log(data2_id[0])

    //     let id = data1.data[i].id
    //     console.log(id)
    //     for(let j in data2.data){
    //         if(data2.data[j].id === id){
    //             let tempRes = {};
    //             let dataType = data1.data[i].type;
    //             tempRes[dataType] = [];
    //
    //
    // //         }
    //         console.log(data1.data[i])
    //         console.log(data2.data[j])
    //         break;
    //     }
    // break

    //     console.log(data2.data.length)
        // console.log(data2.data[i]['id'])
    // }

    return res;

}

console.log(JsonCompare(mockData, prodData));




fs.writeFile('./mock_copy.json',mockData,'utf8',function(err){
    if(err)
        console.log('写文件出错了，错误是：'+err);
    else
        console.log('ok');
})



