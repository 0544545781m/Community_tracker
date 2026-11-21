import { format, parseISO } from 'date-fns';

/**
 * Format currency amount to Ghana Cedis (GHS)
 */
export function formatCurrencyGHS(amount: number): string {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format date string (ISO) into readable Ghanaian official date
 */
export function formatDate(dateString?: string | null): string {
  if (!dateString) return 'N/A';
  try {
    const parsed = typeof dateString === 'string' ? parseISO(dateString) : new Date(dateString);
    return format(parsed, 'dd MMM yyyy');
  } catch {
    return dateString;
  }
}

/**
 * Return badge styling classes based on project status
 */
export function getStatusBadgeClass(status: string): { label: string; className: string } {
  switch (status) {
    case 'ONGOING':
      return { label: 'Ongoing', className: 'bg-blue-100 text-blue-800 border-blue-200' };
    case 'COMPLETED':
      return { label: 'Completed', className: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
    case 'SUSPENDED':
      return { label: 'Suspended', className: 'bg-amber-100 text-amber-800 border-amber-200' };
    case 'DELAYED':
      return { label: 'Delayed', className: 'bg-rose-100 text-rose-800 border-rose-200' };
    case 'NOT_STARTED':
    default:
      return { label: 'Not Started', className: 'bg-slate-100 text-slate-800 border-slate-200' };
  }
}
