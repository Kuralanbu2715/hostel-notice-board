function addNotice() {
    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;

    fetch("/api/notices", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, message })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("status").innerText = data.status;
    });
}

function loadNotices() {
    fetch("/api/notices")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("notices");
        container.innerHTML = "";

        data.forEach(n => {
            container.innerHTML += `
                <div class="notice">
                    <h3>${n.title}</h3>
                    <p>${n.message}</p>
                    <small>${n.date}</small>
                </div>
            `;
        });
    });
}
