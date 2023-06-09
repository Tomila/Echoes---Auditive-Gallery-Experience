var myform = $("form#myform");
myform.submit(function(event){
  event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "gmail";
  var template_id = "contact_form";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  .then(function(){
    alert("Sent!");
    myform.find("button").text("Send");
  }, function(err) {
    alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    myform.find("button").text("Send");
  });
  return false;
});