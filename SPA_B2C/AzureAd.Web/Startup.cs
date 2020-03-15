using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.ExceptionServices;
using AzureAd.Web.Infrastructure.Security;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.AzureAD.UI;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace AzureAd.Web
{
    public class Startup
    {
        private readonly IConfiguration _configuration; 
        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            ConfigureAuthentication(services);

            ConfigureAuthorizationPolicies(services);

            ConfigureDependencyInjection(services);
            
            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        private static void ConfigureDependencyInjection(IServiceCollection services)
        {
            //Register DI here
        }

        private void ConfigureAuthentication(IServiceCollection services)
        {
            var tenantId = _configuration["AzureAd:TenantId"];
            var clientId = _configuration["AzureAd:ClientId"];

            var authority = $"https://login.microsoftonline.com/{tenantId}/v2.0";

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.Authority = authority;
                    options.Audience = clientId;
                });
        }

        private void ConfigureAuthorizationPolicies(IServiceCollection services)
        {
            var authConfigs = new List<AuthConfiguration>();
            _configuration.Bind("AdGroups", authConfigs);
            Debug.WriteLine("authConfigs.Count" + authConfigs.Count);
            services.AddAuthorization(options =>
            {
                foreach (var authConfig in authConfigs)
                {
                    options.AddPolicy(authConfig.GroupName,
                        policy => policy.AddRequirements(
                            new IsMemberOfGroupRequirement(authConfig.GroupId, authConfig.GroupName)));
                }
            });
            
            services.AddSingleton<IAuthorizationHandler, IsMemberOfGroupHandler>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseCors();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();
            app.UseAuthentication();
            
            app.UseAuthorization();
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
                }
            });
        }
    }
}
