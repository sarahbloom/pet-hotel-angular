PetHotelApp.service('PetHotelService', ['$http', function ($http){
    console.log('Pet Hotel Service is loaded');

    const self = this;  

    // A pet is a crew paired with an owner
    self.petArray = { list: [] };
    self.ownerArray = { list: [] };

    //get request /OWNER



    //get request /PET
    self.getPet = function(){
        console.log('in GET /pet');
        $http({
            method:'GET', 
            url: '/pet'
        }).then((response) =>{
            console.log('GET /pet response', response);
            self.petArray.list = response.rows
        }).catch((err)=>{
            console.log('err GETTING /pet', err);
        })
    }

    self.getPet();

}]);
