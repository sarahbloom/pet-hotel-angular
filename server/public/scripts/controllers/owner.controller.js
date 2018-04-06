PetHotelApp.controller('OwnerController', ['PetHotelService', function (PetHotelService){
    console.log('Owner controller loaded');

    const self = this;
    
    let serviceOwner = PetHotelService;

    self.ownerArray = serviceOwner.ownerArray;
    self.petArray = serviceOwner.petArray;

    self.addOwner = serviceOwner.addOwner;
    self.deleteOwner = serviceOwner.deleteOwner;
    self.getOwner = serviceOwner.getOwner;
}])