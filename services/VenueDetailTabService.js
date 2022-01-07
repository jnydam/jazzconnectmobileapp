const processRawEventData = (rawArray) => {

    let newEventArray = [];


    for (let i = 0; i < rawArray.length; i++) {

        let object = rawArray[i];

        let eventName = object.eventName;
        let eventImage = object.eventImage;
        let eventDate = object.eventDate;

        let obj = {
            name: eventName,
            image: eventImage,
            date: eventDate
        }

        newEventArray.push(obj);

    }

    return newEventArray;

};

export {processRawEventData};