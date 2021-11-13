using Blog.Identity;
using Blog.Models.Account;
using Blog.Models.Settings;
using Blog.Repository;
using Blog.Services;
using Blog.Web.Extensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Web
{
    public class Startup
    {
        public IConfiguration _config { get; }
        public Startup(IConfiguration config)
        {
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
            _config = config;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CloudinaryOptions>(_config.GetSection("CloudinaryOptions"));

            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IPhotoService, PhotoService>();

            services.AddScoped<IBlogRepository, BlogRepository>();
            services.AddScoped<IBlogCommentRepository, BlogCommentRepository>();
            services.AddScoped<IAccountRepository, AccountRepository>();
            services.AddScoped<IPhotoRepository, PhotoRepository>();

            services.AddIdentityCore<ApplicationUserIdentity>(options =>
            {
                options.Password.RequireNonAlphanumeric = false;
            })
                .AddUserStore<UserStore>()
                .AddDefaultTokenProviders()
                .AddSignInManager<SignInManager<ApplicationUserIdentity>>();

            services.AddControllers();
            services.AddCors();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                .AddJwtBearer
                (
                options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = _config["Jwt:Issuer"],
                        ValidAudience = _config["Jwt:Issuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"])),
                        ClockSkew = TimeSpan.Zero
                    };
                }
                );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.ConfigureExceptionHandler();

            app.UseRouting();

            if(env.IsDevelopment())
            {
                app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
            }
            else
            {
                app.UseCors();
            }

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
