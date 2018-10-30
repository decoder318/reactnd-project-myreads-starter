export const ALL_SHELVES = [
    {
        name: 'Currently Reading',
        value: 'currentlyReading'
    },
    {
        name: 'Want to Read',
        value: 'wantToRead'
    },
    {
        name: 'Read',
        value: 'read'
    },
    {
        name: 'None',
        value: 'none'
    }
];

export const USER_SHELVES = ALL_SHELVES.filter(nv => nv.value !== 'none');
