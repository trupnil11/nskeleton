import jwt from "jsonwebtoken"
            exports.tokenVerify = function(req,res,next){
               try{
                    let secretKey = process.env.JWT_SECRET_KEY;
                    let token =req.headers['authorization'].split(' ')[1] //Remove for Bearer word
                    if(token){
                        if(jwt.verify(token,secretKey)){
                           next();
                        }else{
                            res.status(401).json({auth:false,"message":"Unauthorised token"})
                        }
                    }
                    else
                    {
                      throw new Error({"message":"Unauthorised token"});
                    }
                }
                catch(e){
                    res.status(401).json({auth:false,"message":"Unauthorised token"})
                }
            }
            