describe("Ticket", function() {

  describe("age", function() {
    it("sets a price for a child", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age("child");
      expect(testTicket.price).to.equal(8);
    });

    it("sets a price for an adult", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age("adult");
      expect(testTicket.price).to.equal(15);
    });

    it("sets a price for a senior", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age("senior");
      expect(testTicket.price).to.equal(7);
    });
  });

  describe("time", function(){
    it("sets a price for evening show", function(){
      var testTicket = Object.create(Ticket);
      testTicket.time("evening");
      expect(testTicket.price).to.equal(15);
    });
    it("sets a price for a matinee", function() {
      var testTicket = Object.create(Ticket);
      testTicket.time("matinee");
      expect(testTicket.price).to.equal(10);      
    });
  });



});
