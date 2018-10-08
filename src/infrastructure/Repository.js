class Repository {

    constructor(){
        this.key = 'rede-social';
    }

    save(json, callback){
        let data = JSON.stringify(json);
        window.localStorage.setItem(this.key, data);

        callback();
    }

    retrieveAll(sucess, error){
        console.log('chegou retrive')
        let data = window.localStorage.getItem(this.key);
        let json = JSON.parse(data);

        if(json){
            sucess(json);
        }else{
            error();
        }
    }

    retrieveOne(id ,sucess, error){
        let data = window.localStorage.getItem(this.key);
        let json = JSON.parse(data);

        let oneDataFiltered = json.filter((el) => {
            if(el._id === id){
                return el;
            }
        });

        if(oneDataFiltered){
            sucess(oneDataFiltered[0]);
        }else{
            error();
        }
    }

}

export default Repository;