describe("menu", function() {
  it("displays play button", function() {
    expect($('.menu-option').count).toBe(3);
  });
});
