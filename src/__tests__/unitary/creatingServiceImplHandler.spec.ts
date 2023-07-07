import { ServiceImplDTO } from "../../serviceName/app/serviceImpl_dto";
import { ServiceImplHandler } from "../../serviceName/app/serviceImpl_handler";


    describe('Testing new service implementation handler', () => { 
        it('should return an string with >save< value from createNewServiceImpl()', () => { 
            const serviceImplHandler: ServiceImplHandler = new ServiceImplHandler({
                name: 'Service_Implementation01',
                attr: { 
                    'field1': 'lorem ipsum',
                    'field2': [1, 3, 4, 6, 9],
                    'field3': 12345 
                }
            });
            
            expect(serviceImplHandler.createNewServiceImpl).toMatch('save');
        })
     })
