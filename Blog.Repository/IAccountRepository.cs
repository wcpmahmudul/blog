﻿using Blog.Models.Account;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Blog.Repository
{
    public interface IAccountRepository
    {
        public Task<IdentityResult> CreateAsync(ApplicationUserIdentity user, CancellationToken cancellationToken);
        public Task<ApplicationUserIdentity> GetByUsernameAsync(string normalizedUsername, CancellationToken cancellationToken);
    }
}
 