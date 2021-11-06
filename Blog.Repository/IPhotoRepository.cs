﻿using Blog.Models.Photo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Repository
{
    public interface IPhotoRepository
    {
        Task<Photo> InsertAsync(PhotoCreate photoCreate, int applicationUserId);
        Task<Photo> GetAsync(int photoId);
        Task<List<Photo>> GetAllByUserIdAsync(int applicationUserId);
        Task<int> DeleteAsync(int photoId);

    }
}
