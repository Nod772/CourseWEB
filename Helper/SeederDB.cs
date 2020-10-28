
using DB;
using DB.Entity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseJWTApplication819.Api_Angular.Helper
{
    public class SeederDatabase
    {
        public static void SeedData(IServiceProvider services,
          IWebHostEnvironment env,
          IConfiguration config)
        {
            using (var scope = services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var manager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
                var managerRole = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                var context = scope.ServiceProvider.GetRequiredService<EFContext>();
                SeedUsers(manager, managerRole,context);
            }
        }
        private static void SeedUsers(UserManager<User> userManager, RoleManager<IdentityRole> roleManager,EFContext context)
        {
           // context.Products.Add(new Product { Title = "Nuts", Price = 50, Description = "...", ImageURL = "https://images-na.ssl-images-amazon.com/images/I/71oR9w5AjbL._SX569_.jpg" });  
           // context.Products.Add(new Product { Title = "Milk", Price = 15, Description = "...", ImageURL = "https://greenfood.in.ua/image/cache/catalog/tovar/napij-vivsjanij-ultrapasterizovanij-vega-milk-640x640.jpg" });
           // context.Products.Add(new Product { Title = "Apple", Price = 10, Description = "...", ImageURL = "https://sites.google.com/site/knowyourfruit/_/rsrc/1284636557816/know-your-apples/Apple 02.jpg?height=362&width=400" });
   
  
            var roleName = "Admin";
            if (roleManager.FindByNameAsync(roleName).Result == null)
            {
                var resultAdminRole = roleManager.CreateAsync(new IdentityRole
                {
                    Name = "Admin"
                }).Result;
                var resultUserRole = roleManager.CreateAsync(new IdentityRole
                {
                    Name = "User"
                }).Result;
              


            string email = "admin@gmail.com";
            var admin = new User
            {
                Email = email,
                UserName = email
            };
            var andrii = new User
            {
                Email = "user@gmail.com",
                UserName = "user@gmail.com"
            };

            var resultAdmin = userManager.CreateAsync(admin, "Qwerty1-").Result;
            resultAdmin = userManager.AddToRoleAsync(admin, "Admin").Result;

            var resultAndrii = userManager.CreateAsync(andrii, "Qwerty1-").Result;
            resultAndrii = userManager.AddToRoleAsync(andrii, "User").Result;

         
            }
        }
    }
}
