const form = document.getElementById("form");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const displayPic = document.getElementById("displayPic");
const memberDiv = document.getElementById("members");
const memberCount = document.getElementById("memberCount");

// Generate member inputs
memberCount.addEventListener("change", () => {
  memberDiv.innerHTML = "";
  let totalMembers = parseInt(memberCount.value);
  let additionalMembers = totalMembers - 1; // Subtract 1 for the lead

  for (let i = 1; i <= additionalMembers; i++) {
    memberDiv.innerHTML += `
      <input type="text" placeholder="Member ${i} Name" required>
      <input type="text" placeholder="Member ${i} Roll No" required>
    `;
  }
});

// Handle form submit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const file = document.getElementById("photo").files[0];
  const reader = new FileReader();

  reader.onload = function() {
    displayPic.src = reader.result;
  };

  reader.readAsDataURL(file);

  form.style.display = "none";
  loading.classList.remove("hidden");

  // Random delay between 20-30 sec
  let delay = Math.floor(Math.random() * 10000) + 20000;

  setTimeout(() => {
    loading.classList.add("hidden");
    result.classList.remove("hidden");
  }, delay);
});