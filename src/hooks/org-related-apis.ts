import {useState, useEffect} from 'react';

import api from '../axios';
import {OrgDashboardDetails} from '@/schemas/org';
import {useAuth0} from '@auth0/auth0-react';


// Hook to get organization dashboard details
export const useGetOrgDashboardDetails = (orgId: string) => {
    const [orgDetails, setOrgDetails] = useState<OrgDashboardDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchMembers = async () => {
            setLoading(true);
            try {
                const response = await api.get<OrgDashboardDetails>(`api/v1/orgs/${orgId}/dashboard`);
                setOrgDetails(response.data);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, [orgId]);

    return {orgDetails, loading, error};
};




// Hook to get members of an organization
export const useGetMembers = (orgId: string) => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchMembers = async () => {
            setLoading(true);
            try {
                const response = await api.get(`api/v1/orgs/${orgId}/members`);
                setMembers(response.data);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, [orgId]);

    return {members, loading, error};
};

// Hook to invite a user to an organization
export const useInviteUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {getAccessTokenSilently} = useAuth0();

    const inviteUser = async (orgId: string, inviterName: string, inviteeEmail: string) => {
        setLoading(true);
        try {
            const token = await getAccessTokenSilently();
            const response = await api.post(`api/v1/orgs/${orgId}/invitations`, {inviter_name: inviterName, invitee_email: inviteeEmail}, {headers: {Authorization: `Bearer ${token}`}});
            if (response.status === 201) {
                console.log("User invited successfully");
            }
            else if (response.status === 401 || response.status === 403) {
                setError("Unauthorized");
            }
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {inviteUser, loading, error};
};

// Hook to remove a user from an organization
export const useRemoveUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {getAccessTokenSilently} = useAuth0();
    const removeUser = async (orgId: string, userId: string) => {
        setLoading(true);
        try {
            const token = await getAccessTokenSilently();
            const response = await api.delete(`api/v1/orgs/${orgId}/members/${userId}`, {headers: {Authorization: `Bearer ${token}`}});
            if (response.status === 204) {
                console.log("User removed successfully");
            }
            else if (response.status === 401 || response.status === 403) {
                setError("Unauthorized");
            }
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {removeUser, loading, error};
};

// Hook to add roles to a user
export const useAddRoles = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {getAccessTokenSilently} = useAuth0();

    const addRoles = async (orgId: string, userId: string, roles: string[]) => {
        setLoading(true);
        try {
            const token = await getAccessTokenSilently();
            const response = await api.post(`api/v1/orgs/${orgId}/members/${userId}/roles`, {roles}, {headers: {Authorization: `Bearer ${token}`}});
            if (response.status === 204) {
                console.log("Roles added successfully");
            }
            else if (response.status === 401 || response.status === 403) {
                setError("Unauthorized");
            }
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {addRoles, loading, error};
};

// Hook to remove roles from a user
export const useRemoveRoles = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {getAccessTokenSilently} = useAuth0();

    const removeRoles = async (orgId: string, userId: string, roles: string[]) => {
        setLoading(true);
        try {
            const token = await getAccessTokenSilently();
            const response = await api.delete(`api/v1/orgs/${orgId}/members/${userId}/roles`, {data: {roles}, headers: {Authorization: `Bearer ${token}`}});
            if (response.status === 204) {
                console.log("Roles removed successfully");
            }
            else if (response.status === 401 || response.status === 403) {
                setError("Unauthorized");
            }
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {removeRoles, loading, error};
};

// Hook to get roles of a user
export const useGetRoles = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getRoles = async (orgId: string, userId: string) => {
        setLoading(true);
        try {
            const response = await api.get(`api/v1/orgs/${orgId}/members/${userId}/roles`);
            return response.data;
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {getRoles, loading, error};
};
