interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: [],
  tenantRoles: ['Owner', 'HR Manager', 'Administrator'],
  tenantName: 'Team',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage team information', 'Assign users to teams', 'Manage HR data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/2fa9ce11-8157-4591-aa42-15b47f9a7db5',
};
