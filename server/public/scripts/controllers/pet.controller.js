PetHotelApp.controller('PetController', ['PetHotelService', function (PetHotelService) {
    console.log('Pet controller loaded');
    
    const self = this;

    let servicePetHotel = PetHotelService;

    self.ownerArray = servicePetHotel.ownerArray
    self.petArray = servicePetHotel.petArray;

    self.addPet = servicePetHotel.addPet;
    self.checkInPet = servicePetHotel.checkInPet;
    self.deletePet = servicePetHotel.deletePet;
    self.getPet = servicePetHotel.getPet;
}])