using System.Data.Entity;
using System.Collections;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MVC4Re.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public string Hometown { get; set; }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class Match : Entity<long>
    {
        public string Name { get; set; }
        public System.DateTime Date { get; set; }
        public ICollection<Team> Teams { get; set; }
        public ICollection<Bet> Bets { get; set; }

    }

    public class Bet  :Entity<long>
    {
        [Column(TypeName = "Money")]
        public decimal Amount { get; set; }
    }

    public class Team   :Entity<long>
    {
        public string Name { get; set; }
    }

    public abstract class Entity<T>  
    {
        [Column(Order =0)]
        public T Id { get; set; }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}