export const STORAGE_PREFIX = 'hp_';

export function saveToStorage<T>(key: string, data: T): void {
    try {
        const serialized = JSON.stringify(data);
        localStorage.setItem(STORAGE_PREFIX + key, serialized);
    } catch (error) {
        console.error('[STORAGE ERROR] Failed to save key:', error);
    }
}

export function loadFromStorage<T>(key: string, fallback: T): T {
    try {
        const serialized = localStorage.getItem(STORAGE_PREFIX + key);
        if (serialized === null) return fallback;
        return JSON.parse(serialized) as T;
    } catch (error) {
        console.error('[STORAGE ERROR] Failed to load key:', error);
        return fallback;
    }
}