export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-audit-logs",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "AuditLogs",
    "displayName": "\"Audit Logs\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id           SERIAL PRIMARY KEY"
      },
      {
        "name": "userId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\"     INTEGER REFERENCES \"Users\"(id) ON DELETE SET NULL"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action       VARCHAR(255)  NOT NULL"
      },
      {
        "name": "entityType",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"entityType\" VARCHAR(100)"
      },
      {
        "name": "entityId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"entityId\"   INTEGER"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details      TEXT"
      },
      {
        "name": "ipAddress",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"ipAddress\"  VARCHAR(45)"
      },
      {
        "name": "timestamp",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "timestamp    TIMESTAMP     NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-carbon-credits",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "CarbonCredits",
    "displayName": "\"Carbon Credits\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                   SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name                 VARCHAR(255)  NOT NULL"
      },
      {
        "name": "projectType",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"projectType\"        VARCHAR(255)  NOT NULL"
      },
      {
        "name": "vintage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vintage              INTEGER"
      },
      {
        "name": "quantity",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity             NUMERIC(14,4) NOT NULL"
      },
      {
        "name": "pricePerTon",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"pricePerTon\"        NUMERIC(10,2) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status               VARCHAR(50)   NOT NULL DEFAULT 'available'"
      },
      {
        "name": "registry",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "registry             VARCHAR(255)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country              VARCHAR(100)"
      },
      {
        "name": "methodology",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "methodology          VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description          TEXT"
      },
      {
        "name": "co2OffsetTons",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"co2OffsetTons\"      NUMERIC(14,4)"
      },
      {
        "name": "verificationStatus",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "\"verificationStatus\" VARCHAR(50)   NOT NULL DEFAULT 'pending'"
      },
      {
        "name": "sellerId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"sellerId\"           INTEGER REFERENCES \"Users\"(id) ON DELETE SET NULL"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-compliance-reports",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "ComplianceReports",
    "displayName": "\"Compliance Reports\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                   SERIAL PRIMARY KEY"
      },
      {
        "name": "userId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\"             INTEGER REFERENCES \"Users\"(id) ON DELETE SET NULL"
      },
      {
        "name": "reportType",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"reportType\"         VARCHAR(255)  NOT NULL"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period               VARCHAR(100)"
      },
      {
        "name": "totalEmissions",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalEmissions\"     NUMERIC(14,4)"
      },
      {
        "name": "totalOffsets",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalOffsets\"       NUMERIC(14,4)"
      },
      {
        "name": "netEmissions",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"netEmissions\"       NUMERIC(14,4)"
      },
      {
        "name": "complianceStatus",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending_review'",
        "sourceLine": "\"complianceStatus\"   VARCHAR(50)   NOT NULL DEFAULT 'pending_review'"
      },
      {
        "name": "aiRecommendations",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiRecommendations\"  TEXT"
      },
      {
        "name": "regulatoryFramework",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"regulatoryFramework\" VARCHAR(255)"
      },
      {
        "name": "dueDate",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"dueDate\"            DATE"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-emissions",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "Emissions",
    "displayName": "\"Emissions\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id          SERIAL PRIMARY KEY"
      },
      {
        "name": "userId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\"    INTEGER REFERENCES \"Users\"(id) ON DELETE SET NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category    VARCHAR(255)  NOT NULL"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source      VARCHAR(255)"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount      NUMERIC(14,4) NOT NULL"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'tCO2e'",
        "sourceLine": "unit        VARCHAR(50)   NOT NULL DEFAULT 'tCO2e'"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date        DATE"
      },
      {
        "name": "scope",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scope1'",
        "sourceLine": "scope       VARCHAR(50)   NOT NULL DEFAULT 'scope1'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-routes-gap-ainew-js-scaffold-but-0-mounted-chat-style-ai-endp-js-gap-features",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_ainew_js_scaffold_but_0_mounted_chat_style_ai_endp.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-routes-gap-no-ai-price-prediction-for-credit-classes-js-gap-features",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_ai_price_prediction_for_credit_classes.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-routes-gap-no-ai-verification-of-project-additionality-perman-js-gap-features",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_ai_verification_of_project_additionality_perman.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-routes-gap-no-direct-verra-gold-standard-acr-api-clients-only-js-gap-features",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_direct_verra_gold_standard_acr_api_clients_only.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-routes-gap-no-kyc-aml-buyer-onboarding-flow-js-gap-features",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_kyc_aml_buyer_onboarding_flow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-routes-gap-no-notification-system-delivery-channel-js-gap-features",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_notification_system_delivery_channel.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-routes-gap-no-on-chain-credit-tokenization-layer-js-gap-features",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_on_chain_credit_tokenization_layer.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-routes-gap-no-satellite-imagery-validation-of-land-based-cred-js-gap-features",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_satellite_imagery_validation_of_land_based_cred.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-routes-gap-only-6-frontend-pages-vs-18-backend-routes-ui-gap-js-gap-features",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_only_6_frontend_pages_vs_18_backend_routes_ui_gap.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-market-data",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "MarketData",
    "displayName": "\"Market Data\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "creditType",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"creditType\"    VARCHAR(255)  NOT NULL"
      },
      {
        "name": "price",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price           NUMERIC(10,2) NOT NULL"
      },
      {
        "name": "volume",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "volume          NUMERIC(14,4)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DATE"
      },
      {
        "name": "exchange",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "exchange        VARCHAR(100)"
      },
      {
        "name": "change",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "change          NUMERIC(10,4)"
      },
      {
        "name": "changePercent",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"changePercent\" NUMERIC(8,4)"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-routes-integrations-js-notification-log",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "notification_log",
    "displayName": "Notification Log",
    "framework": "SQL",
    "sourceFile": "server/routes/integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "channel",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "channel VARCHAR(32) NOT NULL"
      },
      {
        "name": "recipient",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient TEXT NOT NULL"
      },
      {
        "name": "subject",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject TEXT"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'queued'",
        "sourceLine": "status VARCHAR(32) DEFAULT 'queued'"
      },
      {
        "name": "provider_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-offset-recommendations",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "OffsetRecommendations",
    "displayName": "\"Offset Recommendations\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "userId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\"            INTEGER REFERENCES \"Users\"(id) ON DELETE SET NULL"
      },
      {
        "name": "emissionAmount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"emissionAmount\"    NUMERIC(14,4)"
      },
      {
        "name": "recommendedCredits",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"recommendedCredits\" TEXT"
      },
      {
        "name": "aiAnalysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiAnalysis\"        TEXT"
      },
      {
        "name": "estimatedCost",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"estimatedCost\"     NUMERIC(12,2)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority            VARCHAR(50)   NOT NULL DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status              VARCHAR(50)   NOT NULL DEFAULT 'pending'"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-projects",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "Projects",
    "displayName": "\"Projects\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                   SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name                 VARCHAR(255)  NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type                 VARCHAR(255)  NOT NULL"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location             VARCHAR(255)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country              VARCHAR(100)"
      },
      {
        "name": "startDate",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"startDate\"          DATE"
      },
      {
        "name": "endDate",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"endDate\"            DATE"
      },
      {
        "name": "estimatedReduction",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"estimatedReduction\" NUMERIC(14,4)"
      },
      {
        "name": "actualReduction",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"actualReduction\"    NUMERIC(14,4)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'proposed'",
        "sourceLine": "status               VARCHAR(50)   NOT NULL DEFAULT 'proposed'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description          TEXT"
      },
      {
        "name": "ownerId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"ownerId\"            INTEGER REFERENCES \"Users\"(id) ON DELETE SET NULL"
      },
      {
        "name": "methodology",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "methodology          VARCHAR(255)"
      },
      {
        "name": "sdgGoals",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"sdgGoals\"           VARCHAR(500)"
      },
      {
        "name": "imageUrl",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"imageUrl\"           VARCHAR(500)"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-retirements",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "Retirements",
    "displayName": "\"Retirements\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id               SERIAL PRIMARY KEY"
      },
      {
        "name": "creditId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"creditId\"       INTEGER REFERENCES \"CarbonCredits\"(id) ON DELETE SET NULL"
      },
      {
        "name": "userId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\"         INTEGER REFERENCES \"Users\"(id) ON DELETE SET NULL"
      },
      {
        "name": "quantity",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity         NUMERIC(14,4) NOT NULL"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason           TEXT"
      },
      {
        "name": "beneficiary",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beneficiary      VARCHAR(255)"
      },
      {
        "name": "retirementDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"retirementDate\" TIMESTAMP"
      },
      {
        "name": "certificateUrl",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"certificateUrl\" VARCHAR(500)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status           VARCHAR(50)   NOT NULL DEFAULT 'pending'"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-schema-migrations",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "schema_migrations",
    "displayName": "Schema Migrations",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version    VARCHAR(50) PRIMARY KEY"
      },
      {
        "name": "applied_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "applied_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-sustainability-reports",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "SustainabilityReports",
    "displayName": "\"Sustainability Reports\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                SERIAL PRIMARY KEY"
      },
      {
        "name": "userId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\"          INTEGER REFERENCES \"Users\"(id) ON DELETE SET NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title             VARCHAR(255)  NOT NULL"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period            VARCHAR(100)"
      },
      {
        "name": "totalEmissions",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalEmissions\"  NUMERIC(14,4)"
      },
      {
        "name": "reductionTarget",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"reductionTarget\" NUMERIC(14,4)"
      },
      {
        "name": "actualReduction",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"actualReduction\" NUMERIC(14,4)"
      },
      {
        "name": "aiInsights",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiInsights\"      TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status            VARCHAR(50)   NOT NULL DEFAULT 'draft'"
      },
      {
        "name": "frameworks",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frameworks        VARCHAR(500)"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-transactions",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "Transactions",
    "displayName": "\"Transactions\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "creditId",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"creditId\"          INTEGER       NOT NULL REFERENCES \"CarbonCredits\"(id) ON DELETE RESTRICT"
      },
      {
        "name": "buyerId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"buyerId\"           INTEGER REFERENCES \"Users\"(id) ON DELETE SET NULL"
      },
      {
        "name": "sellerId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"sellerId\"          INTEGER REFERENCES \"Users\"(id) ON DELETE SET NULL"
      },
      {
        "name": "quantity",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity            NUMERIC(14,4) NOT NULL"
      },
      {
        "name": "totalPrice",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"totalPrice\"        NUMERIC(14,2) NOT NULL"
      },
      {
        "name": "transactionType",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"transactionType\"   VARCHAR(50)   NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status              VARCHAR(50)   NOT NULL DEFAULT 'pending'"
      },
      {
        "name": "transactionHash",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"transactionHash\"   VARCHAR(255)"
      },
      {
        "name": "fee",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "fee                 NUMERIC(10,2) NOT NULL DEFAULT 0"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-users",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "Users",
    "displayName": "\"Users\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id         SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name       VARCHAR(255)  NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email      VARCHAR(255)  NOT NULL UNIQUE"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password   VARCHAR(255)  NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'trader'",
        "sourceLine": "role       VARCHAR(50)   NOT NULL DEFAULT 'trader'"
      },
      {
        "name": "company",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company    VARCHAR(255)"
      },
      {
        "name": "avatar",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar     VARCHAR(500)"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-migrations-001-initial-schema-sql-verifications",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "Verifications",
    "displayName": "\"Verifications\"",
    "framework": "SQL",
    "sourceFile": "server/migrations/001_initial_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id           SERIAL PRIMARY KEY"
      },
      {
        "name": "creditId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"creditId\"   INTEGER REFERENCES \"CarbonCredits\"(id) ON DELETE SET NULL"
      },
      {
        "name": "projectId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"projectId\"  INTEGER REFERENCES \"Projects\"(id) ON DELETE SET NULL"
      },
      {
        "name": "verifierId",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"verifierId\" INTEGER REFERENCES \"Users\"(id) ON DELETE SET NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status       VARCHAR(50)   NOT NULL DEFAULT 'pending'"
      },
      {
        "name": "methodology",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "methodology  VARCHAR(255)"
      },
      {
        "name": "findings",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "findings     TEXT"
      },
      {
        "name": "aiScore",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiScore\"    NUMERIC(5,2)"
      },
      {
        "name": "aiAnalysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiAnalysis\" TEXT"
      },
      {
        "name": "riskLevel",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "\"riskLevel\"  VARCHAR(50)   NOT NULL DEFAULT 'medium'"
      },
      {
        "name": "documentUrl",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"documentUrl\" VARCHAR(500)"
      }
    ]
  },
  {
    "id": "ai-carbon-credit-marketplace-verifier-server-routes-webhooks-js-webhooks",
    "sourceProject": "AICarbonCreditMarketplaceVerifier",
    "name": "webhooks",
    "displayName": "Webhooks",
    "framework": "SQL",
    "sourceFile": "server/routes/webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "url",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url TEXT NOT NULL"
      },
      {
        "name": "events",
        "type": "TEXT[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ARRAY['credit.verified']::text[]",
        "sourceLine": "events TEXT[] NOT NULL DEFAULT ARRAY['credit.verified']::text[]"
      },
      {
        "name": "secret",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secret VARCHAR(255)"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-circular-economy-upcycling-marketplace-backend-routes-ai-js-ai-results",
    "sourceProject": "AICircularEconomyUpcyclingMarketplace",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/routes/ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(100) NOT NULL"
      },
      {
        "name": "request_params",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "request_params JSONB"
      },
      {
        "name": "result_text",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_text TEXT NOT NULL"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-circular-economy-upcycling-marketplace-backend-routes-gap-frontend-has-13-themed-pages-buyermatch-materialva-js-gap-features",
    "sourceProject": "AICircularEconomyUpcyclingMarketplace",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_frontend_has_13_themed_pages_buyermatch_materialva.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-circular-economy-upcycling-marketplace-backend-routes-gap-no-ai-model-wiring-confirmed-beyond-the-single-ai-js-gap-features",
    "sourceProject": "AICircularEconomyUpcyclingMarketplace",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_ai_model_wiring_confirmed_beyond_the_single_ai_.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-circular-economy-upcycling-marketplace-backend-routes-gap-no-backend-persistence-for-any-feature-page-beyond-js-gap-features",
    "sourceProject": "AICircularEconomyUpcyclingMarketplace",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_backend_persistence_for_any_feature_page_beyond.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-circular-economy-upcycling-marketplace-backend-routes-gap-no-environmental-impact-reporting-persistence-js-gap-features",
    "sourceProject": "AICircularEconomyUpcyclingMarketplace",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_environmental_impact_reporting_persistence.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-circular-economy-upcycling-marketplace-backend-routes-gap-no-marketplace-listings-or-seller-buyer-crud-backe-js-gap-features",
    "sourceProject": "AICircularEconomyUpcyclingMarketplace",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_marketplace_listings_or_seller_buyer_crud_backe.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-circular-economy-upcycling-marketplace-backend-routes-gap-no-notification-system-or-webhooks-js-gap-features",
    "sourceProject": "AICircularEconomyUpcyclingMarketplace",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_notification_system_or_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-circular-economy-upcycling-marketplace-backend-routes-gap-no-payment-processing-and-escrow-js-gap-features",
    "sourceProject": "AICircularEconomyUpcyclingMarketplace",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_payment_processing_and_escrow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-circular-economy-upcycling-marketplace-backend-routes-gap-no-review-and-trust-score-system-js-gap-features",
    "sourceProject": "AICircularEconomyUpcyclingMarketplace",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_review_and_trust_score_system.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-circular-economy-upcycling-marketplace-backend-routes-gap-no-shipping-logistics-integration-js-gap-features",
    "sourceProject": "AICircularEconomyUpcyclingMarketplace",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_shipping_logistics_integration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-circular-economy-upcycling-marketplace-backend-routes-auth-js-users",
    "sourceProject": "AICircularEconomyUpcyclingMarketplace",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/routes/auth.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-e-commerce-agent-backend-src-routes-ai-pass5-js-affiliate-referrals",
    "sourceProject": "AiECommerceAgent",
    "name": "affiliate_referrals",
    "displayName": "Affiliate Referrals",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiPass5.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "affiliate_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "affiliate_code VARCHAR(120) NOT NULL"
      },
      {
        "name": "referrer_user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrer_user_id INTEGER"
      },
      {
        "name": "referred_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referred_email VARCHAR(255)"
      },
      {
        "name": "order_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id INTEGER"
      },
      {
        "name": "amount_cents",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount_cents INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(40) NOT NULL DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-e-commerce-agent-backend-routes-batch03-gaps-js-gap-features",
    "sourceProject": "AiECommerceAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/batch03Gaps.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-activity-log",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "activity_log",
    "displayName": "Activity Log",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(255)"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-activity-log",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "activity_log",
    "displayName": "Activity Log",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id)"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(50) NOT NULL"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-ai-results",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(100)"
      },
      {
        "name": "input_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-approval-workflows",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "approval_workflows",
    "displayName": "Approval Workflows",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "request_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "request_title VARCHAR(500)"
      },
      {
        "name": "request_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "request_type VARCHAR(100)"
      },
      {
        "name": "requestor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requestor VARCHAR(255)"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(255)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(15,2)"
      },
      {
        "name": "justification",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "justification TEXT"
      },
      {
        "name": "current_approver",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_approver VARCHAR(255)"
      },
      {
        "name": "approval_chain",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approval_chain TEXT"
      },
      {
        "name": "current_step",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "current_step INTEGER DEFAULT 1"
      },
      {
        "name": "total_steps",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "total_steps INTEGER DEFAULT 5"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "comments",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comments TEXT"
      },
      {
        "name": "attachments",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attachments TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-approval-workflows",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "approval_workflows",
    "displayName": "Approval Workflows",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "request_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "request_title VARCHAR(500)"
      },
      {
        "name": "request_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "request_type VARCHAR(100)"
      },
      {
        "name": "requestor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requestor VARCHAR(255)"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(255)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(15,2)"
      },
      {
        "name": "justification",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "justification TEXT"
      },
      {
        "name": "current_approver",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_approver VARCHAR(255)"
      },
      {
        "name": "approval_chain",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approval_chain TEXT"
      },
      {
        "name": "current_step",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "current_step INTEGER DEFAULT 1"
      },
      {
        "name": "total_steps",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "3",
        "sourceLine": "total_steps INTEGER DEFAULT 3"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "comments",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comments TEXT"
      },
      {
        "name": "attachments",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attachments TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-auctions",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "auctions",
    "displayName": "Auctions",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "auction_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "auction_title VARCHAR(500)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "auction_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "auction_type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "starting_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "starting_price DECIMAL(15,2)"
      },
      {
        "name": "reserve_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reserve_price DECIMAL(15,2)"
      },
      {
        "name": "current_best_bid",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_best_bid DECIMAL(15,2)"
      },
      {
        "name": "number_of_bidders",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "number_of_bidders INTEGER"
      },
      {
        "name": "start_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time TIMESTAMP"
      },
      {
        "name": "end_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIMESTAMP"
      },
      {
        "name": "bid_decrement",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bid_decrement DECIMAL(15,2)"
      },
      {
        "name": "auto_extend",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "auto_extend BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "winning_vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "winning_vendor VARCHAR(255)"
      },
      {
        "name": "items_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items_description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-auctions",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "auctions",
    "displayName": "Auctions",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "auction_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "auction_title VARCHAR(500)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "auction_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "auction_type VARCHAR(50)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "starting_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "starting_price DECIMAL(15,2)"
      },
      {
        "name": "reserve_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reserve_price DECIMAL(15,2)"
      },
      {
        "name": "current_best_bid",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_best_bid DECIMAL(15,2)"
      },
      {
        "name": "number_of_bidders",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "number_of_bidders INTEGER"
      },
      {
        "name": "start_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time TIMESTAMP"
      },
      {
        "name": "end_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIMESTAMP"
      },
      {
        "name": "bid_decrement",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bid_decrement DECIMAL(15,2)"
      },
      {
        "name": "auto_extend",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "auto_extend BOOLEAN DEFAULT true"
      },
      {
        "name": "winning_vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "winning_vendor VARCHAR(255)"
      },
      {
        "name": "items_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items_description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-bids",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "bids",
    "displayName": "Bids",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "rfp_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rfp_id INTEGER REFERENCES rfp_requests(id)"
      },
      {
        "name": "rfp_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rfp_title VARCHAR(500)"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "bid_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bid_amount DECIMAL(15,2)"
      },
      {
        "name": "delivery_timeline",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivery_timeline VARCHAR(255)"
      },
      {
        "name": "technical_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technical_score DECIMAL(5,2)"
      },
      {
        "name": "commercial_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commercial_score DECIMAL(5,2)"
      },
      {
        "name": "compliance_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_score DECIMAL(5,2)"
      },
      {
        "name": "vendor_experience",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_experience TEXT"
      },
      {
        "name": "warranty_terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warranty_terms TEXT"
      },
      {
        "name": "payment_terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_terms TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'submitted'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'submitted'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-bids",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "bids",
    "displayName": "Bids",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "rfp_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rfp_title VARCHAR(500)"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "bid_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bid_amount DECIMAL(15,2)"
      },
      {
        "name": "delivery_timeline",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivery_timeline VARCHAR(255)"
      },
      {
        "name": "technical_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technical_score DECIMAL(5,2)"
      },
      {
        "name": "commercial_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commercial_score DECIMAL(5,2)"
      },
      {
        "name": "compliance_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_score DECIMAL(5,2)"
      },
      {
        "name": "vendor_experience",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_experience TEXT"
      },
      {
        "name": "warranty_terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warranty_terms TEXT"
      },
      {
        "name": "payment_terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_terms TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'submitted'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'submitted'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-category-strategies",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "category_strategies",
    "displayName": "Category Strategies",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "category_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "annual_spend",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annual_spend DECIMAL(15,2)"
      },
      {
        "name": "number_of_suppliers",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "number_of_suppliers INTEGER"
      },
      {
        "name": "strategic_importance",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "strategic_importance VARCHAR(50)"
      },
      {
        "name": "supply_risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supply_risk VARCHAR(50)"
      },
      {
        "name": "sourcing_strategy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sourcing_strategy TEXT"
      },
      {
        "name": "market_dynamics",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "market_dynamics TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-category-strategies",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "category_strategies",
    "displayName": "Category Strategies",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "category_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_name VARCHAR(255)"
      },
      {
        "name": "category_owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_owner VARCHAR(255)"
      },
      {
        "name": "annual_spend",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annual_spend DECIMAL(15,2)"
      },
      {
        "name": "number_of_suppliers",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "number_of_suppliers INTEGER"
      },
      {
        "name": "strategic_importance",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "strategic_importance VARCHAR(50)"
      },
      {
        "name": "supply_risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supply_risk VARCHAR(50)"
      },
      {
        "name": "sourcing_strategy",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sourcing_strategy VARCHAR(100)"
      },
      {
        "name": "current_state",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_state TEXT"
      },
      {
        "name": "target_state",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_state TEXT"
      },
      {
        "name": "key_initiatives",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "key_initiatives TEXT"
      },
      {
        "name": "savings_target_pct",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savings_target_pct DECIMAL(5,2)"
      },
      {
        "name": "timeline",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeline VARCHAR(255)"
      },
      {
        "name": "stakeholders",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stakeholders TEXT"
      },
      {
        "name": "market_dynamics",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "market_dynamics TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-compliance-records",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "compliance_records",
    "displayName": "Compliance Records",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "requirement_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requirement_name VARCHAR(500)"
      },
      {
        "name": "regulation_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulation_type VARCHAR(255)"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "compliance_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_status VARCHAR(50)"
      },
      {
        "name": "audit_findings",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "audit_findings TEXT"
      },
      {
        "name": "corrective_actions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_actions TEXT"
      },
      {
        "name": "next_audit_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_audit_date DATE"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-compliance-records",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "compliance_records",
    "displayName": "Compliance Records",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "requirement_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requirement_name VARCHAR(500)"
      },
      {
        "name": "regulation_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulation_type VARCHAR(100)"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "compliance_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'under_review'",
        "sourceLine": "compliance_status VARCHAR(50) DEFAULT 'under_review'"
      },
      {
        "name": "last_audit_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_audit_date DATE"
      },
      {
        "name": "next_audit_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_audit_date DATE"
      },
      {
        "name": "audit_findings",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "audit_findings TEXT"
      },
      {
        "name": "corrective_actions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_actions TEXT"
      },
      {
        "name": "documentation_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "documentation_status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "risk_rating",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "risk_rating VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "responsible_party",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "responsible_party VARCHAR(255)"
      },
      {
        "name": "evidence_links",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evidence_links TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-contracts",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "contracts",
    "displayName": "Contracts",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "contract_title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_title VARCHAR(500) NOT NULL"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "contract_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_type VARCHAR(100)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "total_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_value DECIMAL(15,2)"
      },
      {
        "name": "payment_schedule",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_schedule TEXT"
      },
      {
        "name": "terms_conditions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terms_conditions TEXT"
      },
      {
        "name": "sla_terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sla_terms TEXT"
      },
      {
        "name": "termination_clause",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "termination_clause TEXT"
      },
      {
        "name": "renewal_terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "renewal_terms TEXT"
      },
      {
        "name": "governing_law",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "governing_law VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-contracts",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "contracts",
    "displayName": "Contracts",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "contract_title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_title VARCHAR(500) NOT NULL"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "contract_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_type VARCHAR(255)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "total_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_value DECIMAL(15,2)"
      },
      {
        "name": "payment_schedule",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_schedule TEXT"
      },
      {
        "name": "terms_conditions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terms_conditions TEXT"
      },
      {
        "name": "sla_terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sla_terms TEXT"
      },
      {
        "name": "termination_clause",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "termination_clause TEXT"
      },
      {
        "name": "renewal_terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "renewal_terms TEXT"
      },
      {
        "name": "governing_law",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "governing_law VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-cost-models",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "cost_models",
    "displayName": "Cost Models",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "product_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_name VARCHAR(500) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "material_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material_cost DECIMAL(15,2)"
      },
      {
        "name": "labor_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "labor_cost DECIMAL(15,2)"
      },
      {
        "name": "overhead_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overhead_cost DECIMAL(15,2)"
      },
      {
        "name": "logistics_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logistics_cost DECIMAL(15,2)"
      },
      {
        "name": "margin_percentage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "margin_percentage DECIMAL(5,2)"
      },
      {
        "name": "market_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "market_price DECIMAL(15,2)"
      },
      {
        "name": "target_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_price DECIMAL(15,2)"
      },
      {
        "name": "volume",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "volume INTEGER"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-cost-models",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "cost_models",
    "displayName": "Cost Models",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "product_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_name VARCHAR(500) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "material_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material_cost DECIMAL(15,2)"
      },
      {
        "name": "labor_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "labor_cost DECIMAL(15,2)"
      },
      {
        "name": "overhead_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overhead_cost DECIMAL(15,2)"
      },
      {
        "name": "logistics_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logistics_cost DECIMAL(15,2)"
      },
      {
        "name": "margin_percentage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "margin_percentage DECIMAL(5,2)"
      },
      {
        "name": "market_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "market_price DECIMAL(15,2)"
      },
      {
        "name": "target_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_price DECIMAL(15,2)"
      },
      {
        "name": "volume",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "volume INTEGER"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-routes-gap-limited-integrations-only-an-export-module-no-erp-js-gap-features",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapLimitedIntegrationsOnlyAnExportModuleNoErp.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-routes-gap-no-ai-driven-supplier-diversity-optimization-js-gap-features",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoAiDrivenSupplierDiversityOptimization.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-routes-gap-no-contract-obligation-tracking-with-calendar-alerts-js-gap-features",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoContractObligationTrackingWithCalendarAlerts.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-routes-gap-no-e-signature-workflow-for-contracts-js-gap-features",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoESignatureWorkflowForContracts.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-routes-gap-no-invoice-anomaly-detection-ai-js-gap-features",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoInvoiceAnomalyDetectionAi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-routes-gap-no-invoice-matching-three-way-match-automation-js-gap-features",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoInvoiceMatchingThreeWayMatchAutomation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-routes-gap-no-predictive-delivery-quality-risk-model-js-gap-features",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoPredictiveDeliveryQualityRiskModel.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-routes-gap-no-supplier-portal-for-collaborative-bidding-js-gap-features",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoSupplierPortalForCollaborativeBidding.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-routes-gap-no-webhooks-for-external-system-events-js-gap-features",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoWebhooksForExternalSystemEvents.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-frontend-src-pages-gap-no-predictive-delivery-quality-risk-model-jsx-import",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "import",
    "displayName": "Import",
    "framework": "Prisma",
    "sourceFile": "frontend/src/pages/GapNoPredictiveDeliveryQualityRiskModel.jsx",
    "columns": [
      {
        "name": "useState",
        "type": "}",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "useState } from 'react'"
      },
      {
        "name": "const",
        "type": "API_BASE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "const API_BASE = (typeof window !== 'undefined' && window.__API_BASE__) || 'http://localhost:5001'"
      },
      {
        "name": "function",
        "type": "getHeaders",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "function getHeaders() {"
      },
      {
        "name": "return",
        "type": "{",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "return { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) }"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-market-intelligence",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "market_intelligence",
    "displayName": "Market Intelligence",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "report_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_title VARCHAR(500)"
      },
      {
        "name": "commodity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commodity VARCHAR(255)"
      },
      {
        "name": "current_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_price DECIMAL(15,2)"
      },
      {
        "name": "price_trend",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price_trend VARCHAR(50)"
      },
      {
        "name": "supply_outlook",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supply_outlook TEXT"
      },
      {
        "name": "demand_outlook",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "demand_outlook TEXT"
      },
      {
        "name": "key_drivers",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "key_drivers TEXT"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-market-intelligence",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "market_intelligence",
    "displayName": "Market Intelligence",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "report_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_title VARCHAR(500)"
      },
      {
        "name": "commodity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "commodity VARCHAR(255)"
      },
      {
        "name": "market_segment",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "market_segment VARCHAR(255)"
      },
      {
        "name": "current_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_price DECIMAL(15,2)"
      },
      {
        "name": "price_trend",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price_trend VARCHAR(50)"
      },
      {
        "name": "price_change_pct",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price_change_pct DECIMAL(5,2)"
      },
      {
        "name": "supply_outlook",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supply_outlook VARCHAR(50)"
      },
      {
        "name": "demand_outlook",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "demand_outlook VARCHAR(50)"
      },
      {
        "name": "key_drivers",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "key_drivers TEXT"
      },
      {
        "name": "competitor_activity",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "competitor_activity TEXT"
      },
      {
        "name": "forecast_summary",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "forecast_summary TEXT"
      },
      {
        "name": "data_source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "data_source VARCHAR(255)"
      },
      {
        "name": "report_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_date DATE"
      },
      {
        "name": "region",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "region VARCHAR(255)"
      },
      {
        "name": "impact_assessment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact_assessment TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'current'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'current'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-negotiation-points",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "negotiation_points",
    "displayName": "Negotiation Points",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "negotiation_title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "negotiation_title VARCHAR(500) NOT NULL"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "our_position",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "our_position TEXT"
      },
      {
        "name": "vendor_position",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_position TEXT"
      },
      {
        "name": "batna",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "batna TEXT"
      },
      {
        "name": "target_outcome",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_outcome TEXT"
      },
      {
        "name": "leverage_points",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leverage_points TEXT"
      },
      {
        "name": "risk_factors",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_factors TEXT"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'preparation'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'preparation'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-negotiation-points",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "negotiation_points",
    "displayName": "Negotiation Points",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "negotiation_title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "negotiation_title VARCHAR(500) NOT NULL"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "our_position",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "our_position TEXT"
      },
      {
        "name": "vendor_position",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_position TEXT"
      },
      {
        "name": "batna",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "batna TEXT"
      },
      {
        "name": "target_outcome",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_outcome TEXT"
      },
      {
        "name": "leverage_points",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leverage_points TEXT"
      },
      {
        "name": "risk_factors",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_factors TEXT"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'preparation'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'preparation'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-notes",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "notes",
    "displayName": "Notes",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-notes",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "notes",
    "displayName": "Notes",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER NOT NULL"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-notifications",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50)"
      },
      {
        "name": "read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "read BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-notifications",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500) NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "type VARCHAR(50) DEFAULT 'info'"
      },
      {
        "name": "link",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "link VARCHAR(500)"
      },
      {
        "name": "is_read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_read BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-performance-scorecards",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "performance_scorecards",
    "displayName": "Performance Scorecards",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period VARCHAR(100)"
      },
      {
        "name": "overall_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overall_score DECIMAL(5,2)"
      },
      {
        "name": "quality_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quality_score DECIMAL(5,2)"
      },
      {
        "name": "delivery_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivery_score DECIMAL(5,2)"
      },
      {
        "name": "cost_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_score DECIMAL(5,2)"
      },
      {
        "name": "defect_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defect_rate DECIMAL(5,2)"
      },
      {
        "name": "on_time_delivery_pct",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "on_time_delivery_pct DECIMAL(5,2)"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-performance-scorecards",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "performance_scorecards",
    "displayName": "Performance Scorecards",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "evaluation_period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evaluation_period VARCHAR(100)"
      },
      {
        "name": "overall_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overall_score DECIMAL(5,2)"
      },
      {
        "name": "quality_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quality_score DECIMAL(5,2)"
      },
      {
        "name": "delivery_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivery_score DECIMAL(5,2)"
      },
      {
        "name": "cost_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_score DECIMAL(5,2)"
      },
      {
        "name": "responsiveness_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "responsiveness_score DECIMAL(5,2)"
      },
      {
        "name": "innovation_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "innovation_score DECIMAL(5,2)"
      },
      {
        "name": "compliance_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_score DECIMAL(5,2)"
      },
      {
        "name": "defect_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defect_rate DECIMAL(5,2)"
      },
      {
        "name": "on_time_delivery_pct",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "on_time_delivery_pct DECIMAL(5,2)"
      },
      {
        "name": "cost_variance_pct",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_variance_pct DECIMAL(5,2)"
      },
      {
        "name": "corrective_actions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_actions TEXT"
      },
      {
        "name": "improvement_plan",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "improvement_plan TEXT"
      },
      {
        "name": "evaluator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evaluator VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-rfp-requests",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "rfp_requests",
    "displayName": "Rfp Requests",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "requirements",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requirements TEXT"
      },
      {
        "name": "budget_range",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget_range VARCHAR(255)"
      },
      {
        "name": "deadline",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deadline DATE"
      },
      {
        "name": "evaluation_criteria",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evaluation_criteria TEXT"
      },
      {
        "name": "attachments",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attachments TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-rfp-requests",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "rfp_requests",
    "displayName": "Rfp Requests",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "requirements",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requirements TEXT"
      },
      {
        "name": "budget_range",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget_range VARCHAR(255)"
      },
      {
        "name": "deadline",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deadline DATE"
      },
      {
        "name": "evaluation_criteria",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evaluation_criteria TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-risk-assessments",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "risk_assessments",
    "displayName": "Risk Assessments",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "assessment_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assessment_title VARCHAR(500)"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "risk_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_category VARCHAR(100)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(50)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "mitigation_strategy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitigation_strategy TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-risk-assessments",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "risk_assessments",
    "displayName": "Risk Assessments",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "assessment_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assessment_title VARCHAR(500)"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "risk_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_category VARCHAR(100)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(50)"
      },
      {
        "name": "probability",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "probability DECIMAL(5,2)"
      },
      {
        "name": "impact_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact_score DECIMAL(5,2)"
      },
      {
        "name": "risk_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score DECIMAL(5,2)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "mitigation_strategy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitigation_strategy TEXT"
      },
      {
        "name": "contingency_plan",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contingency_plan TEXT"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner VARCHAR(255)"
      },
      {
        "name": "review_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "review_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'identified'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'identified'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-savings-tracker",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "savings_tracker",
    "displayName": "Savings Tracker",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "initiative_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "initiative_name VARCHAR(500)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "original_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_cost DECIMAL(15,2)"
      },
      {
        "name": "negotiated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "negotiated_cost DECIMAL(15,2)"
      },
      {
        "name": "savings_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savings_amount DECIMAL(15,2)"
      },
      {
        "name": "savings_percentage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savings_percentage DECIMAL(5,2)"
      },
      {
        "name": "savings_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savings_type VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planned'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planned'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-savings-tracker",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "savings_tracker",
    "displayName": "Savings Tracker",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "initiative_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "initiative_name VARCHAR(500)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "original_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_cost DECIMAL(15,2)"
      },
      {
        "name": "negotiated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "negotiated_cost DECIMAL(15,2)"
      },
      {
        "name": "savings_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savings_amount DECIMAL(15,2)"
      },
      {
        "name": "savings_percentage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savings_percentage DECIMAL(5,2)"
      },
      {
        "name": "savings_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savings_type VARCHAR(100)"
      },
      {
        "name": "implementation_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "implementation_date DATE"
      },
      {
        "name": "validation_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "validation_status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(255)"
      },
      {
        "name": "fiscal_year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fiscal_year INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-spend-analytics",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "spend_analytics",
    "displayName": "Spend Analytics",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "spend_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spend_category VARCHAR(255)"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(255)"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(15,2)"
      },
      {
        "name": "budget_allocated",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget_allocated DECIMAL(15,2)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period VARCHAR(100)"
      },
      {
        "name": "fiscal_year",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fiscal_year VARCHAR(10)"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-spend-analytics",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "spend_analytics",
    "displayName": "Spend Analytics",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "spend_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spend_category VARCHAR(255)"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(255)"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(255)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(15,2)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period VARCHAR(100)"
      },
      {
        "name": "fiscal_year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fiscal_year INTEGER"
      },
      {
        "name": "budget_allocated",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget_allocated DECIMAL(15,2)"
      },
      {
        "name": "variance_percentage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variance_percentage DECIMAL(5,2)"
      },
      {
        "name": "transaction_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction_count INTEGER"
      },
      {
        "name": "contract_reference",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_reference VARCHAR(255)"
      },
      {
        "name": "cost_center",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_center VARCHAR(255)"
      },
      {
        "name": "payment_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method VARCHAR(100)"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'tracked'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'tracked'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-suppliers",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "suppliers",
    "displayName": "Suppliers",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "company_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating DECIMAL(3,2)"
      },
      {
        "name": "certifications",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certifications TEXT"
      },
      {
        "name": "quality_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quality_score DECIMAL(5,2)"
      },
      {
        "name": "delivery_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivery_score DECIMAL(5,2)"
      },
      {
        "name": "cost_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_score DECIMAL(5,2)"
      },
      {
        "name": "years_in_business",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "years_in_business INTEGER"
      },
      {
        "name": "annual_revenue",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annual_revenue DECIMAL(15,2)"
      },
      {
        "name": "employee_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employee_count INTEGER"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(255)"
      },
      {
        "name": "contact_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_email VARCHAR(255)"
      },
      {
        "name": "contact_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_phone VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-suppliers",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "suppliers",
    "displayName": "Suppliers",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "company_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name VARCHAR(500) NOT NULL"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(255)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating DECIMAL(3,2)"
      },
      {
        "name": "certifications",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certifications TEXT"
      },
      {
        "name": "annual_revenue",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annual_revenue DECIMAL(15,2)"
      },
      {
        "name": "employee_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employee_count INTEGER"
      },
      {
        "name": "years_in_business",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "years_in_business INTEGER"
      },
      {
        "name": "payment_terms",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_terms VARCHAR(255)"
      },
      {
        "name": "quality_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quality_score DECIMAL(5,2)"
      },
      {
        "name": "delivery_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivery_score DECIMAL(5,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-init-js-users",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/seeds/init.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'procurement_specialist'",
        "sourceLine": "role VARCHAR(100) DEFAULT 'procurement_specialist'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-strategic-sourcing-negotiation-backend-seeds-seed-js-users",
    "sourceProject": "AIStrategicSourcingNegotiation",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'procurement_specialist'",
        "sourceLine": "role VARCHAR(100) DEFAULT 'procurement_specialist'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-audit-trail",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "audit_trail",
    "displayName": "Audit Trail",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(20)"
      },
      {
        "name": "changes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "changes TEXT"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-compliance-documents",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "compliance_documents",
    "displayName": "Compliance Documents",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "document_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_name VARCHAR(255)"
      },
      {
        "name": "document_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_type VARCHAR(50)"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Valid'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Valid'"
      },
      {
        "name": "issuing_authority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issuing_authority VARCHAR(255)"
      },
      {
        "name": "file_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_url TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-delivery-performance",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "delivery_performance",
    "displayName": "Delivery Performance",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "order_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id VARCHAR(50)"
      },
      {
        "name": "promised_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "promised_date DATE"
      },
      {
        "name": "actual_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_date DATE"
      },
      {
        "name": "quantity_ordered",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity_ordered INTEGER"
      },
      {
        "name": "quantity_delivered",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity_delivered INTEGER"
      },
      {
        "name": "quality_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quality_score DECIMAL(5,2)"
      },
      {
        "name": "on_time",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "on_time BOOLEAN DEFAULT false"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-esg-compliance",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "esg_compliance",
    "displayName": "Esg Compliance",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "environmental_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "environmental_score DECIMAL(5,2)"
      },
      {
        "name": "social_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "social_score DECIMAL(5,2)"
      },
      {
        "name": "governance_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "governance_score DECIMAL(5,2)"
      },
      {
        "name": "overall_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overall_score DECIMAL(5,2)"
      },
      {
        "name": "carbon_footprint",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "carbon_footprint VARCHAR(20)"
      },
      {
        "name": "labor_practices",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "labor_practices VARCHAR(20)"
      },
      {
        "name": "board_diversity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "board_diversity VARCHAR(20)"
      },
      {
        "name": "sustainability_report",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "sustainability_report BOOLEAN DEFAULT false"
      },
      {
        "name": "compliance_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_status VARCHAR(50)"
      },
      {
        "name": "certifications",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certifications TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-e-signature-workflow-for-contract-obligations-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoESignatureWorkflowForContractObligations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-esg-controversy-news-scanner-ai-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoEsgControversyNewsScannerAi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-integration-with-dun-bradstreet-or-financial-data-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoIntegrationWithDunBradstreetOrFinancialData.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-predictive-bankruptcy-scoring-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoPredictiveBankruptcyScoring.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-supplier-onboarding-workflow-with-automated-document-collection-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoSupplierOnboardingWorkflowWithAutomatedDocumentCollection.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-supplier-portal-for-self-service-compliance-updates-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoSupplierPortalForSelfServiceComplianceUpdates.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-supply-chain-network-n-tier-risk-analysis-ai-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoSupplyChainNetworkNTierRiskAnalysisAi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-third-party-risk-aggregation-feeds-pci-certifications-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoThirdPartyRiskAggregationFeedsPciCertifications.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-webhooks-for-alert-delivery-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoWebhooksForAlertDelivery.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-geopolitical-risks",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "geopolitical_risks",
    "displayName": "Geopolitical Risks",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "region",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "region VARCHAR(100)"
      },
      {
        "name": "risk_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score DECIMAL(5,2)"
      },
      {
        "name": "political_stability",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "political_stability VARCHAR(20)"
      },
      {
        "name": "trade_restrictions",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trade_restrictions VARCHAR(20)"
      },
      {
        "name": "sanctions_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sanctions_status VARCHAR(50)"
      },
      {
        "name": "conflict_zone",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "conflict_zone BOOLEAN DEFAULT false"
      },
      {
        "name": "currency_risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currency_risk VARCHAR(20)"
      },
      {
        "name": "regulatory_risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulatory_risk VARCHAR(20)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-notifications",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE SET NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "severity VARCHAR(20) DEFAULT 'info'"
      },
      {
        "name": "read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "read BOOLEAN DEFAULT false"
      },
      {
        "name": "link",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "link VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-risk-alerts",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "risk_alerts",
    "displayName": "Risk Alerts",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "alert_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alert_type VARCHAR(50)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Open'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Open'"
      },
      {
        "name": "triggered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "triggered_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-risk-reports",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "risk_reports",
    "displayName": "Risk Reports",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "report_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_type VARCHAR(50)"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE SET NULL"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT"
      },
      {
        "name": "generated_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "generated_by INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Draft'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Draft'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-spend-analysis",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "spend_analysis",
    "displayName": "Spend Analysis",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period VARCHAR(20)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(50)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(15,2)"
      },
      {
        "name": "budget",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget DECIMAL(15,2)"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-supplier-contacts",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "supplier_contacts",
    "displayName": "Supplier Contacts",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(100)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(50)"
      },
      {
        "name": "is_primary",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_primary BOOLEAN DEFAULT false"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-suppliers",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "suppliers",
    "displayName": "Suppliers",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "industry",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "industry VARCHAR(100)"
      },
      {
        "name": "revenue",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revenue DECIMAL(15,2)"
      },
      {
        "name": "credit_rating",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "credit_rating VARCHAR(10)"
      },
      {
        "name": "stock_symbol",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stock_symbol VARCHAR(20)"
      },
      {
        "name": "financial_health_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "financial_health_score INTEGER DEFAULT 50"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Medium'",
        "sourceLine": "risk_level VARCHAR(20) DEFAULT 'Medium'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-users",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'analyst'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'analyst'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-vendor-contracts",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "vendor_contracts",
    "displayName": "Vendor Contracts",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "contract_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_number VARCHAR(50)"
      },
      {
        "name": "contract_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_type VARCHAR(50)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Active'"
      },
      {
        "name": "payment_terms",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_terms VARCHAR(50)"
      },
      {
        "name": "auto_renewal",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "auto_renewal BOOLEAN DEFAULT false"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-watchlist",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "watchlist",
    "displayName": "Watchlist",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason TEXT"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'Medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  }
];
