const DOM = {
  createAndAppend() {
    let container = document.getElementsByClassName("#output");
    let nameInput = document.createElement("input");
    let descriptionInput = document.createElement("input");
    let costInput = document.createElement("input");
    let locationTab = document.createElement("select");

    container.appendChild(nameInput);

    container.appendChild(descriptionInput);

    container.appendChild(costInput);

    container.appendChild(locationTab);

    return container;
  }
};

export default DOM;
