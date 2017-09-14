describe('Bubble Sort', function(){
	beforeAll(function () {
  		spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
	});

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles single items', function(){
    expect( bubbleSort([0]) ).toEqual( [0] );
  });

  var arr = [0,2,1];
  it('handles multiple items', function(){
    expect( bubbleSort(arr) ).toEqual( arr.sort() );
    bubbleSort(arr);
    expect( swap.calls.count()).toEqual(1);
  });

});

