<script>
    function submitForm() {
        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const genderMale = document.getElementById('male').checked;
        const genderFemale = document.getElementById('female').checked;
        const gender = genderMale ? 'Male' : (genderFemale ? 'Female' : 'Not specified');
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        // Display values in the popup
        document.getElementById('popupFirstName').textContent = firstName;
        document.getElementById('popupLastName').textContent = lastName;
        document.getElementById('popupDOB').textContent = dob;
        document.getElementById('popupCountry').textContent = country;
        document.getElementById('popupGender').textContent = gender;
        document.getElementById('popupProfession').textContent = profession;
        document.getElementById('popupEmail').textContent = email;
        document.getElementById('popupMobile').textContent = mobile;

        // Show the popup
        document.getElementById('popup').style.display = 'block';
    }

    function closePopup() {
        // Close the popup and reset the form
        document.getElementById('popup').style.display = 'none';
        document.getElementById('surveyForm').reset();
    }

    function resetForm() {
        // Reset the form without displaying the popup
        document.getElementById('surveyForm').reset();
    }
</script>