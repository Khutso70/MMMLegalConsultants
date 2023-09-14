function sendMail() {
  let params = {
    email: document.getElementById("email").value,
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    from: document.getElementById("from").value,
    you_are: document.getElementById("you_are").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const serviceid = "service_ti96e1x";
  const templateId = "template_yb1ei3m";

  emailjs
    .send(serviceid, templateId, params)
    .then((res) => {
      document.getElementById("email").value = "";
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("from").value = "";
      document.getElementById("you_are").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Message sent successfully");
    })
    .catch((err) => console.log(err));
}
