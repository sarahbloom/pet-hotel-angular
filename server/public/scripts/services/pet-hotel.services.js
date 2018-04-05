PetHotelApp.service('PetHotelService', ['$http', function ($http){
    console.log('Pet Hotel Service is loaded');

    const self = this;  

    // A pet is a crew paired with an owner
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
        }).catch ((error)=>{
            console.log('err GETTING /pet', err);
        })
    }


    //get request /PET
    self.getPet = function(){
        console.log('in GET /pet');
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

    self.getPet();
    self.getOwner();

}]);
