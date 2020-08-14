using System;    
using System.Collections.Generic;    
using System.Linq;    
using System.Net;    
using System.Net.Http;    
using System.Web.Http;    
using LoginApplication.Models;    
    
namespace LoginApplication.Controllers

{    

    [RoutePrefix("Api/Login")]    

    public class LoginController : ApiController    

    {
   
        [Route("SocialmediaData")]    
        [HttpPost]    
        public object SocialmediaData(UserDetails user)
        {    
            try    

            {    

                DemotestEntities DB = new DemotestEntities();    
                Socaillogin Social = new Socaillogin();

                if (Social.Id==0)
                {

                    Social.Name = user.Name;
                    Social.Email = user.Email;
                    Social.ProviderName = user.ProviderName;
                    Social.Image = user.Image;
                    Social.Token = user.Token;
                    var res = DB.Socaillogins.Add(Social);
                    DB.SaveChanges();
                    return res;
                }
                  
            }    
            catch (Exception)    
            {    
                throw;    
            }    
            return new Response    
            { Status = "Error", Message = "Data." };    
        }    
    }    
}   