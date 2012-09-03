describe("Card.Model", function() { 
  it("Card should have name", function() { 
    card = new Card.Model({ name: 'SayIt'} ); 
    expect(card.get('name')).toEqual('SayIt'); 
  }); 
});
