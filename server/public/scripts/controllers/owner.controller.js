PetHotelApp.controller('OwnerController', ['PetHotelService', function (PetHotelService){
    console.log('Owner controller loaded');

    const self = this;
    
    let serviceOwner = PetHotelService;

    self.ownerArray = serviceOwner.ownerArray;
    self.getOwner = serviceOwner.getOwner;
}])