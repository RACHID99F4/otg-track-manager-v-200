const isProd = typeof process !== 'undefined' ? process.env?.NODE_ENV === 'production' : (import.meta as any).env?.PROD;
const API_BASE_URL = isProd ? '/api' : 'http://localhost:3001/api';

export const api = {
    // Inventory
    async getInventory() {
        const response = await fetch(`${API_BASE_URL}/inventory`);
        if (!response.ok) throw new Error('Failed to fetch inventory');
        return response.json();
    },

    async createItem(item: any) {
        const response = await fetch(`${API_BASE_URL}/inventory`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        });
        if (!response.ok) throw new Error('Failed to create item');
        return response.json();
    },

    async updateItem(id: string, item: any) {
        const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        });
        if (!response.ok) throw new Error('Failed to update item');
        return response.json();
    },

    async deleteItem(id: string) {
        const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete item');
    },

    // Repairs
    async getRepairs() {
        const response = await fetch(`${API_BASE_URL}/repairs`);
        if (!response.ok) throw new Error('Failed to fetch repairs');
        return response.json();
    },

    async createRepair(repair: any) {
        const response = await fetch(`${API_BASE_URL}/repairs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(repair),
        });
        if (!response.ok) throw new Error('Failed to create repair');
        return response.json();
    },

    async updateRepair(id: string, repair: any) {
        const response = await fetch(`${API_BASE_URL}/repairs/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(repair),
        });
        if (!response.ok) throw new Error('Failed to update repair');
        return response.json();
    },

    async deleteRepair(id: string) {
        const response = await fetch(`${API_BASE_URL}/repairs/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete repair');
    },

    // Users
    async getUsers() {
        const response = await fetch(`${API_BASE_URL}/users`);
        if (!response.ok) throw new Error('Failed to fetch users');
        return response.json();
    },

    async createUser(user: any) {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
        if (!response.ok) throw new Error('Failed to create user');
        return response.json();
    },

    async updateUser(id: string, user: any) {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
        if (!response.ok) throw new Error('Failed to update user');
        return response.json();
    },

    async deleteUser(id: string) {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete user');
    },

    // Config
    async getConfig() {
        const response = await fetch(`${API_BASE_URL}/config`);
        if (!response.ok) throw new Error('Failed to fetch config');
        return response.json();
    },

    async saveConfig(config: any) {
        const response = await fetch(`${API_BASE_URL}/config`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(config),
        });
        if (!response.ok) throw new Error('Failed to save config');
        return response.json();
    }
};
