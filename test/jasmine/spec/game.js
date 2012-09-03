describe("Game.Model", function() { 
  it("Should have meaningful default values", function() { 
    game = new Game.Model(); 
    expect(game.get('max_rounds')).toBeGreaterThan(10); 
    expect(game.get('max_cards')).toBeGreaterThan(100); 
    expect(game.get('round_time_limit')).toEqual(60); 
    expect(game.get('number_of_teams')).toEqual(2);
    expect(game.get('started')).not.toBe(true);
  }); 
});
