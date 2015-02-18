describe("Ticket", function() {

  describe("age", function() {
    it("set a price depentant on age entered", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age("child");
      expect(testTicket.price).to.equal(8);
    });
  });



});
