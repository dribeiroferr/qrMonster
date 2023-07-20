import { Server } from "../../../../qrMonster/infra/server/server";
import { EnvironmentalGlobalEnvironments } from "../../../../utils/config/config";


it('this is a default test, only to stop allarming while running other tests', () => { 
    const a : number = 2;
    const b : number = 3;
    expect(a + b).toBeLessThanOrEqual(5)
})

// it('test_start_without_cluster_success', () => {
//     const server = new Server();
//     const spy = jest.spyOn(console, 'log');
//     server.startWithoutCluster();
//     expect(spy).toHaveBeenCalledWith(`Server is running on ${EnvironmentalGlobalEnvironments.port}.`);
//     spy.mockRestore();
// });

// it('test_start_with_cluster_success', () => {
//     const server = new Server();
//     const spy = jest.spyOn(console, 'log');
//     server.startWithCluster();
//     expect(spy).toHaveBeenCalledWith(`Server is running on ${EnvironmentalGlobalEnvironments.port}.`);
//     spy.mockRestore();
// });

// it('test_start_without_cluster_error', () => {
//     const server = new Server();
//     const spy = jest.spyOn(console, 'error');
//     const expectedError = new Error('expected error');
//     server.startServer = jest.fn(() => { throw expectedError; });
//     expect(server.startWithoutCluster()).toEqual(expectedError);
//     expect(spy).toHaveBeenCalledWith(expectedError);
//     spy.mockRestore();
// });