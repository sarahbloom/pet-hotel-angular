PetHotelApp.service('PetHotelService', ['$http', function ($http){
    // console.log('Pet Hotel Service is loaded');

    const self = this;  

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
    self.deleteOwner = function (ownerId){
        console.log('clicked DELETE /owner');
        $http({
            method:"DELETE", 
            url: `/owner/${ownerId}`
        }).then((response) => {
            console.log(response);
            
            self.getPet();
            self.getOwner();
            alert('Owner is deleted from the records');
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
    self.checkInPet = function (pet, petId, status){
        console.log('clicked check in/out /PET');
        // pet.checked_in = !pet.checked_in;
        console.log(pet.checked_in);
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
            alert('Error in checking in pet!')
        })
    }


    //delete request /PET
    self.deletePet = function(petId){
        console.log('clicked DELETE /pet');
        $http({
            method: 'DELETE',
            url: `/pet/${petId}`
        }).then((response)=>{
            self.getPet();
            self.getOwner();
            alert('Pet is deleted from the records');
        }).catch((err)=>{
            console.log('Error deleting pet from records', err);
        })
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
