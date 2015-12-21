using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using React;

namespace ReactNet
{
    public static class ReactConfig
    {
        public static void Configure()
        {
            ReactSiteConfiguration.Configuration = new ReactSiteConfiguration()
                .AddScript("~/Scripts/HelloWorld.jsx");
        }
    }
}
