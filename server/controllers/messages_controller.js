var messages = []
var id = 0

module.exports={ 
    create: ( req, res ) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send( messages );
      },
    read: (req, res) =>{
        res.status(200).send(messages)
    },
    update: ( req, res ) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const index = messages.findIndex( message => message.id == updateID );
        let message = messages[ index ];
    
        messages[ index ] = {
          id: message.id,
          text: text || message.text,
          time: message.time
        };
    
        res.status(200).send( messages );
      },
    delete: (req, res) => {
        let index = null
        messages.forEach((message, i)=> {
            if(messages.id === Number(req.params.id)) index =i
        })
        messages.splice(index, 1)
        
        res.status(200).send(messages)
    }

}