function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}
// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex < 0 || pageIndex > (this.pageCount() - 1)){return -1;} 
    var data = [];
    var pageCount = this.pageCount();
    var items = this.itemCount();
    var itemsPerPage = this.itemsPerPage;
    for (var i = 0; i < pageCount; i += 1) {
      if(items > itemsPerPage) {
        data.push(itemsPerPage);
      }else {
        data.push(items);
      }
      items = items - itemsPerPage;
    }
    return data[pageIndex];
}
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex < 0 || itemIndex > (this.itemCount())){return -1;} 
  var pagecount = this.pageCount();
  var items = this.itemCount();
    if (items === 0){return - 1};
    var itemsPerPage = this.itemsPerPage;
    return itemIndex === 0 ? 0 : Math.floor(itemIndex / itemsPerPage);
}

 helper = new PaginationHelper(['a', 'b','c','d','e','f'], 4);


helper.itemCount();
helper.pageCount();
helper.pageItemCount(2);
// helper.pageIndex(2);

let assert = require("chai").assert;
describe('Challenge', function() {
  it('should work for the provided example', function() {
    assert.deepEqual(palindromeChainLength(87), 4);
  });
});
