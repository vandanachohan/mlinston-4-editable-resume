

//       // Listen to form submission
// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//    event.preventDefault();

//    // Type assertion
//    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
//    const nameElement = document.getElementById('name') as HTMLInputElement;
//    const emailElement = document.getElementById('email') as HTMLInputElement;
//    const phoneElement = document.getElementById('phone') as HTMLInputElement;
//    const educationElement = document.getElementById('education') as HTMLInputElement;
//    const experienceElement = document.getElementById('work-experience') as HTMLInputElement;
//    const skillsElement = document.getElementById('skills') as HTMLInputElement;

//    // Check if all elements are present
//    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//        const name = nameElement.value;
//        const email = emailElement.value;
//        const phone = phoneElement.value;
//        const education = educationElement.value;
//        const experience = experienceElement.value;
//        const skills = skillsElement.value;

//        // Profile picture handling
//        const profilePictureFile = profilePictureInput.files?.[0];
//        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

//        // Create resume output
//        const resumeOutput = `
//            <h2>Resume</h2>
//            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
//            <p><strong>Name:</strong> ${name}</p>
//            <p><strong>Email:</strong> ${email}</p>
//            <p><strong>Phone:</strong> ${phone}</p>

//            <h3>Education</h3>
//            <p>${education}</p>

//            <h3>Experience</h3>
//            <p>${experience}</p>

//            <h3>Skills</h3>
//            <p>${skills}</p>
//        `;

//        const resumeOutputElement = document.getElementById('resumeOutput');
//        if (resumeOutputElement) {
//            resumeOutputElement.innerHTML = resumeOutput;
//        } else {
//            console.error('The resume output element is missing');
//        }

//    } else {
//        console.error('One or more form elements are missing');
//    }
// });

    
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement; // added this

    // Check if all inputs are available
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Profile picture handling
       const profilePictureFile = profilePictureInput.files?.[0];
       const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Create editable Resume output
        const resumeOutput = `
            <h2>Editable Resume</h2>        
            
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}

            <label><strong>Name:</strong></label>
            <input type="text" id="editName" value="${name}"><br>

            <label><strong>Email:</strong></label>
            <input type="email" id="editEmail" value="${email}"><br>

            <label><strong>Phone Number:</strong></label>
            <input type="tel" id="editPhone" value="${phone}"><br>

            <h3>Education</h3>
            <textarea id="editEducation">${education}</textarea><br>

            <h3>Experience</h3>
            <textarea id="editExperience">${experience}</textarea><br>

            <h3>Skills</h3>
            <textarea id="editSkills">${skills}</textarea><br>

            <button id="updateResume">Update Resume</button>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;

            // Add functionality to the update button
            document.getElementById('updateResume')?.addEventListener('click', function() {
                const updatedName = (document.getElementById('editName') as HTMLInputElement).value;
                const updatedEmail = (document.getElementById('editEmail') as HTMLInputElement).value;
                const updatedPhone = (document.getElementById('editPhone') as HTMLInputElement).value;
                const updatedEducation = (document.getElementById('editEducation') as HTMLTextAreaElement).value;
                const updatedExperience = (document.getElementById('editExperience') as HTMLTextAreaElement).value;
                const updatedSkills = (document.getElementById('editSkills') as HTMLTextAreaElement).value;

                // Update the form values with the edited information
                nameElement.value = updatedName;
                emailElement.value = updatedEmail;
                phoneElement.value = updatedPhone;
                educationElement.value = updatedEducation;
                experienceElement.value = updatedExperience;
                skillsElement.value = updatedSkills;

                alert('Resume updated successfully!');
            });
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});
