import axios from "axios";

export const axiosWrapper = async (ctx, {method, url, params = {}, postData = {}}) => {
	try{
		const data = await axios({
			method: method,
			url: url,
			params, 
			data: postData
		});

        ctx.commit('updateIsLoading', false);

		return [data, null];
	}catch(error){
        console.error(error);
        ctx.commit('updateIsLoading', false);
		return [null, error];
	}
}