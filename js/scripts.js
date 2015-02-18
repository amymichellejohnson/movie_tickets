var Ticket ={
  price: 15,
  age: function(ageCheck){
    if (ageCheck === "child"){
      this.price -= 7;
    } else if (ageCheck === "senior") {
      this.price -= 8;
    }
  }

};
