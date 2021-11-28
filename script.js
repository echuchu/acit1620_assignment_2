// *** means comments are notes for my own reference


// Re-used variable
const docParent = document.querySelector(".main")


// Contacts

//Single contact object
let contact = {
    name: "Raquel Ervin",
    phone: "+1 555 555-5555",
    address: "123 front st, Unit #1, Dakota City",
    email: "rocket@gmail.com",
}

//Array of contacts
let contactList = [
    {
      name: "Barry Allen",
      phone: "+1 555 555-5555",
      address: "123 front st, Unit #1, Dakota City",
      email: "theflash@gmail.com",
    },
    {
      name: "Beverly Crusher",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "chiefmedicalofficer@slack.example.com",
    }, 
    {
      name: "Diana Prince",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "wonderwoman@doc.example.com",
    }
]



// Helper functions used in functions 

//Helper function to create element and set classname
function createElement(tag, className) {
    let element = document.createElement(tag)
    element.className = className
    return element
}

//Helper function to set multiple attributes
function setMultipleAttributes(element, attributes) {
    for (var attributeName in attributes) {
       element.setAttribute(attributeName, attributes[attributeName])
    }
 }



// Index Page

function cleanUpIndex() {
    // removes all of the DOM nodes that are unique to the Index page
    // the DOM nodes unique to index/Contacts are all in div.main
    
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
    // it should output a DOM node
    // does not need to attach the DOM node to the rest of the DOM

    let elementA = document.createElement("a")
    elementA.setAttribute("href", "page3.html")

    let elementDiv = createElement("div", "contact")

    let elementP = document.createElement("p")
    elementP.textContent = `${contact["name"]}`
    
    elementDiv.appendChild(elementP)
    elementA.appendChild(elementDiv)
    
    return elementA
}


function renderIndex(contacts) {
    // creates all of the DOM nodes that are unique to the Index page
    // function will take in a single parameter,
    // which is an array containing many contacts,
    // each of which represents a single contact.
    // this function must actually put DOM nodes onto the web page

    for (let i = 0; i < contacts.length; i++) {
        
        let contact = contacts[i]

        docParent.appendChild(createSingleIndex(contact))

        //***for my own clarity when testing:
        //console.log(`added ${contact.name}`)
    }   
    //console.log(`added ${contacts.length} contacts`)
}



// View Page

function cleanUpView() {
    // removes all of the DOM nodes that are unique to the View page
    // the DOM nodes unique to view/Contact Name are all in div.main

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
    
    let elementDivContactInfo = createElement("div", "contactinfo")

    let elementDivContactName = createElement("div", "contactname")
    elementDivContactName.textContent = ` ${contact.name} `

    let elementImg = document.createElement("img")
    setMultipleAttributes(elementImg, {
        "src": "./img/profile.jpg",
        "class": "profilepic",
        "alt": "Profile picture"
    })

    elementDivContactName.appendChild(elementImg)

    let elementDivContactEmail = createElement("div", "contactemail")
    elementDivContactEmail.textContent = `email: ${contact.email}`

    let elementDivContactPhone = createElement("div", "contactphone")
    elementDivContactPhone.textContent = `cell: ${contact.phone}`

    let elementDivContactAddress = createElement("div", "contactaddress")
    elementDivContactAddress.textContent = `address: ${contact.address}`

    let elementDivButtons = createElement("div", "buttons")

    let elementButtonEdit = createElement("button", "button edit")
    elementButtonEdit.value = "Edit"
    elementButtonEdit.textContent = "Edit"

    let elementButtonClose = createElement("button", "button close")
    elementButtonClose.value = "Close"
    elementButtonClose.textContent = "Close"

    elementDivButtons.append(elementButtonEdit, elementButtonClose)

    elementDivContactInfo.append(elementDivContactName, elementDivContactEmail, elementDivContactPhone, elementDivContactAddress, elementDivButtons)
    
    docParent.appendChild(elementDivContactInfo)
}



// Create Page

function cleanUpCreate() {
    // removes all of the DOM nodes that are unique to the Create page
    // the DOM nodes unique to Create/Create a New Contact are all in .main

    if (document.title == "Create a New Contact") {
        parent = document.querySelector(".main")
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }
}


function renderCreate(contact) {
    // creates all of the DOM nodes that are unique to the Create page
    // function will take in a single parameter
    // which is an object that represents a single contact
    // this function must actually modify web page
    // decided to pre-populate input fields with contact info

    // *** self-note of HTML structure
    // .main > div.contactedit > div.contactimg > img.profilepic
    //       > div.form > form > div.inputcontainer * 4 > name/phone/address/email/buttons

    //Top divs of main
    let elementDivContactEdit = createElement("div", "contactedit")

    let elementDivContactImg = createElement("div", "contactimg")

    let elementImgProfilePic = document.createElement("img")
    setMultipleAttributes(elementImgProfilePic, {
        "src": "./img/profile.jpg",
        "class": "profilepic",
        "alt": "Profile picture"
    })

    //Append top divs in main
    elementDivContactImg.append(elementImgProfilePic)
    elementDivContactEdit.append(elementDivContactImg)

    //Bottom divs of main
    let elementDivForm = createElement("div", "form")

    let elementForm = document.createElement("form")

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

    let elementDivButtons = createElement("div", "buttons")

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
    
    //Append buttons
    elementDivButtons.append(elementButtonSaveContact, elementButtonCancel)

    //Arrays of elements
    let inputs = [elementInputContactName, elementInputContactPhone, elementInputContactAddress, elementInputContactEmail]
    
    let inputbuttons = [elementButtonExtraNameField, elementButtonExtraPhoneField, elementButtonExtraAddressField, elementButtonExtraEmailField]
    
    //Loop to build Input Container divs and append its children
    for (let i = 0; i <=3 ; i++) {
        let elementDivInputContainer = document.createElement("div")
        elementDivInputContainer.className = "inputcontainer"
        elementDivInputContainer.append(inputs[i], inputbuttons[i])
        elementForm.append(elementDivInputContainer)
    }

    // //***Could not figure out how to address if order of inputs does not match order of contact properties, did not implement loop, left for my own reference
    // //Auto-populate form with contact info from parameter
    // let contactKeys = Object.keys(contact)
    // for (let i = 0; i < inputs.length; i++) {
    //     let keys = contactKeys[i]
    //     inputs[i].value = contact[contactKeys[i]]
    // }

    // Finish Appending
    elementForm.append(elementDivButtons)
    elementDivForm.append(elementForm)
    elementDivContactEdit.append(elementDivForm)
    docParent.append(elementDivContactEdit)
}