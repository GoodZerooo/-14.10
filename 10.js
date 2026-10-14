function getShortFIO(fio) {
    const parts = fio.trim().split(/\s+/);
    if (parts.length < 3) return fio;
    const lastName = parts[0];
    const firstNameInitial = parts[1].charAt(0).toUpperCase();
    const middleNameInitial = parts[2].charAt(0).toUpperCase();
    return `${lastName} ${firstNameInitial}.${middleNameInitial}.`;
}
console.log(getShortFIO("Иванов Иван Иванович")); 