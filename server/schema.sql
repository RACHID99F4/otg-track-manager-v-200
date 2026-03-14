-- SQL Schema for OTG Track Manager

-- Table for Inventory Items
CREATE TABLE IF NOT EXISTS inventory_items (
    id TEXT PRIMARY KEY,
    code_cliche TEXT,
    code_forme TEXT,
    machine TEXT,
    reference TEXT,
    client TEXT,
    element TEXT,
    supplier_cliche TEXT,
    supplier_forme TEXT,
    poses INTEGER,
    date_creation TEXT,
    date_creation_cliche TEXT,
    is_ordered_cliche BOOLEAN,
    date_order_cliche TEXT,
    date_expected_cliche TEXT,
    date_delivery_cliche TEXT,
    date_creation_forme TEXT,
    is_ordered_forme BOOLEAN,
    date_order_forme TEXT,
    date_expected_forme TEXT,
    date_delivery_forme TEXT,
    comments TEXT,
    non_conformity TEXT,
    custom_fields JSONB
);

-- Table for OTG Repairs
CREATE TABLE IF NOT EXISTS otg_repairs (
    id TEXT PRIMARY KEY,
    type TEXT,
    linked_code TEXT,
    conducteur TEXT,
    machine TEXT,
    etat TEXT,
    repair_kind TEXT,
    supplier TEXT,
    declaration_date TEXT,
    repair_date TEXT,
    problem_description TEXT,
    corrective_action TEXT,
    status TEXT
);

-- Table for Users
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT,
    username TEXT UNIQUE,
    password TEXT,
    photo TEXT,
    role TEXT,
    permissions JSONB
);

-- Table for App Config
CREATE TABLE IF NOT EXISTS app_config (
    id TEXT PRIMARY KEY,
    data JSONB
);

-- Insert default admin if not exists
INSERT INTO users (id, name, username, password, photo, role, permissions)
VALUES (
    'admin-1', 
    'RACHID ECHAHMANI', 
    'rachid', 
    '1994@AZQSWX', 
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 
    'admin', 
    '{"admin": true, "custom": true, "dashboard": true, "inventory": {"edit": true, "read": true, "delete": true}, "calculator": true, "otgRepairs": {"edit": true, "read": true, "delete": true}}'
) ON CONFLICT (username) DO NOTHING;

-- Visual Identity & Global Settings
CREATE TABLE IF NOT EXISTS app_settings (
    id VARCHAR(50) PRIMARY KEY,
    primary_color VARCHAR(7) DEFAULT '#002855',
    secondary_color VARCHAR(7) DEFAULT '#001a35',
    logo TEXT DEFAULT 'https://otgtrack.com/logo.png',
    theme VARCHAR(20) DEFAULT 'light',
    language VARCHAR(5) DEFAULT 'fr',
    enable_email_alerts BOOLEAN DEFAULT false,
    notification_emails TEXT[] DEFAULT '{}'
);

-- Machines
CREATE TABLE IF NOT EXISTS machines (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    color VARCHAR(7) DEFAULT '#94a3b8'
);

-- Suppliers
CREATE TABLE IF NOT EXISTS suppliers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

-- Conducteurs (Drivers/Operators)
CREATE TABLE IF NOT EXISTS conducteurs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

-- Custom Fields
CREATE TABLE IF NOT EXISTS custom_field_definitions (
    id VARCHAR(50) PRIMARY KEY,
    label VARCHAR(100) NOT NULL,
    type VARCHAR(20) NOT NULL -- text, number, date
);

-- Column Configuration
CREATE TABLE IF NOT EXISTS column_config (
    id VARCHAR(50) PRIMARY KEY,
    label VARCHAR(100) NOT NULL,
    visible BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0
);

-- Initial Data
INSERT INTO app_settings (id) VALUES ('main') ON CONFLICT (id) DO NOTHING;

-- INSERT INTO machines (name, color) VALUES 
-- ('MACHINE 1', '#3b82f6'), 
-- ('MACHINE 2', '#10b981'), 
-- ('MACHINE 3', '#f59e0b') 
-- ON CONFLICT (name) DO NOTHING;

-- INSERT INTO suppliers (name) VALUES 
-- ('SUPPLIER 1'), 
-- ('SUPPLIER 2') 
-- ON CONFLICT (name) DO NOTHING;

-- INSERT INTO conducteurs (name) VALUES 
-- ('HILALI'), ('MOHAMED'), ('REDA'), ('LAHCEN'), ('ABDERAHIM'), 
-- ('RACHID'), ('SAMIR'), ('ADIL'), ('ANASS'), ('MERYEM'), 
-- ('YOUSSEF'), ('SALMA')
-- ON CONFLICT (name) DO NOTHING;

INSERT INTO column_config (id, label, visible, sort_order) VALUES
('element', 'Élément', true, 1),
('codes', 'Cliché / Forme', true, 2),
('client', 'Client & Réf', true, 3),
('machine', 'Machine', true, 4),
('supplier', 'Fournisseur(s)', true, 5),
('poses', 'Poses', true, 6),
('dateOrder', 'Date Commande', true, 7),
('dateExpected', 'Date Prévue', true, 8),
('dateDelivery', 'Réception Réelle', true, 9)
ON CONFLICT (id) DO NOTHING;
