import { TestStruct } from '../src/model/test.model';
declare class CRUDTester {
    url: string;
    lastId: number;
    testData: TestStruct;
    constructor(url: string, apiString: string);
    add(): void;
    list(): void;
    get(): void;
    update(): void;
    del(): void;
    run(): void;
}
export { CRUDTester };
