//       // Listen to form submission
// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//    event.preventDefault();
var _a;
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
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a, _b;
    event.preventDefault();
    // Get elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var profilePictureInput = document.getElementById('profilePicture'); // added this
    // Check if all inputs are available
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Profile picture handling
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Create editable Resume output
        var resumeOutput = "\n            <h2>Editable Resume</h2>        \n            \n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n\n            <label><strong>Name:</strong></label>\n            <input type=\"text\" id=\"editName\" value=\"").concat(name_1, "\"><br>\n\n            <label><strong>Email:</strong></label>\n            <input type=\"email\" id=\"editEmail\" value=\"").concat(email, "\"><br>\n\n            <label><strong>Phone Number:</strong></label>\n            <input type=\"tel\" id=\"editPhone\" value=\"").concat(phone, "\"><br>\n\n            <h3>Education</h3>\n            <textarea id=\"editEducation\">").concat(education, "</textarea><br>\n\n            <h3>Experience</h3>\n            <textarea id=\"editExperience\">").concat(experience, "</textarea><br>\n\n            <h3>Skills</h3>\n            <textarea id=\"editSkills\">").concat(skills, "</textarea><br>\n\n            <button id=\"updateResume\">Update Resume</button>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // Add functionality to the update button
            (_b = document.getElementById('updateResume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
                var updatedName = document.getElementById('editName').value;
                var updatedEmail = document.getElementById('editEmail').value;
                var updatedPhone = document.getElementById('editPhone').value;
                var updatedEducation = document.getElementById('editEducation').value;
                var updatedExperience = document.getElementById('editExperience').value;
                var updatedSkills = document.getElementById('editSkills').value;
                // Update the form values with the edited information
                nameElement.value = updatedName;
                emailElement.value = updatedEmail;
                phoneElement.value = updatedPhone;
                educationElement.value = updatedEducation;
                experienceElement.value = updatedExperience;
                skillsElement.value = updatedSkills;
                alert('Resume updated successfully!');
            });
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
