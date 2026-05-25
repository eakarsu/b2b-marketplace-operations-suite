# B2B Marketplace Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIB2BMarketplaceOperationsAssistant`
- `AIB2BMarketplaceOperationsOperations`
- `AIB2BMarketplaceOperationsAnalytics`
- `AIB2BMarketplaceOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/b2b-marketplace-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5390`

Seeded users:
- `admin@b2b-marketplace-operations.local / admin123`
- `manager@b2b-marketplace-operations.local / manager123`
- `analyst@b2b-marketplace-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/b2b-marketplace-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5390 npm run smoke
```
