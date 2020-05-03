// Init GitHub
const gitHub = new GitHub();
// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search Input event Listener
searchUser.addEventListener('keyup', e => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        gitHub.getUser(userText).then(data => {
            if (data.profile.message === 'Not Found') {
                // Show alert
            } else {
                // Show profile
                ui.showProfile(data.profile);
            }
        });
    } else {
        // Clear profile
    }
});
