import API from "./data";

const eventHandler = {
  addLocation() {
    const name = document.getElementById("#name");

    const locationObject = {
      id: 1,
      placeId,
      name,
      description,
      cost,
      review
    };
    API.addLocation(locationObject);
  }
};

export default eventHandler;
