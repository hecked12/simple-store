exports.formatDate = (date) => { 
    if(typeof(date) === "string"){
        date = new Date(date);
    }
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
}

exports.hasRole = (roles, roleName)=>{
    for(let i = 0; i< roles.length; i++){
        if(roles[i].name === roleName){
            return true;
        }
    }
    return false;
}

exports.buildPaginationQuery = (query, page)=>{
    let rQuery = "?";
    rQuery+=`page=${page}&`
    for(let key in query){
        if(key!=="page"){
            rQuery+=`${key}=${query[key]}&`
        }
    }
    return rQuery;
}