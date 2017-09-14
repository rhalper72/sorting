describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    expect(split([0,1,2,3])).toEqual([[0,1], [2,3]]);
    expect(split([0,1,2,3,4])).toEqual([[0,1], [2,3,4]]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([2,5,7],[3,3,8,9])).toEqual([2, 3, 3, 5, 7, 8, 9])
  });
});