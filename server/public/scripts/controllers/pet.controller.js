PetHotelApp.controller('PetController', ['PetHotelService', function (PetHotelService) {
    console.log('Pet controller loaded');
    
    const self = this;

    let servicePetHotel = PetHotelService;

    self.petArray = servicePetHotel.petArray;
    self.getPet = servicePetHotel.getPet;
    self.addPet = servicePetHotel.addPet;
}])