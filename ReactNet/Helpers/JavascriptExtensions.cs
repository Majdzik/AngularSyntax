using System.Runtime.Remoting.Contexts;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc.ViewFeatures;

namespace ReactNet.Helpers
{
    public class noJs
    {
        public bool Cooki { get; set; }
        public bool Meta { get; set; }
    }
    public static class JavascriptExtensions
    {
        public static noJs HasJavascript( HttpContext context)
        {
            var noJs =  new noJs();
            
            if (context.Request.QueryString.HasValue && context.Request.QueryString.Value.Contains("nojs")
                || context.Request.Cookies.ContainsKey("nojs"))
            {
                if (!context.Request.Cookies.ContainsKey("nojs"))
                {
                    context.Response.Cookies.Append("nojs", "");
                }
                else
                {
                    noJs.Cooki = true;
                }
                noJs.Meta = true;
            }

            return noJs;
        }                                                
    }
}