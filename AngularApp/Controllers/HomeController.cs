using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AngularApp.Controllers
{
    public class Route
    {
        public string Controller;
        public string Action;
        public string Attributes;
        public string ReturnType;
        public dynamic Attr;
    }

    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
            return View();
        }

        [Route("om", Order = 0),
        Route("about")]
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Bootstrap()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Foundation()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Route()
        {
            ViewBag.Message = "Your contact page.";
            Assembly asm = Assembly.GetAssembly(typeof(MvcApplication));

            var controlleractionlist = asm.GetTypes()
                    .Where(type => typeof(System.Web.Mvc.Controller).IsAssignableFrom(type))
                    .SelectMany(type => type.GetMethods(BindingFlags.Instance | BindingFlags.DeclaredOnly | BindingFlags.Public))
                    .Where(m => !m.GetCustomAttributes(typeof(System.Runtime.CompilerServices.CompilerGeneratedAttribute), true).Any())
                    .Select(x =>  new Route
                    {
                         Attr =   x.CustomAttributes,
                        Controller = x.DeclaringType.Name.Replace("Controller",""),
                        Action = x.Name,
                        ReturnType = x.ReturnType.Name,
                        Attributes = String.Join(",", x.GetCustomAttributes().Select(a => a.GetType().Name.Replace("Attribute", "")))
                    })
                    .OrderBy(x => x.Controller).OrderByDescending(x=>x.Controller =="Home").ThenBy(x => x.Action).ToList();
           
            return View(controlleractionlist);
        }
    }
}