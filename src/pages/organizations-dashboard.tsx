import PageLoader from "@/components/page-loader";
import { useGetOrgDashboardDetails } from "@/hooks/org-related-apis";
import { useParams } from "react-router-dom";
import NotAuthInsideOrg from "@/components/Error/notauth-inside-org";
import { useAuth0 } from "@auth0/auth0-react";
import UserAvatar from "@/components/user-avatar";
import MemberList from "@/components/member-list";
import InviteUser from "@/components/invite-user";

const OrganizationsDashboard = () => {
  const { org_id } = useParams();

  if (!org_id) {
    return <div>No organization id</div>;
  }

  const { user } = useAuth0();

  if (!user) return <>Failed to fetch user details</>;

  const { orgDetails, loading, error } = useGetOrgDashboardDetails(org_id);

  if (loading) {
    return <PageLoader />;
  }
  if (orgDetails === null || error) {
    return <NotAuthInsideOrg />;
  }

  return (
    <>
      <UserAvatar user={user} />
      <InviteUser user={user} orgId={org_id} />
      <div className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center gap-4">
        <div className="w-full p-5 flex flex-col justify-center items-center gap-4    max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-3">
            <img
              className=" h-24 mb-3 "
              src={orgDetails.org_details.branding.logo_url || ""}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {orgDetails.org_details.name}
            </h5>
            <span className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {orgDetails.org_details.display_name}
            </span>
          </div>

          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <h1 className="text-2xl font-bold text-center py-2">Members</h1>
            {orgDetails.members.map((member: any) => {
              return (
                <MemberList
                  key={member.user_id}
                  member={member}
                  orgId={orgDetails.org_details.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrganizationsDashboard;
