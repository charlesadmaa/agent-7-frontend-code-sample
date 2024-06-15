export interface userInformationType {
    name: string,
    email: string,
    password: string,
    newPassword: string,
    newPasswordConfirmation: string,
    twoFactorIsActive: boolean,
    phone: string
    signature: string
}