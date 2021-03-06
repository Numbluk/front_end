jQuery.fx.off = true; // turns off effects like waiting, etc
describe("Tracks view", function() {
  var album = albums_scaffold.findWhere({ title: "Unbreakable Smile (Bonus Track Version)" });

  beforeEach(function() {
    this.view = new TracksView({ collection: tracks_scaffold, album: album });
  });

  afterEach(function() {
    this.view.remove();
  });

  it("has a collection property assigned", function() {
    expect(this.view.collection).toBeDefined();
    expect(this.view.collection.length).toBe(tracks_scaffold.length);
  });

  it("has a Handlebars template commpiled", function() {
    expect(this.view.template).toBeDefined();
  });

  it("renders a modal to the body when rendeer called", function() {
    this.view.render();
    expect($("#tracks_modal li").length).toBe(tracks_scaffold.length);
  });

  it("removes the view when fadeOut is called", function() {
    this.view.fadeOut();
    expect($("#tracks_modal").length).toBe(0);
  });
});
