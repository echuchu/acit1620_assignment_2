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



// Create Page


function cleanUpCreate() {
    // removes all of the DOM nodes that are unique to the Create page
    if (document.title == "Create a New Contact") {
        parent = document.querySelector(".main")
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }
}


// Helper function to set multiple attributes
function setMultipleAttributes(element, attributes) {
    for (var attributeName in attributes) {
       element.setAttribute(attributeName, attributes[attributeName])
    }
 }


function renderCreate(contact) {
    // creates all of the DOM nodes that are unique to the Create page
    // function will take in a single parameter
    // which is an object that represents a single contact
    // decided to pre-populate input fields with contact info
    // this function must actually modify web page
    if (document.title == "Create a New Contact") {
        
        let docParent = document.querySelector(".main")

        let elementDivContactEdit = document.createElement("div")
        elementDivContactEdit.className = "contactedit"

        // self-note of HTML structure
        // .main > div.contactedit > div.contactimg > img.profilepic
        //       > div.form > form > div.inputcontainer * 4 > name/phone/address/email/buttons

        let elementDivContactImg = document.createElement("div")
        elementDivContactImg.className = "contactimg"

        let elementImgProfilePic = document.createElement("img")
        setMultipleAttributes(elementImgProfilePic, {
            "src": "./img/profile.jpg",
            "class": "profilepic",
            "alt": "Profile picture"
        })

        elementDivContactImg.append(elementImgProfilePic)
        elementDivContactEdit.append(elementDivContactImg)


        let elementDivForm = document.createElement("div")
        elementDivForm.className = "form"

        let elementForm = document.createElement("form")
        
        // // Loop this one?
        // let elementDivInputContainer = document.createElement("div")
        // elementDivInputContainer.className = "inputcontainer"

        // Contact Name

        let elementInputContactName = document.createElement("input")
        setMultipleAttributes(elementInputContactName, {
            "type": "text",
            "id": "contactname",
            "name": "contactname",
            "placeholder": "Contact Name"
        })
        elementInputContactName.value = contact.name

        let elementButtonExtraNameField = document.createElement("button")
        setMultipleAttributes(elementButtonExtraNameField, {
            "class": "extrafield",
            "id": "extranamefield",
            "name": "extranamefield"
        })
        elementButtonExtraNameField.textContent = "+"

        // Contact Phone

        let elementInputContactPhone = document.createElement("input")
        setMultipleAttributes(elementInputContactPhone, {
            "type": "tel",
            "id": "contactphone",
            "name": "contactphone",
            "placeholder": "Contact Phone"
        })
        elementInputContactPhone.value = contact.phone
        
        let elementButtonExtraPhoneField = document.createElement("button")
        setMultipleAttributes(elementButtonExtraPhoneField, {
            "class": "extrafield",
            "id": "extraphonefield",
            "name": "extraphonefield"
        })
        elementButtonExtraPhoneField.textContent = "+"

        // Contact Address

        let elementInputContactAddress = document.createElement("input")
        setMultipleAttributes(elementInputContactAddress, {
            "type": "tel",
            "id": "contactaddress",
            "name": "contactaddress",
            "placeholder": "Contact Address"
        })
        elementInputContactAddress.value = contact.address
        
        let elementButtonExtraAddressField = document.createElement("button")
        setMultipleAttributes(elementButtonExtraAddressField, {
            "class": "extrafield",
            "id": "extraaddressfield",
            "name": "extraaddressfield"
        })
        elementButtonExtraAddressField.textContent = "+"

        // Contact Email

        let elementInputContactEmail = document.createElement("input")
        setMultipleAttributes(elementInputContactEmail, {
            "type": "tel",
            "id": "contactemail",
            "name": "contactemail",
            "placeholder": "Contact Email"
        })
        elementInputContactEmail.value = contact.email
        
        let elementButtonExtraEmailField = document.createElement("button")
        setMultipleAttributes(elementButtonExtraEmailField, {
            "class": "extrafield",
            "id": "extraemailfield",
            "name": "extraemailfield"
        })
        elementButtonExtraEmailField.textContent = "+"

        // End of Form Buttons

        let elementDivButtons = document.createElement("div")
        elementDivButtons.className = "buttons"

        let elementButtonSaveContact = document.createElement("button")
        setMultipleAttributes(elementButtonSaveContact, {
            "type": "submit",
            "class": "button save",
            "id": "savecontact",
            "name": "savecontact"
        })
        elementButtonSaveContact.textContent = "Save Contact"

        let elementButtonCancel = document.createElement("button")
        setMultipleAttributes(elementButtonCancel, {
            "type": "reset",
            "class": "button cancel",
            "id": "cancel",
            "name": "cancel"
        })
        elementButtonCancel.textContent = "Cancel"
        
        elementDivButtons.append(elementButtonSaveContact, elementButtonCancel)

        //Array of elements

        let inputs = [elementInputContactName, elementInputContactPhone, elementInputContactAddress, elementInputContactEmail]
        
        let inputbuttons = [elementButtonExtraNameField, elementButtonExtraPhoneField, elementButtonExtraAddressField, elementButtonExtraEmailField]

        // Loop to build Input Container divs and append its children
        for (i = 0; i <=3 ; i++) {
            let elementDivInputContainer = document.createElement("div")
            elementDivInputContainer.className = "inputcontainer"
            elementDivInputContainer.append(inputs[i], inputbuttons[i])
            elementForm.append(elementDivInputContainer)
        }

        // Finish Appending

        elementForm.append(elementDivButtons)
        elementDivForm.append(elementForm)
        elementDivContactEdit.append(elementDivForm)
        
        docParent.append(elementDivContactEdit)
    }
}

// Note to self: delete later if cannot work
// let contactKeys = ["name", "phone", "address", "email"]
// let contactKeys = [contact.name, contact.phone, contact.address, contact.email]
//         //  
//         for (i = 0; i < inputs.length; i++) {
//             let keys = contactKeys[i]
//             console.log(keys)
//             inputs[i].value = contactKeys[i]
//             inputs[i].value = contact.keys
//         }