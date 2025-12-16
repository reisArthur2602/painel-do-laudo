export const formatDateAndAge = (dateInput: string | Date) => {
    const date = new Date(dateInput);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    const today = new Date();
    let age = today.getFullYear() - year;

    const hasBirthdayPassed =
        today.getMonth() > date.getMonth() ||
        (today.getMonth() === date.getMonth() && today.getDate() >= date.getDate());

    if (!hasBirthdayPassed) {
        age--;
    }

    if (age < 0) {
        age = 0;
    }

    return `${formattedDate} - ${age} ${age === 1 ? 'ano' : 'anos'}`;
};
