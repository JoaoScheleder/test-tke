export {};

declare global {
  interface Window {
    electronAPI: {
      openExternal: (url: string) => Promise<void>;
      trigger: (channel: string, data?: any) => void;
      on: (channel: string, callback: (event: any, data: any) => void) => void;
    };
  }
}
