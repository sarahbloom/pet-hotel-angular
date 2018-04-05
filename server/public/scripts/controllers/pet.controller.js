PetHotelApp.controller('PetController', ['PetHotelService', function (PetHotelService) {
    console.log('Pet controller loaded');
    
    const self = this;

    let servicePetHotel = PetHotelService;

    self.petArray = servicePetHotel.petArray;
    self.ownerArray = servicePetHotel.ownerArray

    self.getPet = servicePetHotel.getPet;
    self.addPet = servicePetHotel.addPet;

}])