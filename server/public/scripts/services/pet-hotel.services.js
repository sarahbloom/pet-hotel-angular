PetHotelApp.service('PetHotelService', ['$http', function ($http){
    // console.log('Pet Hotel Service is loaded');

    const self = this;  

    // A pet is paired with an owner by Owner ID
    self.petArray = { list: [] };
    self.ownerArray = { list: [] };

    //get request - get owners and post to DOM
    self.getOwner = function () {
        console.log('in GET /owner');
        $http({
            method: 'GET',
            url: '/owner'
        }).then((response) =>{
            console.log('GET /owner response', response.data);
            self.ownerArray.list = response.data;
        }).catch ((err)=>{
            console.log('err GETTING /owner', err);
        })
    }

    //get request /PET get all pets in database and post to DOM
    self.getPet = function(){
        // console.log('in GET /pet');
        $http({
            method:'GET', 
            url: '/pet'
        }).then((response) =>{
            // console.log('GET /pet response', response.data);
            self.petArray.list = response.data;
        }).catch((err)=>{
            console.log('err GETTING /pet', err);
        })
    }

    //add a new pet
    self.addPet = function(newPet) {
        console.log('clicked button to POST new /pet');
        $http({
            method: "POST",
            url: '/pet',
            data: newPet
        }).then((response)=> {
            console.log('POST /pet response', response);
            self.getPet();
            self.getOwner();
        }).catch((err) => {
            console.log('error making POST /pet request', err);
        })
    }

    self.getPet();
    self.getOwner();

}]);
