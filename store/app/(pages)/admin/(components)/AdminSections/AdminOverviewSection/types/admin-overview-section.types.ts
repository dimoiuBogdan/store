export interface AdminOverviewModel {
    moneyEarned: AdminOverviewKpiModel;
    ordersCount: AdminOverviewKpiModel;
    productsSoldCount: AdminOverviewKpiModel;
    newCustomersCount: AdminOverviewKpiModel;
}

export interface AdminOverviewKpiModel   {
    value: number;
    percentage: number;
}
