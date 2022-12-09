export default async(req,res) => {
    try{
        switch(req.method)
        {
            case 'GET':{
                return res.status(200).json({message:"inside get"})
            }

            case 'POST':{
                try {
                    setTimeout(function(){
                        if (!req.files) {
                            res.send({
                                status: "failed",
                                message: "No file uploaded",
                            });
                        } else {
                            const file = req.files.file;
                
                            console.log(req.files);
                            
                            res.send({
                                status: "success",
                                message: "File is uploaded",
                                data: {
                                    name: file.name,
                                    mimetype: file.mimetype,
                                    size: file.size,
                                },
                            });
                        }
                        
                    }, 3000); 
                    
                   
                } catch (err) {
                    res.status(500).send(err);
                }
            }

            case 'PUT':{
                
            }

                
        }
    }catch(error){
        return res.status(500).json({...error,message:error.message})
    }
}