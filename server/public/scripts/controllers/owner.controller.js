PetHotelApp.controller('OwnerController', ['PetHotelService', '$mdDialog', function (PetHotelService, $mdDialog){
    console.log('Owner controller loaded');

    const self = this;
    let serviceOwner = PetHotelService;

    self.editing = false;
    self.editingId = 0;
    self.ownerToUpdate = { name: '', email: '', owner_id: ''};

    self.ownerArray = serviceOwner.ownerArray;
    self.petArray = serviceOwner.petArray;

    self.addOwner = function (Owner) {
        if (self.editing) {
            // call a PUT route
            serviceOwner.updateOwner(Owner, self.editingId);
            self.editing = false;
        } else {
            serviceOwner.addOwner(Owner);
        }
        self.ownerToUpdate = { name: '', email: '', owner_id: '' };
        console.log('self.editing', self.editing);
    };

    
    self.getOwner = serviceOwner.getOwner;

    self.removeOwner = function (ev, owner) { 
        console.log('owner data', owner); 
        if (owner.total_pets > 0) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title(`This person still has pets on the system.`)
                    .textContent(`Please remove all pets before deleting the owner.`)
                    .ok('OK')
                    .targetEvent(ev));
        } else {
            PetHotelService.deleteOwner(ev, owner.owner_id);
        }
    }

    self.updateOwner = function (Owner) {
        console.log('clicked UPDATE /owner', Owner);
        self.editing = true;
        self.editingId = Owner.owner_id;
        self.ownerToUpdate.name = Owner.owner_name;
        self.ownerToUpdate.email = Owner.email;
        self.ownerToUpdate.owner_id = Owner.owner_id;
    };
}])
