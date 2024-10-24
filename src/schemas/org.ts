

interface Users {
    user_id: string;
    name: string;
    email: string;
    picture: string;
}

interface OrgDetails {
    id: string;
    name: string;
    display_name: string;
    branding: {
        logo_url?: string | null;
    }
}

interface OrgDashboardDetails {
    members: Users[];
    org_details: OrgDetails;
}

export type {Users, OrgDashboardDetails};
