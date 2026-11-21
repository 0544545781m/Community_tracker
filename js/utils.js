/**
 * Formatting and Utility Helpers
 */

/**
 * Format currency amount into Ghana Cedis (GHS)
 */
function formatGHS(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) return 'GH₵ 0.00';
  return 'GH₵ ' + Number(amount).toLocaleString('en-GH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

/**
 * Format date string into readable Ghanaian date
 */
function formatDate(dateStr) {
  if (!dateStr) return 'N/A';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

/**
 * Get status badge classes
 */
function getStatusBadge(status) {
  const found = PROJECT_STATUSES.find(s => s.value === status);
  if (!found) return '<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800">Unknown</span>';
  return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${found.badgeClass}">${found.label}</span>`;
}

/**
 * Generate unique reference number, e.g. "GAR-GEMA-2026-004"
 */
function generateReferenceNumber(regionCode, mmdaCode) {
  const year = new Date().getFullYear();
  const randNum = String(Math.floor(100 + Math.random() * 900));
  return `${regionCode || 'GAR'}-${mmdaCode || 'GEMA'}-${year}-${randNum}`;
}
