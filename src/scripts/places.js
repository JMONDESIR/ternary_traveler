import API from "./data";
import eventHandler from "./eventHandler";

const locationResults = {
  allPlaces: function() {
    return API.getLocation().then(results => {
      results.forEach(places => {
        console.log(places);
      });
    });
  }
};

const button = document.querySelector("button");
button.addEventListener("click", eventHandler.addLocation);

export default locationResults;
