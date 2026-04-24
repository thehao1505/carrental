interface Window {
  gtag: (
    event: "event",
    eventName: string,
    eventParams: {
      send_to: string;
      [key: string]: unknown;
    }
  ) => void;
}

declare module "*.css";
