import { LuisAppDataTable } from "./appsList";
const fake_key = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

describe("LuisAppDataTable", () =>{

    it("should get mock data", async(done) =>{
        try{     
            const apps: any = await LuisAppDataTable.getLuisApps(fake_key);
            console.log(apps[0].name);
            expect(apps[0].name).toEqual("Mocked Hazem's Pizza App 2");
            done();
        } catch (err){
            done(err);
        }
    });

});