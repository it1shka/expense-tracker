export function formatAccount(n: number): string {
  const rounded = Math.round(n * 100) / 100;
  const formatted = rounded.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    useGrouping: true
  })
  return '$' + formatted
}