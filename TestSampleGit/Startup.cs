using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TestSampleGit.Startup))]
namespace TestSampleGit
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
