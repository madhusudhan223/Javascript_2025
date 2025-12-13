
    document.getElementById("userForm").addEventListener("submit", async function (e) {
        e.preventDefault();

    const username = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;

    const interests = [];
            document.querySelectorAll(".checkbox-group input:checked").forEach(c => {
                interests.push(c.value);
               });

    const payload = {
        username,
        phone,
        gender,
        interests
    };

    console.log(payload)

    // Example backend API endpoint (replace with your actual backend URL)
        const API_URL = "https://jsonplaceholder.typicode.com/posts";

    try {
                const res = await fetch(API_URL, {
                  method: "POST",
                 headers: {"Content-Type": "application/json" },
                 body: JSON.stringify(payload)
                });

    document.getElementById("message").innerText =
    res.ok ? "Form submitted successfully!" : "Failed to submit!";
    document.getElementById("message").style.color = res.ok ? "green" : "red";

            } catch (err) {
        document.getElementById("message").innerText = "Error sending data!";
    document.getElementById("message").style.color = "red";
    console.error(err);
            }
        });