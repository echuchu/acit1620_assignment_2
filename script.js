// Index Page


function cleanUpIndex() {
    // removes all of the DOM nodes that are unique to the Index page
    if (document.title == "Contacts") {
        parent = document.querySelector(".main")
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }
}


function createSingleIndex(contact) {
    // creates a DOM node that represents a single index card for the Index page
    // this function will take in a single object,
    // where that object represents a single contact (see examples below)
    // It should output a DOM node, does not need to attach the DOM node to the rest of the DOM
    if (document.title == "Contacts") {

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
    if (document.title == "Contacts") {
        let docParent = document.querySelector(".main")
        
        for (i = 0; i < contacts.length; i++) {
            
            let contact = contacts[i]

            docParent.appendChild(createSingleIndex(contact))

            // for my own clarity when testing:
            // console.log(`added ${contact.name}`)
        }   
        // console.log(`added ${contacts.length} contacts`)
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



// View Page


  function cleanUpView() {
    // removes all of the DOM nodes that are unique to the View page
    if (document.title == "Contact Name") {
        parent = document.querySelector(".main")
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }
}


function renderView(contact) {
    // creates all of the DOM nodes that are unique to the View page
    // function will take in a single parameter,
    // which is an object that represents a single contact
    // this function must actually modify web page
    if (document.title == "Contact Name") {
        let docParent = document.querySelector(".main")
        
        let elementDivContactInfo = document.createElement("div")
        elementDivContactInfo.className = "contactinfo"

        let elementDivContactName = document.createElement("div")
        elementDivContactName.className = "contactname"
        elementDivContactName.textContent = ` ${contact.name} `

        let elementImg = document.createElement("img")
        elementImg.setAttribute("src", "./img/profile.jpg")
        elementImg.className = "profilepic"
        elementImg.setAttribute("alt", "Profile picture")

        elementDivContactName.appendChild(elementImg)

        let elementDivContactEmail = document.createElement("div")
        elementDivContactEmail.className = "contactemail"
        elementDivContactEmail.textContent = `email: ${contact.email}`

        let elementDivContactPhone = document.createElement("div")
        elementDivContactPhone.className = "contactphone"
        elementDivContactPhone.textContent = `cell: ${contact.phone}`

        let elementDivContactAddress = document.createElement("div")
        elementDivContactAddress.className = "contactaddress"
        elementDivContactAddress.textContent = `address: ${contact.address}`

        let elementDivButtons = document.createElement("div")
        elementDivButtons.className = "buttons"

        let elementButtonEdit = document.createElement("button")
        elementButtonEdit.className = "button edit"
        elementButtonEdit.value = "Edit"
        elementButtonEdit.textContent = "Edit"

        let elementButtonClose = document.createElement("button")
        elementButtonClose.className = "button close"
        elementButtonClose.value = "Close"
        elementButtonClose.textContent = "Close"

        elementDivButtons.append(elementButtonEdit, elementButtonClose)

        elementDivContactInfo.append(elementDivContactName, elementDivContactEmail, elementDivContactPhone, elementDivContactAddress, elementDivButtons)
        
        docParent.appendChild(elementDivContactInfo)
    }
}