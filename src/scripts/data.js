import eventHandler from "./eventHandler";

const API = {
  getLocation: function() {
    return fetch("http://localhost:8088/places").then(function(res) {
      return res.json();
    });
  },
  addLocation: function(locationObject) {
    fetch("http://localhost:8088/interests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(locationObject)
    });
  }
};
export default API;
