import { urlFetch } from '../constant/index';

const gettingUser = async userHub => {
        let payload;
        try {
                const response = await fetch(`${urlFetch}${userHub}`, {
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
