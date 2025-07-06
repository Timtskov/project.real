// Cloud storage service for user data with auto-save and cross-device sync
interface UserData {
  settings: any;
  progress: any[];
  customSubjects: any[];
  lastUpdated: number;
  deviceId: string;
  version: number;
}

class CloudStorageService {
  private baseKey = 'estonian-learning-cloud';
  private deviceId: string;
  private saveQueue: Map<string, any> = new Map();
  private isOnline: boolean = navigator.onLine;
  
  constructor() {
    this.deviceId = this.getOrCreateDeviceId();
    this.setupOnlineListener();
    this.startPeriodicSync();
  }

  private getOrCreateDeviceId(): string {
    let deviceId = localStorage.getItem('device-id');
    if (!deviceId) {
      deviceId = 'device-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
      localStorage.setItem('device-id', deviceId);
    }
    return deviceId;
  }

  private setupOnlineListener(): void {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.syncPendingData();
    });
    
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  private startPeriodicSync(): void {
    // Sync every 30 seconds when online
    setInterval(() => {
      if (this.isOnline && this.saveQueue.size > 0) {
        this.syncPendingData();
      }
    }, 30000);
  }

  async saveUserData(username: string, data: Omit<UserData, 'lastUpdated' | 'deviceId' | 'version'>): Promise<{ success: boolean; message: string }> {
    try {
      const existingData = await this.loadUserData(username);
      const version = existingData ? existingData.version + 1 : 1;
      
      const userData: UserData = {
        ...data,
        lastUpdated: Date.now(),
        deviceId: this.deviceId,
        version
      };
      
      // Save to localStorage immediately
      localStorage.setItem(`${this.baseKey}-${username.toLowerCase()}`, JSON.stringify(userData));
      
      // Add to sync queue for cloud backup
      this.saveQueue.set(username, userData);
      
      // In a real app, this would sync to a cloud database
      if (this.isOnline) {
        await this.syncToCloud(username, userData);
      }
      
      return { success: true, message: 'Andmed salvestatud edukalt' };
    } catch (error) {
      console.error('Failed to save user data:', error);
      return { success: false, message: 'Salvestamine ebaõnnestus' };
    }
  }

  private async syncToCloud(username: string, userData: UserData): Promise<void> {
    // Simulate cloud sync with delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real app, this would be an API call to your backend
    console.log(`Data synced to cloud for user: ${username}`, {
      version: userData.version,
      deviceId: userData.deviceId,
      timestamp: userData.lastUpdated
    });
    
    // Remove from queue after successful sync
    this.saveQueue.delete(username);
  }

  async loadUserData(username: string): Promise<UserData | null> {
    try {
      // First try to load from localStorage
      const localData = localStorage.getItem(`${this.baseKey}-${username.toLowerCase()}`);
      let userData: UserData | null = null;
      
      if (localData) {
        userData = JSON.parse(localData);
      }
      
      // In a real app, also check cloud for newer version
      if (this.isOnline) {
        const cloudData = await this.loadFromCloud(username);
        if (cloudData && (!userData || cloudData.version > userData.version)) {
          userData = cloudData;
          // Update localStorage with newer cloud data
          localStorage.setItem(`${this.baseKey}-${username.toLowerCase()}`, JSON.stringify(userData));
        }
      }
      
      return userData;
    } catch (error) {
      console.error('Failed to load user data:', error);
      return null;
    }
  }

  private async loadFromCloud(username: string): Promise<UserData | null> {
    try {
      // Simulate cloud fetch with delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // In a real app, this would be an API call to your backend
      // For now, return null as we're using localStorage as primary storage
      return null;
    } catch (error) {
      console.error('Failed to load from cloud:', error);
      return null;
    }
  }

  async syncUserData(username: string): Promise<UserData | null> {
    if (!this.isOnline) {
      return this.loadUserData(username);
    }
    
    try {
      const localData = await this.loadUserData(username);
      const cloudData = await this.loadFromCloud(username);
      
      // Merge logic: use the version with higher version number
      if (!localData && !cloudData) return null;
      if (!localData) return cloudData;
      if (!cloudData) return localData;
      
      const newerData = localData.version >= cloudData.version ? localData : cloudData;
      
      // Save the newer version to both local and cloud
      localStorage.setItem(`${this.baseKey}-${username.toLowerCase()}`, JSON.stringify(newerData));
      await this.syncToCloud(username, newerData);
      
      return newerData;
    } catch (error) {
      console.error('Failed to sync user data:', error);
      return this.loadUserData(username);
    }
  }

  private async syncPendingData(): Promise<void> {
    const promises = Array.from(this.saveQueue.entries()).map(([username, userData]) =>
      this.syncToCloud(username, userData)
    );
    
    try {
      await Promise.all(promises);
    } catch (error) {
      console.error('Failed to sync pending data:', error);
    }
  }

  async deleteUserData(username: string): Promise<void> {
    try {
      localStorage.removeItem(`${this.baseKey}-${username.toLowerCase()}`);
      this.saveQueue.delete(username);
      
      // In a real app, also delete from cloud
      console.log(`Data deleted for user: ${username}`);
    } catch (error) {
      console.error('Failed to delete user data:', error);
    }
  }

  getConnectionStatus(): boolean {
    return this.isOnline;
  }

  getPendingSyncCount(): number {
    return this.saveQueue.size;
  }
}

export const cloudStorage = new CloudStorageService();