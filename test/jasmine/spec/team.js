describe("Team.Model", function() { 
  it("Team should have name", function() { 
    team = new Team.Model({ name: 'Team 1'} ); 
    expect(team.get('name')).toEqual('Team 1'); 
  }); 
});
