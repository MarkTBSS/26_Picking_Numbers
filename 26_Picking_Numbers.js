function pickingNumbers(a) {
    let groupingValue = Array(100).fill(0)

    for (let i = 0; i < a.length; i++) {
        groupingValue[a[i]]++;
    }

    //console.log(groupingValue)

    var maxCouple = 0
    for (var i = 0; i < groupingValue.length; i++) {
        var sumOfCouple = 0; 
        sumOfCouple = groupingValue[i] + groupingValue[i + 1];
        if (sumOfCouple > maxCouple) {
            maxCouple = sumOfCouple;
        }
    }

    return maxCouple;
}
  
const a = [4, 2, 3, 4, 4, 9, 98, 98, 3, 3,
             3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 
             98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 
             9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 
             1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 
             98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 
             98, 2, 98, 4, 2, 1, 1, 9, 2, 4];

console.log(pickingNumbers(a))
