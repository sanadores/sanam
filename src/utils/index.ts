export function formatCurrency(amount: number){
    return new Intl.NumberFormat('en-es',{
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}