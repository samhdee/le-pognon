import {Category} from "../../interfaces/category";

export const MOCK_CATEGORIES: Category[] = [
    {
        id: 1,
        name: 'Minimum',
        created: '2022-10-09',
        is_list: false
    },
    {
        id: 2,
        name: 'Courses',
        created: '2021-09-08',
        is_list: true
    },
    {
        id: 3,
        name: 'Craft',
        created: '2020-05-17',
        is_list: false
    },
    {
        id: 4,
        name: 'Misc',
        created: '2018-12-21',
        is_list: false
    },
    {
        id: 5,
        name: 'Tricot',
        created: '2022-09-15',
        is_list: false,
        parent: 3
    }
]
