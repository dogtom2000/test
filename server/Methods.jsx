if (Meteor.isServer) {
  Meteor.publish("design", function () {
    return Design.find({owner: this.userId});
  });
  Meteor.publish("vehicle", function () {
    return Vehicle.find();
  });
}

Meteor.methods({
    addDesign(design, id) {
        if (! Meteor.userId()) {
          throw new Meteor.Error("not-authorized");
        }
        if (id == false){
            Design.insert(design);
        } else {
            Design.update({_id: id}, design);
        }
    },

    deleteDesign(id) {
        if (! Meteor.userId()) {
          throw new Meteor.Error("not-authorized");
        }
        
        Design.remove({_id: id});
    
    },
    
    addVehicle(design) {
        if (! Meteor.userId()) {
          throw new Meteor.Error("not-authorized");
        }
        
        Vehicle.insert(design);
    
    },
    
      updateVehicle(vehicle, id) {
        if (! Meteor.userId()) {
          throw new Meteor.Error("not-authorized");
        }
        
        Vehicle.update({_id: id}, vehicle);
    
    },
    
      deleteVehicle(id) {
        if (! Meteor.userId()) {
          throw new Meteor.Error("not-authorized");
        }
        
        Vehicle.remove({_id: id});
    
    },
    
});