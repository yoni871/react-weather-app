export const getDate = () => {
    const time = new Date();
    const year = time.getFullYear();
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const day = String(time.getDate()).padStart(2,'0');
    return `${year}-${month}-${day}`;
};

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const getDateName = ()=> {
    const date = new Date();
    const day = daysOfWeek[date.getDay()];

    return `${day}`;
}
