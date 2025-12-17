interface IHasPermission {
    allowedRoles: UserRole[];
    currentRole: UserRole;
}
export const hasPermission = ({ allowedRoles, currentRole }: IHasPermission) => {
    const allowed = allowedRoles.includes(currentRole);
    return allowed;
};
