let loadout1 = [];
let uniqueId = [];

module.exports={
    test:(req,res) =>{
        let {query,params,body} = req;
        res.status(200).send('Hey I Worked!!!');
    },
    getLoadout1:(req,res)=>{
        res.status(200).send(loadout1)
    }

}