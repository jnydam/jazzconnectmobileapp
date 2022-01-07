const processVenueResponse = (response) => {

    let processedResponseArray = [];

    for (let i = 0; i < response.length; i++) {

        let object = response[i];

        let name = object.name;
        let address = object.address;
        let id = object.id;

        let newObject = {
            name: name,
            address: address,
            id: id
        }

        processedResponseArray.push(newObject);
    }

    return processedResponseArray;




};

export { processVenueResponse };

