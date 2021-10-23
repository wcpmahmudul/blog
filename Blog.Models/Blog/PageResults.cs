using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Models.Blog
{
   public class PageResults<T>
    {
        public IEnumerable<T> Items { get; set; }
        public int TotalCOunt { get; set; }
    }
}
