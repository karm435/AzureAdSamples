using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace AzureAd.Web.Infrastructure.Security
{
    public class IsMemberOfGroupHandler : AuthorizationHandler<IsMemberOfGroupRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsMemberOfGroupRequirement requirement)
        {

            var groupClaim = context.User.Claims.FirstOrDefault(claim => claim.Type == "groups" &&
                                                                         claim.Value.Equals(requirement.GroupId,
                                                                             StringComparison.InvariantCulture));
            if (groupClaim != null)
            {
                context.Succeed(requirement);
            }

            return Task.CompletedTask;
        }
    }
}