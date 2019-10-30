const findUniq = nums => {
    let number = null;
    let map = {};
    nums.forEach((val) => {
        if (!map[val]) number = val;
        map[val] = true;
    });
    return number;
}

const res1 = findUniq([ 1, 1, 1, 2, 1, 1]);
const res2 = findUniq([ 0, 0, 0.55, 0, 0]);
console.log(res1);
console.log(res2);
