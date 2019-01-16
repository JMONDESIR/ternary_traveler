import API from "./data";

const eventHandler = {
  addLocation() {
    const name = document.getElementById("#name");

    const locationObject = {
      name,
      visa_required: true
    };
    API.addLocation(locationObject);
  }
};

export default eventHandler;
