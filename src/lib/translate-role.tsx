export const translateRole = (role: User['role']) => {
    const map: Record<User['role'], string> = {
        Admin: 'Administrador',
        Member: 'Membro',
    };

    return map[role];
};
