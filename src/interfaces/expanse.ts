export interface Expanse {
    id: number;
    label: string;
    amount: number;
    shop_name?: string;
    is_list: boolean;
    category_id: number;
    has_installments: boolean;
    nb_installments?: number;
    installment_end?: string;
}
