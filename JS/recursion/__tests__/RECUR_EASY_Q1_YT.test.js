import { contains } from "../RECUR_EASY_Q1_YT";
import { test_1, test_2 } from "../__data__/Q1_mock_data.json"

describe('Test for checking if method contains values', () => {

    it('contains a number', () => {
        const actualResult = contains(test_1, 45);
        expect(actualResult).toBeTruthy();
    });

    it('contains a string', () => {
        const actualResult = contains(test_1, 'foobar');
        expect(actualResult).toBeTruthy();
    });

    it('can check if null values are there', () => {
        const actualResult = contains(test_2, null);
        expect(actualResult).toBeTruthy();
    });

});