

    function sendToWhatsApp() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      const phone = "917375845758"; // Replace with your number
      const text = `Hello Gajanand777 👋\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
      const encodedText = encodeURIComponent(text);
      const url = `https://wa.me/${phone}?text=${encodedText}`;

      window.open(url, "_blank");
    }
