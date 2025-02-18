import { AuthenticationType, AuthOptions, LocalAuthenticationResult } from './LocalAuthentication.types';
export { AuthenticationType, LocalAuthenticationResult };
export declare function hasHardwareAsync(): Promise<boolean>;
export declare function supportedAuthenticationTypesAsync(): Promise<AuthenticationType[]>;
export declare function isEnrolledAsync(): Promise<boolean>;
export declare function authenticateAsync(promptMessageIOS?: string, options?: AuthOptions): Promise<LocalAuthenticationResult>;
export declare function cancelAuthenticate(): Promise<void>;
