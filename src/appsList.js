import { LuisApps, ILuisApp } from 'dfb-luis-apps-lib';

export class LuisAppDataTable {

  static async getLuisApps(key) {
    return await LuisApps.getApps(key);
  }
}

