import { cacheRates, getRate, convert } from "./currency.service";

let timer: NodeJS.Timer;
beforeAll(async () => {
  timer = await cacheRates();
});

afterAll(async () => {
  clearTimeout(timer);
});

describe("Currency fetching", () => {
  it("Can retrieve a rate", async () => {
    const euroRate = getRate("EUR");
    expect(typeof euroRate).toBe("number");
  });

  it("Cannot retrieve an invalid rate", async () => {
    expect(() => getRate("XYZ")).toThrow();
  });

  it("Can convert a USD value to GBP", async () => {
    const gbpValue = convert(100, "GBP");
    expect(typeof gbpValue).toBe("number");
  });
});
