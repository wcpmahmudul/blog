using Blog.Models.Account;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Services
{
public    interface ITokenService
    {
        public string CreateToken(ApplicationUserIdentity user);
    }
}
