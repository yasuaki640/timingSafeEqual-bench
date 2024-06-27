import { timingSafeEqual } from "hono/utils/buffer";
import { bench, describe } from "vitest";
import { timingSafeEqual2 } from "./timingSafeEqual2";

import { SHA256 as sha256CryptoJS } from "crypto-js";
// positive
describe("Benchmark large equal string", () => {
  const a = "127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935";
  const b = "127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935";

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark small equal string", () => {
  const a = "a";
  const b = "a";

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark empty equal string", () => {
  const a = "";
  const b = "";

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark equal undefined", () => {
  bench("timingSafeEqual", async () => {
    await timingSafeEqual(undefined, undefined);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(undefined, undefined);
  });
});

describe("Benchmark equal true", () => {
  const a = true;
  const b = true;

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark equal false", () => {
  const a = false;
  const b = false;

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark equal true with hash function", () => {
  const a = true;
  const b = true;

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b, (d: string) => sha256CryptoJS(d).toString());
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b, (d: string) => sha256CryptoJS(d).toString());
  });
});

describe("Benchmark different strings", () => {
  const a = "a";
  const b = "b";

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different long strings", () => {
  const a = "a";
  const b = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different long strings 2", () => {
  const a = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const b = "a";

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different strings 3", () => {
  const a = "alpha";
  const b = "beta";

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different booleans", () => {
  const a = false;
  const b = true;

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different boolean and undefined", () => {
  const a = false;
  const b = undefined;

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different functions", () => {
  const a = () => {};
  const b = () => {};

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different objects", () => {
  const a = {};
  const b = {};

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different objects with same key value", () => {
  const a = { a: 1 };
  const b = { a: 1 };

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different objects with different key value", () => {
  const a = { a: 1 };
  const b = { a: 2 };

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different arrays with same values", () => {
  const a = [1, 2];
  const b = [1, 2];

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different arrays with different values", () => {
  const a = [1, 2];
  const b = [1, 2, 3];

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b);
  });
});

describe("Benchmark different strings with hash function", () => {
  const a = "a";
  const b = "b";

  bench("timingSafeEqual", async () => {
    await timingSafeEqual(a, b, () => undefined);
  });
  bench("timingSafeEqual2", async () => {
    await timingSafeEqual2(a, b, () => undefined);
  });
});
