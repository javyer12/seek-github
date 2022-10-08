import { urlFetch } from '../constant/index';

const gettingUser = async userHub => {
        let payload;
        try {
                const response = await fetch(`${urlFetch}${userHub}`, {
                        method: 'GET',
                });
                payload = response.json()
        } catch (error) {
                throw Error(error);
        }
        return payload;
}

export default gettingUser;
