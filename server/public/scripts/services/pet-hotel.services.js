PetHotelApp.service('PetHotelService', ['$http', '$mdDialog', function ($http, $mdDialog){
    // console.log('Pet Hotel Service is loaded');

    const self = this;  
    self.date = new Date();

    // A pet is paired with an owner by Owner ID
    self.petArray = { list: [] };
    self.ownerArray = { list: [] };

    //add a new owner
    self.addOwner = function (NewOwner){
        console.log('clicked to add new owner');
        $http({
            method: "POST",
            url:'/owner',
            data: NewOwner
        }).then((response)=>{
            console.log('POST /owner response', response);
            self.getOwner();
        }).catch((err) => {
            console.log('error making POST /pet request', err);
        })
    }

    //delete request /OWNER
    self.deleteOwner = function (ev, ownerId){
        console.log('clicked DELETE /owner', ownerId);
            $http({
                method:"DELETE", 
                url: `/owner/${ownerId}`
            }).then((response) => {
                console.log(response);
                self.getPet();
                self.getOwner();
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('You have deleted this pet owner from the records.')
                        .ok('Got it!')
                        .targetEvent(ev)
                );
            }).catch((err) => {
                console.log('Error deleting owner from records', err);
            })
        }
    

    //get request /OWNER - get owners and post to DOM
    self.getOwner = function () {
        console.log('in GET /owner');
        $http({
            method: 'GET',
            url: '/owner'
        }).then((response) =>{
            // console.log('GET /owner response', response.data);
            self.ownerArray.list = response.data;
        }).catch ((err)=>{
            console.log('err GETTING /owner', err);
            //alert to user something is wrong
        })
    }

    self.updateOwner = function (owner, ownerId){
        console.log('clicked UPDATE /owner');
        // $http({
        //     method:"PUT", 
        //     url: `/owner/${ownerId}`,
        //     data: owner
        // }).then((response) =>{
        //     console.log('UPDATE /owner', response);
        //     self.getCrew();
        // }).catch((err)=>{
        //     console.log('err UPDATING /owner', err);
        // })
    }

    //add a new pet
    self.addPet = function (newPet) {
        newPet.checked_in = true;
        $http({
            method: "POST",
            url: '/pet',
            data: newPet
        }).then((response) => {
            // console.log('POST /pet response', response);
            self.getPet();
            self.getOwner();
        }).catch((err) => {
            console.log('error making POST /pet request', err);
        })
    }

    //check in pet
    self.checkInPet = function (pet, petId, status, ev){
        console.log('clicked check in/out /PET');
        $http({
            method: 'PUT',
            url: `/pet/${petId}`,
            data: pet,
            params: { status: status}
        }).then((response) => {
            console.log(pet);
            self.getPet();
            self.getOwner();
        }).catch((err) =>{
            console.log('error in checking in', err);
            // alert('Error in checking in pet!')
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Error in checking in pet!')
                    .ok('Got it!')
                    .targetEvent(ev)
            );
        })
    }

    //delete request /PET
    self.deletePet = function(ev, petId){
        console.log('clicked DELETE /pet');

        let confirm = $mdDialog.confirm()
            .title('Would you like to remove this pet from the records?')
            .textContent('This pet cannot be re-added to the records.')
            .ariaLabel('Remove the Pet.')
            .targetEvent(ev)
            .ok('Yes, delete.')
            .cancel('No, keep the pet.');

            $mdDialog.show(confirm).then(function () {
                console.log('you deleted this pet');
                $http({
                    method: 'DELETE',
                    url: `/pet/${petId}`
                }).then((response) => {
                    self.getPet();
                    self.getOwner();
                        $mdDialog.show(
                            $mdDialog.alert()
                                .parent(angular.element(document.querySelector('#popupContainer')))
                                .clickOutsideToClose(true)
                                .title('You have deleted the pet from the records.')
                                .ok('OK')
                                .targetEvent(ev)
                        );
                }).catch((err) => {
                    console.log('Error deleting pet from records', err);
                })
            }, function () {
                console.log('you kept the pet');  
            });
        
    }

    //get request /PET = get all pets in database and post to DOM
    self.getPet = function () {
        // console.log('in GET /pet');
        $http({
            method: 'GET',
            url: '/pet'
        }).then((response) => {
            // console.log('POST /pet data', response.data);
            self.petArray.list = response.data;
        }).catch((err) => {
            console.log('err GETTING /pet', err);
        })
    }

    self.getPet();
    self.getOwner();

}]);
