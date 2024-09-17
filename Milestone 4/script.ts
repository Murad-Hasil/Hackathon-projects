// Get reference to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;


// Handle for sub
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();


  // Collect input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Generate the resume coontant dynamically
  const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</p>
    <p><b>Address:</b><span contenteditable="true">${address}</p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>`;

    // Display the resume content in the resume-display element
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error("resume-display element not found");
  }
});