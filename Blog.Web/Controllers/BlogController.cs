﻿using Blog.Models.Blog;
using Blog.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IBlogRepository _blogRepository;
        private readonly IPhotoRepository _photoRepository;

        public BlogController(IBlogRepository blogRepository, IPhotoRepository photoRepository)
        {
            _blogRepository = blogRepository;
            _photoRepository = photoRepository;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Models.Blog.Blog>> Create(BlogCreate blogCreate)
        {
            int applicationUserId = int.Parse(User.Claims.First(i => i.Type == JwtRegisteredClaimNames.NameId).Value);

            if (blogCreate.PhotoId.HasValue)
            {
                var photo = await _photoRepository.GetAsync(blogCreate.PhotoId.Value);

                if (photo.ApplicationUserId != applicationUserId)
                    return BadRequest("You did not upload the photo");
            }

            var blog = await _blogRepository.UpsertAsync(blogCreate, applicationUserId);

            return Ok(blog);
        }

        [HttpGet]
        public async Task<ActionResult<PagedResults<Blog.Models.Blog.Blog>>> GetAll([FromQuery] BlogPaging blogPaging)
        {
            var blogs = await _blogRepository.GetAllAsync(blogPaging);

            return Ok(blogs);
        }

        [HttpGet("{blogId}")]
        public async Task<ActionResult<Blog.Models.Blog.Blog>> Get(int blogId)
        {
            var blog = await _blogRepository.GetAsync(blogId);

            return Ok(blog);
        }

        [HttpGet("user/{applicationUserId}")]
        public async Task<ActionResult<List<Blog.Models.Blog.Blog>>> GetByApplicationUserId(int applicationUserId)
        {
            var blogs = await _blogRepository.GetAllByUserIdAsync(applicationUserId);

            return Ok(blogs);
        }

        [HttpGet("famous")]
        public async Task<ActionResult<List<Blog.Models.Blog.Blog>>> GetFamous()
        {
            var blogs = await _blogRepository.GetAllFamousAsync();

            return Ok(blogs);
        }

        [HttpDelete("{blogId}")]
        public async Task<ActionResult<int>> Delete(int blogId)
        {
            int applicationUserId = int.Parse(User.Claims.First(i => i.Type == JwtRegisteredClaimNames.NameId).Value);
            var foundBlog = await _blogRepository.GetAsync(blogId);

            if (foundBlog == null) return BadRequest("Blog does not exists");
            if (foundBlog.ApplicationUserId != applicationUserId)
                return BadRequest("You didn't create this blog");

            var affectedRows = await _blogRepository.DeleteAsync(blogId);

            return Ok(affectedRows);
        }
    }
}
