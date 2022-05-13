var singleNumber = function (nums) {
    return nums.reduce((prev, curr) => prev ^ curr)
};

var singleNumber1 = function (nums) {
    let res = 0;
    nums.map(a => res = res ^ a)
    return res
};
