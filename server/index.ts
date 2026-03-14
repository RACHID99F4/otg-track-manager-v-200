import express from 'express';
import cors from 'cors';
import pool from './db.ts';


// Schema initialization is handled via `npx prisma db push` before deployment.
// We still do a lightweight initialization to ensure default DB rows exist.
const runInitialData = async () => {
    try {
        await pool.query(`INSERT INTO app_settings (id) VALUES ('main') ON CONFLICT (id) DO NOTHING`);
        console.log('Initial data check complete.');
    } catch (e) {
        console.warn('Could not run initial data insert (may already exist):', e);
    }
};




const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Log all requests for debugging
let isInitialized = false;
app.use(async (req, res, next) => {
    console.log(`[${new Date().toISOString()}] Incoming: ${req.method} ${req.originalUrl || req.url}`);
    
    // Auto-initialize base data on the first request (Vercel cold start compatible)
    if (!isInitialized) {
        await runInitialData();
        isInitialized = true;
    }
    next();
});


// --- Inventory Endpoints ---

// Get all items
app.get('/api/inventory', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM inventory_items ORDER BY date_creation DESC');
        res.json(result.rows);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// Add new item
app.post('/api/inventory', async (req, res) => {
    const item = req.body;
    console.log('POST /api/inventory body:', item);
    try {
        const query = `
      INSERT INTO inventory_items (
        id, code_cliche, code_forme, machine, reference, client, element, 
        supplier_cliche, supplier_forme, poses, date_creation, 
        date_creation_cliche, is_ordered_cliche, date_order_cliche, date_expected_cliche, date_delivery_cliche,
        date_creation_forme, is_ordered_forme, date_order_forme, date_expected_forme, date_delivery_forme,
        comments, non_conformity, custom_fields
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)
      RETURNING *
    `;
        const values = [
            item.id, item.codeCliche, item.codeForme, item.machine, item.reference, item.client, item.element,
            item.supplierCliche, item.supplierForme, item.poses, item.dateCreation,
            item.dateCreationCliche, item.isOrderedCliche, item.dateOrderCliche, item.dateExpectedCliche, item.dateDeliveryCliche,
            item.dateCreationForme, item.isOrderedForme, item.dateOrderForme, item.dateExpectedForme, item.dateDeliveryForme,
            item.comments, item.nonConformity, JSON.stringify(item.customFields || {})
        ];
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (err: any) {
        console.error('Error in POST /api/inventory:', err);
        res.status(500).json({ error: err.message });
    }
});

// Update item
app.put('/api/inventory/:id', async (req, res) => {
    const { id } = req.params;
    const item = req.body;
    console.log(`PUT /api/inventory/${id} body:`, item);
    try {
        const query = `
        UPDATE inventory_items SET 
          code_cliche=$2, code_forme=$3, machine=$4, reference=$5, client=$6, element=$7, 
          supplier_cliche=$8, supplier_forme=$9, poses=$10, 
          date_creation_cliche=$11, is_ordered_cliche=$12, date_order_cliche=$13, date_expected_cliche=$14, date_delivery_cliche=$15,
          date_creation_forme=$16, is_ordered_forme=$17, date_order_forme=$18, date_expected_forme=$19, date_delivery_forme=$20,
          comments=$21, non_conformity=$22, custom_fields=$23
        WHERE id=$1
        RETURNING *
      `;
        const values = [
            id, item.codeCliche, item.codeForme, item.machine, item.reference, item.client, item.element,
            item.supplierCliche, item.supplierForme, item.poses,
            item.dateCreationCliche, item.isOrderedCliche, item.dateOrderCliche, item.dateExpectedCliche, item.dateDeliveryCliche,
            item.dateCreationForme, item.isOrderedForme, item.dateOrderForme, item.dateExpectedForme, item.dateDeliveryForme,
            item.comments, item.nonConformity, JSON.stringify(item.customFields || {})
        ];
        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (err: any) {
        console.error('Error in PUT /api/inventory:', err);
        res.status(500).json({ error: err.message });
    }
});

// Delete item
app.delete('/api/inventory/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM inventory_items WHERE id = $1', [id]);
        res.status(204).send();
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// --- Repairs Endpoints ---

app.get('/api/repairs', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM otg_repairs ORDER BY declaration_date DESC');
        res.json(result.rows);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/repairs', async (req, res) => {
    const repair = req.body;
    console.log('POST /api/repairs body:', repair);
    try {
        const query = `
      INSERT INTO otg_repairs (
        id, type, linked_code, conducteur, machine, etat, repair_kind, 
        supplier, declaration_date, repair_date, problem_description, 
        corrective_action, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *
    `;
        const values = [
            repair.id, repair.type, repair.linkedCode, repair.conducteur, repair.machine, repair.etat, repair.repairKind,
            repair.supplier, repair.declarationDate, repair.repairDate, repair.problemDescription,
            repair.correctiveAction, repair.status
        ];
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (err: any) {
        console.error('Error in POST /api/repairs:', err);
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/repairs/:id', async (req, res) => {
    const { id } = req.params;
    const repair = req.body;
    try {
        const query = `
      UPDATE otg_repairs SET 
        type=$2, linked_code=$3, conducteur=$4, machine=$5, etat=$6, repair_kind=$7, 
        supplier=$8, declaration_date=$9, repair_date=$10, problem_description=$11, 
        corrective_action=$12, status=$13
      WHERE id=$1
      RETURNING *
    `;
        const values = [
            id, repair.type, repair.linkedCode, repair.conducteur, repair.machine, repair.etat, repair.repairKind,
            repair.supplier, repair.declarationDate, repair.repairDate, repair.problemDescription,
            repair.correctiveAction, repair.status
        ];
        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/repairs/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM otg_repairs WHERE id = $1', [id]);
        res.status(204).send();
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// --- Users Endpoints ---

app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/users', async (req, res) => {
    const user = req.body;
    console.log('POST /api/users body:', user);
    try {
        const result = await pool.query(
            'INSERT INTO users (id, name, username, password, photo, role, permissions) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [user.id, user.name, user.username, user.password, user.photo, user.role, JSON.stringify(user.permissions)]
        );
        res.status(201).json(result.rows[0]);
    } catch (err: any) {
        console.error('Error in POST /api/users:', err);
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    console.log('PUT /api/users body:', user);
    try {
        const result = await pool.query(
            'UPDATE users SET name=$2, username=$3, password=$4, photo=$5, role=$6, permissions=$7 WHERE id=$1 RETURNING *',
            [id, user.name, user.username, user.password, user.photo, user.role, JSON.stringify(user.permissions)]
        );
        res.json(result.rows[0]);
    } catch (err: any) {
        console.error('Error in PUT /api/users:', err);
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.status(204).send();
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// --- Config Endpoints ---

app.get('/api/config', async (req, res) => {
    try {
        const settings = await pool.query("SELECT * FROM app_settings WHERE id = 'main'");
        const machines = await pool.query("SELECT * FROM machines");
        const suppliers = await pool.query("SELECT * FROM suppliers");
        const conducteurs = await pool.query("SELECT * FROM conducteurs");
        const customFields = await pool.query("SELECT * FROM custom_field_definitions");
        const columns = await pool.query("SELECT * FROM column_config ORDER BY sort_order ASC");

        const s = settings.rows[0] || {};

        const config = {
            primaryColor: s.primary_color || '#002855',
            secondaryColor: s.secondary_color || '#001a35',
            logo: s.logo || 'https://otgtrack.com/logo.png',
            theme: s.theme || 'light',
            language: s.language || 'fr',
            enableEmailAlerts: s.enable_email_alerts || false,
            notificationEmails: s.notification_emails || [],
            machines: machines.rows.map(m => m.name),
            machineColors: machines.rows.reduce((acc, m) => ({ ...acc, [m.name]: m.color }), {}),
            suppliers: suppliers.rows.map(sup => sup.name),
            conducteurs: conducteurs.rows.map(c => c.name),
            customFieldDefinitions: customFields.rows.map(cf => ({
                id: cf.id,
                label: cf.label,
                type: cf.type
            })),
            columnOrder: columns.rows.map(c => ({
                id: c.id,
                label: c.label,
                visible: c.visible
            }))
        };

        res.json(config);
    } catch (err: any) {
        console.error('Error in GET /api/config:', err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/config', async (req, res) => {
    const config = req.body;
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        // Update settings using UPSERT to be robust
        await client.query(
            `INSERT INTO app_settings (
                id, primary_color, secondary_color, logo, 
                theme, language, enable_email_alerts, notification_emails
            ) VALUES ('main', $1, $2, $3, $4, $5, $6, $7)
            ON CONFLICT (id) DO UPDATE SET 
                primary_color=EXCLUDED.primary_color, 
                secondary_color=EXCLUDED.secondary_color, 
                logo=EXCLUDED.logo, 
                theme=EXCLUDED.theme, 
                language=EXCLUDED.language, 
                enable_email_alerts=EXCLUDED.enable_email_alerts, 
                notification_emails=EXCLUDED.notification_emails`,
            [
                config.primaryColor, config.secondaryColor, config.logo,
                config.theme, config.language, config.enableEmailAlerts,
                config.notificationEmails
            ]
        );


        // Update machines (delete and re-insert is simplest for hardcoded style, but let's be cleaner)
        await client.query('DELETE FROM machines');
        for (const name of (config.machines || [])) {
            if (!name) continue;
            await client.query(
                'INSERT INTO machines (name, color) VALUES ($1, $2)',
                [name, config.machineColors?.[name] || '#94a3b8']
            );
        }

        // Update suppliers
        await client.query('DELETE FROM suppliers');
        for (const name of (config.suppliers || [])) {
            if (!name) continue;
            await client.query('INSERT INTO suppliers (name) VALUES ($1)', [name]);
        }

        // Update conducteurs
        await client.query('DELETE FROM conducteurs');
        for (const name of (config.conducteurs || [])) {
            if (!name) continue;
            await client.query('INSERT INTO conducteurs (name) VALUES ($1)', [name]);
        }

        // Update custom fields
        await client.query('DELETE FROM custom_field_definitions');
        for (const field of (config.customFieldDefinitions || [])) {
            await client.query(
                'INSERT INTO custom_field_definitions (id, label, type) VALUES ($1, $2, $3)',
                [field.id, field.label, field.type]
            );
        }

        // Update column config
        await client.query('DELETE FROM column_config');
        for (let i = 0; i < (config.columnOrder || []).length; i++) {
            const col = config.columnOrder[i];
            await client.query(
                'INSERT INTO column_config (id, label, visible, sort_order) VALUES ($1, $2, $3, $4)',
                [col.id, col.label, col.visible, i]
            );
        }

        await client.query('COMMIT');

        // Return the full config again for the frontend
        const settings = await pool.query("SELECT * FROM app_settings WHERE id = 'main'");
        const machines = await pool.query("SELECT * FROM machines");
        const suppliers = await pool.query("SELECT * FROM suppliers");
        const conducteurs = await pool.query("SELECT * FROM conducteurs");
        const customFields = await pool.query("SELECT * FROM custom_field_definitions");
        const columns = await pool.query("SELECT * FROM column_config ORDER BY sort_order ASC");
        const s = settings.rows[0] || {};

        const updatedConfig = {
            primaryColor: s.primary_color,
            secondaryColor: s.secondary_color,
            logo: s.logo,
            theme: s.theme,
            language: s.language,
            enableEmailAlerts: s.enable_email_alerts,
            notificationEmails: s.notification_emails,
            machines: machines.rows.map(m => m.name),
            machineColors: machines.rows.reduce((acc, m) => ({ ...acc, [m.name]: m.color }), {}),
            suppliers: suppliers.rows.map(sup => sup.name),
            conducteurs: conducteurs.rows.map(c => c.name),
            customFieldDefinitions: customFields.rows.map(cf => ({ id: cf.id, label: cf.label, type: cf.type })),
            columnOrder: columns.rows.map(c => ({ id: c.id, label: c.label, visible: c.visible }))
        };

        res.json(updatedConfig);
    } catch (err: any) {
        if (client) await client.query('ROLLBACK');
        console.error('Error in POST /api/config:', err);
        res.status(500).json({ error: err.message });
    } finally {
        if (client) client.release();
    }
});

app.use((req, res) => {
    console.log(`[${new Date().toISOString()}] 404 at ${req.method} ${req.url}`);
    res.status(404).json({ error: `Route ${req.method} ${req.url} not found` });
});

export default app;

if (process.env.NODE_ENV !== 'production') {
    const startServer = async () => {
        try {
            console.log('Starting server bootstrap...');
            await runInitialData();
            const server = app.listen(port, () => {
                console.log(`Server running at http://localhost:${port}`);
            });

            server.on('error', (err) => {
                console.error('Server error:', err);
            });

        } catch (err) {
            console.error('Failed to sync schema or start server:', err);
            process.exit(1);
        }
    };

    startServer();
}
