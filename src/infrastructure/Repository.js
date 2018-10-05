class Repository {

    constructor(){
        this.key = 'rede-social';
    }

    save(json, callback){
        let data = JSON.stringify(json);
        window.localStorage.setItem(this.key, data);

        callback();
    }

    retrieve(sucess, error){
        console.log('chegou retrive')
        let data = window.localStorage.getItem(this.key);
        let json = JSON.parse(data);

        if(json){
            sucess(json);
        }else{
            error();
        }
    }

}

export default Repository;