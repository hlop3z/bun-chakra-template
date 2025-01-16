/* eslint-disable @typescript-eslint/no-explicit-any */

// Add `JSX.IntrinsicElements` Definition (For Custom JSX Frameworks)
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any; // Define intrinsic elements as needed
  }
}

// Frontend
type JSON = null | boolean | number | string | JSON[] | { [key: string]: JSON };

// Backend
declare const API: any;
