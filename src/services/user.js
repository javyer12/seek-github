import { urlFetch } from '../constant/index.js';

const gettingUser = async (githubUser) => {
        let payload;
        try {
                const response = await fetch(`${urlFetch}${githubUser}`, {
                        method: 'GET',
                });
                payload = response.json()
        } catch (error) {
                alert('Something went wrong fetching the Github user!!');
                console.log(error.message)
        }
        return payload;
}

export default gettingUser;
