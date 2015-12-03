describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys("NULL-OPERATOR")
    // var profiles = element.all(by.repeater('user in  searchResult.items'));
    expect(element(by.binding('user.login')).getText()).toEqual('NULL-OPERATOR');
  });

});
