const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("event listener working");

  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstName: $.querySelector("#firstname").value,
      lastName: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };

    console.log(data);

    try {
      const response = await axios.post("http://localhost:3000/form", data);

      console.log("data===>", data);
      console.log(response);
      alert("Merci pour les infos!");
    } catch (error) {
      console.log(error);
    }
  });
});
