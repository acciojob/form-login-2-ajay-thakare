const input1 = document.getElementById("fName");
    const input2 = document.getElementById("lName");
    const input3 = document.getElementById("phone");
    const input4 = document.getElementById("email");

    const form = document.querySelector("#myForm");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        `First Name: ${input1.value} Last Name: ${input2.value} Phone Number: ${input3.value} Email ID: ${input4.value}`,
      );
    });