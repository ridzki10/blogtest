const coba = () => {
    return('test');
}

const getDataPost = async (page) => {
    try {
        let urlPosts = `https://gorest.co.in/public/v2/posts?page=${page}&per_page=20`;    
        let responsePosts = await fetch(urlPosts);

        if(!responsePosts.ok) {
            throw new Error(`Terjadi gangguan: ${response.status}}`);
        }
    
        let dataPosts = await responsePosts.json();
        // return dataPosts;
        console.log(dataPosts);
    }
    catch(error) {
        console.log(error);
    }
}

const getDataUsers = async () => {
    try {
        let urlUsers = `https://gorest.co.in/public/v2/users`;        
        let responseUsers = await fetch(urlUsers);

        if(!responseUsers.ok) {
            throw new Error(`Terjadi gangguan: ${response.status}}`);
        }
        
        let dataUsers = await responseUsers.json();
        return dataUsers;
    }    
    catch(error) {
        console.log(error);
    }
}

export {getDataPost,getDataUsers,coba};
