import User from "../../../models/user";
function CreateLoginsRoutes (server){

server.route([
    {
        method:"GET",
        path: "/api/v1/login",
        handler: function (request,reply){
            const {userName,password}= request.query;
            var registro = User.find({userName:userName,password:password})
            registro.count()
            return registro
        }
    },
    {
        method:"POST",
        path: "/api/v1/login",
        handler: function (request,reply){
            const {userName,password,email}= request.payload;
            const user =new User ({
                userName,password,email
            })
            return user.save();
        }
    }
])

}
export default CreateLoginsRoutes

