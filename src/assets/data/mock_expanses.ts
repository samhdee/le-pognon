import {Expanse} from "../../interfaces/expanse";

export const MOCK_EXPANSES: Expanse[] = [
    {
        id: 1,
        label: 'Équerres',
        amount: 19.8,
        is_list: false,
        category_id: 4,
        has_installments: false
    },
    {
        id: 2,
        label: 'Kit calligraphie',
        amount: 30,
        is_list: false,
        category_id: 3,
        has_installments: false
    },
    {
        id: 2,
        label: 'Plume calligraphie',
        amount: 10.95,
        is_list: false,
        category_id: 3,
        has_installments: true,
        nb_installments: 3,
        installment_end: '2023-23-01'
    }
]
