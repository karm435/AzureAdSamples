using Microsoft.AspNetCore.Authorization;

namespace AzureAd.Web.Infrastructure.Security
{
    public class IsMemberOfGroupRequirement : IAuthorizationRequirement
    {
        public string GroupName { get; set; }

        public string GroupId { get; set; }

        public IsMemberOfGroupRequirement(string groupId, string groupName)
        {
            GroupId = groupId;
            GroupName = groupName;
        }
    }
}