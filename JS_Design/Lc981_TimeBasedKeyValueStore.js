
var TimeMap = function() {
    this.map = new Map();
};

TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)) this.map.set(key, []);
    this.map.get(key).push({timestamp, value});
};

TimeMap.prototype.get = function(key, timestamp1) {
    if(!this.map.has(key)) return '';

    function binarySearch(arr, targetTimestamp) {
        let left = 0;
        let right = arr.length - 1;
        while(left < right){
            const mid = Math.floor((left + right) / 2);
            if(arr[mid].timestamp < targetTimestamp)left = mid + 1;
            else right = mid;
        }
        if(arr[left] && arr[left].timestamp <= targetTimestamp) return arr[left].value;
        if(arr[left - 1] && arr[left - 1].timestamp <= targetTimestamp) return arr[left - 1].value
        return ''
    }

    return binarySearch(this.map.get(key), timestamp1);
};

