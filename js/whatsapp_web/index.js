let messageData = [ {
  "id": 1,
  "title": "menjeet",
  "imageURL": "someUrl",
  "orderId": "OD123",
  "messageList": [
    {
      "messageId": "msg1",
      "message": "Hi",
      "messageType": "text",
      "type": "sent"
    },
    {
      "messageId": "msg2",
      "message": "need assistance",
      "messageType": "text",
      "type": "recieved"
    }
  ]
},
{
  "id": 2,
  "title": "Ram",
  "imageURL": "someUrl2",
  "orderId": "OD1234",
  "messageList": []
},
{
  "id": 3,
  "title": "Geeta",
  "imageURL": "someUrl2",
  "orderId": "OD1234",
  "messageList": []
},
{
  "id": 4,
  "title": "Bholu",
  "imageURL": "someUrl2",
  "orderId": "OD1234",
  "messageList": []
},
]

class WhatsappWeb {
  constructor(data) {
    this.messageData = null;
    this.selectedProfileId = null;
    this.usersList = null;
    this.fileterdUsersList = null;
  }
  
  whatsAppInit() {
    this.messageData = [ {
      "id": 1,
      "title": "menjeet",
      "imageURL": "someUrl",
      "orderId": "OD123",
      "messageList": [
        {
          "messageId": "msg1",
          "message": "Hi",
          "messageType": "text",
          "type": "sent"
        },
        {
          "messageId": "msg2",
          "message": "need assistance",
          "messageType": "text",
          "type": "recieved"
        },{
          "messageId": "msg3",
          "message": "Hi same here",
          "messageType": "text",
          "type": "sent"
        },
        {
          "messageId": "msg4",
          "message": "hey thanks",
          "messageType": "text",
          "type": "recieved"
        }
      ]
    },
    {
      "id": 2,
      "title": "Ram",
      "imageURL": "someUrl2",
      "orderId": "OD1234",
      "messageList": [
        {
          "messageId": "msg1",
          "message": "Hi",
          "messageType": "text",
          "type": "sent"
        },
        {
          "messageId": "msg2",
          "message": "need assistance",
          "messageType": "text",
          "type": "recieved"
        },{
          "messageId": "msg3",
          "message": "Hi same here",
          "messageType": "text",
          "type": "sent"
        },
        {
          "messageId": "msg4",
          "message": "hey thanks uyhrfius rtgvsrtgvrtg",
          "messageType": "text",
          "type": "recieved"
        },{
          "messageId": "msg1",
          "message": "Hi",
          "messageType": "text jahdbfuch isuehrfuhsriu tfguisrhtguvsrt gvhiusrthgv iusrhtgiuvhsiurthgv uisrhtgvuihsrtighviusrhgivu",
          "type": "recieved"
        },
        {
          "messageId": "msg2",
          "message": "need assistance",
          "messageType": "text",
          "type": "recieved"
        },{
          "messageId": "msg3",
          "message": "Hi same here",
          "messageType": "text",
          "type": "sent"
        },
        {
          "messageId": "msg4",
          "message": "hey thanks",
          "messageType": "text",
          "type": "recieved"
        },
        {
          "messageId": "msg1",
          "message": "Hi",
          "messageType": "text",
          "type": "sent"
        },
        {
          "messageId": "msg2",
          "message": "need assistance",
          "messageType": "text",
          "type": "recieved"
        },{
          "messageId": "msg3",
          "message": "Hi same here",
          "messageType": "text",
          "type": "sent"
        },{
          "messageId": "msg3",
          "message": "Hi same here",
          "messageType": "text",
          "type": "sent"
        },{
          "messageId": "msg3",
          "message": "Hi same here",
          "messageType": "text",
          "type": "sent"
        }
      ]
    },
    {
      "id": 3,
      "title": "Geeta",
      "imageURL": "someUrl2",
      "orderId": "OD1234",
      "messageList": []
    },
    {
      "id": 4,
      "title": "Bholu",
      "imageURL": "someUrl2",
      "orderId": "OD1234",
      "messageList": []
    },
    ]
    this.setUsersList();
    this.showContactList();
    let contactsSearchInput = this.el('#search-user');
    contactsSearchInput.addEventListener('keyup', this.searchContactList.bind(this))
  }
  setUsersList() {
    this.usersList = this.messageData.map(data => {
      return {
        id: data.id,
        title: data.title,
        image: data.imageURL
      }
    })
  }
  el(selector) {
    return document.querySelectorAll(selector)[0];
  }

  searchContactList() {
    let contactsSearchValue = this.el('#search-user').value;
    this.fileterdUsersList = null;
    if(contactsSearchValue.length > 0) {
      this.fileterdUsersList = this.usersList.filter(data => data.title.toLowerCase().includes(contactsSearchValue.toLowerCase()));
    }
    this.showContactList();
  }

  showContactList() {

    let usersList = this.fileterdUsersList && this.fileterdUsersList.length > 0 ? this.fileterdUsersList: this.usersList;
    let holder = document.createDocumentFragment();
    let listContainer = this.el('.contact-list-container');
    listContainer.innerHTML = '';
    usersList.forEach(user => {
      let div = document.createElement('DIV');
      div.className = 'contact-list-item'
      div.innerHTML = `<img class="contact-item-image" src="${user.imageURL}"/>
      <label class="contact-item-name">${user.title}</label>`
      div.addEventListener('click', this.showMessages.bind(this, user.id))
      holder.appendChild(div);
    })
    listContainer.appendChild(holder);
  }

  showMessages(id) {
    this.selectedProfileId = id;
    let messageData = this.messageData.filter(msg => msg.id == id)[0];
    messageData = messageData.messageList;
    let messageDisplayCont = this.el('.message-display-body-messages');
    messageDisplayCont.innerHTML = '';
    let holder = document.createDocumentFragment();
    messageData.forEach(msg => {
      let div = document.createElement('DIV');
      div.style.display = 'flex';
      div.style.justifyContent = msg.type == 'sent' ? 'flex-end':'flex-start'
      div.className = 'messageHolder';
      div.innerHTML = `<label class="message-label">${msg.message}</label>`;
      holder.appendChild(div);
    })
    messageDisplayCont.appendChild(holder);
    messageDisplayCont.scrollTop = messageDisplayCont.scrollHeight;
  }

  sendNewMessage() {

  }
}

let messageBox = new WhatsappWeb();
messageBox.whatsAppInit();
