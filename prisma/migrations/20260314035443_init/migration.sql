-- CreateTable
CREATE TABLE "inventory_items" (
    "id" TEXT NOT NULL,
    "code_cliche" TEXT,
    "code_forme" TEXT,
    "machine" TEXT,
    "reference" TEXT,
    "client" TEXT,
    "element" TEXT,
    "supplier_cliche" TEXT,
    "supplier_forme" TEXT,
    "poses" INTEGER,
    "date_creation" TEXT,
    "date_creation_cliche" TEXT,
    "is_ordered_cliche" BOOLEAN,
    "date_order_cliche" TEXT,
    "date_expected_cliche" TEXT,
    "date_delivery_cliche" TEXT,
    "date_creation_forme" TEXT,
    "is_ordered_forme" BOOLEAN,
    "date_order_forme" TEXT,
    "date_expected_forme" TEXT,
    "date_delivery_forme" TEXT,
    "comments" TEXT,
    "non_conformity" TEXT,
    "custom_fields" JSONB,

    CONSTRAINT "inventory_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otg_repairs" (
    "id" TEXT NOT NULL,
    "type" TEXT,
    "linked_code" TEXT,
    "conducteur" TEXT,
    "machine" TEXT,
    "etat" TEXT,
    "repair_kind" TEXT,
    "supplier" TEXT,
    "declaration_date" TEXT,
    "repair_date" TEXT,
    "problem_description" TEXT,
    "corrective_action" TEXT,
    "status" TEXT,

    CONSTRAINT "otg_repairs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "username" TEXT,
    "password" TEXT,
    "photo" TEXT,
    "role" TEXT,
    "permissions" JSONB,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_config" (
    "id" TEXT NOT NULL,
    "data" JSONB,

    CONSTRAINT "app_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_settings" (
    "id" VARCHAR(50) NOT NULL,
    "primary_color" VARCHAR(7) DEFAULT '#002855',
    "secondary_color" VARCHAR(7) DEFAULT '#001a35',
    "logo" TEXT DEFAULT 'https://otgtrack.com/logo.png',
    "theme" VARCHAR(20) DEFAULT 'light',
    "language" VARCHAR(5) DEFAULT 'fr',
    "enable_email_alerts" BOOLEAN DEFAULT false,
    "notification_emails" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "app_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machines" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "color" VARCHAR(7) DEFAULT '#94a3b8',

    CONSTRAINT "machines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conducteurs" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "conducteurs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "custom_field_definitions" (
    "id" VARCHAR(50) NOT NULL,
    "label" VARCHAR(100) NOT NULL,
    "type" VARCHAR(20) NOT NULL,

    CONSTRAINT "custom_field_definitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "column_config" (
    "id" VARCHAR(50) NOT NULL,
    "label" VARCHAR(100) NOT NULL,
    "visible" BOOLEAN DEFAULT true,
    "sort_order" INTEGER DEFAULT 0,

    CONSTRAINT "column_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "machines_name_key" ON "machines"("name");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_name_key" ON "suppliers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "conducteurs_name_key" ON "conducteurs"("name");
