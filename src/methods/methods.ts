const getAvatarShortName = (username?:string) => {
    if(username){
        const wordsArray = username.split(" ");
        const result = wordsArray.map(word => word.slice(0,1));
        return result.join("").slice(0,2).toUpperCase();
    }
    return null;
};

export { getAvatarShortName };