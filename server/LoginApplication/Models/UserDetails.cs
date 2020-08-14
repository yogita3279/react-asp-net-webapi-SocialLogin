using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoginApplication.Models
{
    public class UserDetails
    {
        public int Id { get; set; }    
        public string Name { get; set; }    
        public string Email { get; set; }    
        public string ProviderName { get; set; }    
        public string Image { get; set; }    
        public string Token { get; set; }
    }
}