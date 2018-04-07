PetHotelApp.controller('OwnerController', ['PetHotelService', '$mdDialog', function (PetHotelService, $mdDialog){
    console.log('Owner controller loaded');

    const self = this;
    
    let serviceOwner = PetHotelService;
    self.editing = false;
    self.editingId = 0;

    self.ownerArray = serviceOwner.ownerArray;
    self.petArray = serviceOwner.petArray;

    self.addOwner = serviceOwner.addOwner;
    // self.removeOwner = serviceOwner.deleteOwner;
    self.getOwner = serviceOwner.getOwner;
    self.updateOwner = serviceOwner.updateOwner;

    self.removeOwner = function (ev, owner) { 
        console.log('owner data', owner);
        
        if (owner.total_pets > 0) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title(`This person still has pets on the system`)
                    .ok('Got it!')
                    .targetEvent(ev));
        } else {
            PetHotelService.deleteOwner(ev, owner.owner_id);
        }
    }
}])
