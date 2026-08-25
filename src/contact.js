export default function contact() {
  
const contactInfo = document.getElementById("content");

contactInfo.innerHTML = "";

const header = document.createElement("h1");

header.textContent = "Contact Us";

contactInfo.appendChild(header);

const phone = document.createElement("h2");

phone.textContent = "Phone";

contactInfo.appendChild(phone);

const phonePara = document.createElement("p");

phonePara.textContent = "0131 1234 9876";

contactInfo.appendChild(phonePara);

const address = document.createElement("h2");
address.textContent = "Address";

contactInfo.appendChild(address);

const addressPara = document.createElement("p");

addressPara.textContent = "3 Greogre Street\nEdinburgh\nEH32YX";
addressPara.style.whiteSpace = "pre-line";

address.appendChild(addressPara);

const email = document.createElement("h2");

email.textContent = "Email";

contactInfo.appendChild(email);

const emailPara = document.createElement("p");

emailPara.textContent = "juanfrancos@homail.co.uk";

email.appendChild(emailPara);

}



