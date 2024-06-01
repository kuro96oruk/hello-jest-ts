/**
 * @jest-environment node
 */
describe("#reset mocks with jest.fn", () => {
    const targetDate = "2020-12-25";
    const mockDate = new Date("2019-12-25");

    beforeEach(() => {
        Date = jest.fn(() => mockDate) as unknown as jest.MockedFunction<
            typeof Date
        >;
    });

    it("jest.clearAllMocks", () => {
        expect(new Date(targetDate)).toEqual(mockDate);
        expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([
            ["2020-12-25"],
        ]);
        expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual(
            [{type: "return", value: mockDate}]
        );

        jest.clearAllMocks();

        expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual(
            []
        );
        expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual(
            []
        );

        expect(new Date(targetDate)).toEqual(mockDate);
    });

    it("jest.resetAllMocks", () => {
        expect(new Date(targetDate)).toEqual(mockDate);
        expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([
            ["2020-12-25"],
        ]);
        expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual(
            [{type: "return", value: mockDate}]
        );

        jest.resetAllMocks();

        expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual(
            []
        );
        expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual(
            []
        );

        expect(new Date(targetDate)).toEqual({});
    });

    it("jest.restoreAllMocks", () => {
        expect(new Date(targetDate)).toEqual(mockDate);
        expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([
            ["2020-12-25"],
        ]);
        expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual(
            [{type: "return", value: mockDate}]
        );

        jest.resetAllMocks();

        expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual(
            []
        );
        expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual(
            []
        );

        expect(new Date(targetDate)).toEqual({});
    });
});
