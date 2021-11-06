﻿using Blog.Models.Blog;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Repository
{
    public interface IBlogRepository
    {
        public Task<Models.Blog.Blog> UpsertAsync(BlogCreate blogCreate, int applicationUserId);

        public Task<PagedResults<Models.Blog.Blog>> GetAllAsync(BlogPaging blogPaging);
        public Task<Models.Blog.Blog> GetAsync(int blogId);
        public Task<List<Models.Blog.Blog>> GetAllByUserIdAsync(int applicationUserId);
        public Task<List<Models.Blog.Blog>> GetAllFamousAsync();
        public Task<int> DeleteAsync(int blogId);
    }
}
