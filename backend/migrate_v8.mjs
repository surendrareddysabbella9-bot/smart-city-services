import pool from './database.js';

async function migrate() {
    try {
        console.log('Starting migration v8: Adding latitude and longitude columns...');
        
        await pool.query(`
            ALTER TABLE workers 
            ADD COLUMN IF NOT EXISTS latitude DECIMAL(9,6),
            ADD COLUMN IF NOT EXISTS longitude DECIMAL(9,6);
        `);
        
        await pool.query(`
            ALTER TABLE bookings 
            ADD COLUMN IF NOT EXISTS latitude DECIMAL(9,6),
            ADD COLUMN IF NOT EXISTS longitude DECIMAL(9,6);
        `);
        
        console.log('Migration v8 completed successfully.');
    } catch (error) {
        console.error('Migration v8 failed:', error);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

migrate();
