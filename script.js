// Index Page


function cleanUpIndex() {
    // removes all of the DOM nodes that are unique to the Index page
    parent = document.querySelector(".main")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}


function createSingleIndex(contact) {
    // creates a DOM node that represents a single index card for the Index page
    // this function will take in a single object,
    // where that object represents a single contact (see examples below)
    // It should output a DOM node, does not need to attach the DOM node to the rest of the DOM
    
    let elementA = document.createElement("a")
    elementA.setAttribute("href", "page3.html")

    let elementDiv = document.createElement("div")
    elementDiv.className = "contact"

    let elementP = document.createElement("p")

    let newContent = document.createTextNode(contact["name"])
    
    elementP.appendChild(newContent)
    elementDiv.appendChild(elementP)
    elementA.appendChild(elementDiv)
    
    return elementA
}

// single contact object
let contact = {name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com"}


function renderIndex(contacts) {
    // creates all of the DOM nodes that are unique to the Index page
    // function will take in a single parameter,
    // which is an array containing many contacts,
    // each of which represents a single contact.
    // this function must actually put DOM nodes onto the web page
    let docParent = document.querySelector(".main")
    
    for (i = 0; i < contacts.length; i++) {
        
        let newContent = document.createTextNode(contacts[i]["name"])
        
        let elementP = document.createElement("p")

        let elementDiv = document.createElement("div")
        elementDiv.className = "contact"

        let elementA = document.createElement("a")
        elementA.setAttribute("href", "page3.html")

        elementP.appendChild(newContent)
        elementDiv.appendChild(elementP)
        elementA.appendChild(elementDiv)
        docParent.appendChild(elementA)
    }   
}

/* Here is an example of a contact list array, with two contacts already populated */
let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    }
  ]