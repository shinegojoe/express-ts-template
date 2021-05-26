import { Page } from '../src/model/page.model';
declare class PageTester {
    url: string;
    lastId: number;
    testData: Page;
    constructor(url: string, apiString: string);
    add(): void;
    list(): void;
    get(): void;
    update(): void;
    del(): void;
    run(): void;
}
export { PageTester };
