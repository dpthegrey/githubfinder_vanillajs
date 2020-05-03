class GitHub {
    constructor() {
        this.client_id = '46db9aea5319acda6908';
        this.client_secret = '8faa16a580bc7751c23722412948ad6391091c23';
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();

        return {
            profile,
        };
    }
}
