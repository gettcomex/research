[0m[7m[1m[31m FAIL [39m[22m[27m[0m [2mnumbers/[22m[1mtest.js[22m
  bignumber.js
    [32m✓[39m [2m9007199254740992 + 1 (5ms)[22m
    [32m✓[39m [2m(0.1 + 0.2 - 0.1) * 1.5 / 3 (2ms)[22m
    [32m✓[39m [2m0.1 + 0.2[22m
    [32m✓[39m [2m4.1414999961853027 ** 2 (1ms)[22m
    [32m✓[39m [2m17.1520222184028622786519 ** 2 (1ms)[22m
  big.js
    [32m✓[39m [2m9007199254740992 + 1 (2ms)[22m
    [32m✓[39m [2m(0.1 + 0.2 - 0.1) * 1.5 / 3 (1ms)[22m
    [32m✓[39m [2m0.1 + 0.2[22m
    [32m✓[39m [2m4.1414999961853027 ** 2 (1ms)[22m
    [32m✓[39m [2m17.1520222184028622786519 ** 2[22m
  decimal.js-light
    [32m✓[39m [2m9007199254740992 + 1 (2ms)[22m
    [32m✓[39m [2m(0.1 + 0.2 - 0.1) * 1.5 / 3 (1ms)[22m
    [32m✓[39m [2m0.1 + 0.2[22m
    [31m✕[39m [2m4.1414999961853027 ** 2 (12ms)[22m
    [31m✕[39m [2m17.1520222184028622786519 ** 2 (1ms)[22m
  decimal.js
    [32m✓[39m [2m9007199254740992 + 1 (1ms)[22m
    [32m✓[39m [2m(0.1 + 0.2 - 0.1) * 1.5 / 3 (2ms)[22m
    [32m✓[39m [2m0.1 + 0.2[22m
    [31m✕[39m [2m4.1414999961853027 ** 2 (2ms)[22m
    [31m✕[39m [2m17.1520222184028622786519 ** 2 (1ms)[22m

[1m[31m  [1m● [1mdecimal.js-light › 4.1414999961853027 ** 2[39m[22m

    [2mexpect([22m[31mreceived[39m[2m).toBe([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m"17.15202221840286227865191549062729"[39m
    Received: [31m"17.152022218402862278"[39m
[2m[22m
[2m    [0m [90m  7 | [39m        [36mconst[39m result [33m=[39m sample[33m.[39mrun(input)[33m.[39mtoString()[0m[22m
[2m    [0m [90m  8 | [39m[0m[22m
[2m    [0m[31m[1m>[2m[39m[90m  9 | [39m        expect(result)[33m.[39mtoBe(sample[33m.[39mexpected)[0m[22m
[2m    [0m [90m    | [39m                       [31m[1m^[2m[39m[0m[22m
[2m    [0m [90m 10 | [39m      })[0m[22m
[2m    [0m [90m 11 | [39m    }[0m[22m
[2m    [0m [90m 12 | [39m  })[0m[22m
[2m[22m
[2m      [2mat Object.toBe ([2m[0m[36mnumbers/test.js[39m[0m[2m:9:24)[2m[22m

[1m[31m  [1m● [1mdecimal.js-light › 17.1520222184028622786519 ** 2[39m[22m

    [2mexpect([22m[31mreceived[39m[2m).toBe([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m"294.19186618058544503262528979138900112248137361"[39m
    Received: [31m"294.19186618058544503"[39m
[2m[22m
[2m    [0m [90m  7 | [39m        [36mconst[39m result [33m=[39m sample[33m.[39mrun(input)[33m.[39mtoString()[0m[22m
[2m    [0m [90m  8 | [39m[0m[22m
[2m    [0m[31m[1m>[2m[39m[90m  9 | [39m        expect(result)[33m.[39mtoBe(sample[33m.[39mexpected)[0m[22m
[2m    [0m [90m    | [39m                       [31m[1m^[2m[39m[0m[22m
[2m    [0m [90m 10 | [39m      })[0m[22m
[2m    [0m [90m 11 | [39m    }[0m[22m
[2m    [0m [90m 12 | [39m  })[0m[22m
[2m[22m
[2m      [2mat Object.toBe ([2m[0m[36mnumbers/test.js[39m[0m[2m:9:24)[2m[22m

[1m[31m  [1m● [1mdecimal.js › 4.1414999961853027 ** 2[39m[22m

    [2mexpect([22m[31mreceived[39m[2m).toBe([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m"17.15202221840286227865191549062729"[39m
    Received: [31m"17.152022218402862279"[39m
[2m[22m
[2m    [0m [90m  7 | [39m        [36mconst[39m result [33m=[39m sample[33m.[39mrun(input)[33m.[39mtoString()[0m[22m
[2m    [0m [90m  8 | [39m[0m[22m
[2m    [0m[31m[1m>[2m[39m[90m  9 | [39m        expect(result)[33m.[39mtoBe(sample[33m.[39mexpected)[0m[22m
[2m    [0m [90m    | [39m                       [31m[1m^[2m[39m[0m[22m
[2m    [0m [90m 10 | [39m      })[0m[22m
[2m    [0m [90m 11 | [39m    }[0m[22m
[2m    [0m [90m 12 | [39m  })[0m[22m
[2m[22m
[2m      [2mat Object.toBe ([2m[0m[36mnumbers/test.js[39m[0m[2m:9:24)[2m[22m

[1m[31m  [1m● [1mdecimal.js › 17.1520222184028622786519 ** 2[39m[22m

    [2mexpect([22m[31mreceived[39m[2m).toBe([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m"294.19186618058544503262528979138900112248137361"[39m
    Received: [31m"294.19186618058544503"[39m
[2m[22m
[2m    [0m [90m  7 | [39m        [36mconst[39m result [33m=[39m sample[33m.[39mrun(input)[33m.[39mtoString()[0m[22m
[2m    [0m [90m  8 | [39m[0m[22m
[2m    [0m[31m[1m>[2m[39m[90m  9 | [39m        expect(result)[33m.[39mtoBe(sample[33m.[39mexpected)[0m[22m
[2m    [0m [90m    | [39m                       [31m[1m^[2m[39m[0m[22m
[2m    [0m [90m 10 | [39m      })[0m[22m
[2m    [0m [90m 11 | [39m    }[0m[22m
[2m    [0m [90m 12 | [39m  })[0m[22m
[2m[22m
[2m      [2mat Object.toBe ([2m[0m[36mnumbers/test.js[39m[0m[2m:9:24)[2m[22m

[1mTest Suites: [22m[1m[31m1 failed[39m[22m, 1 total
[1mTests:       [22m[1m[31m4 failed[39m[22m, [1m[32m16 passed[39m[22m, 20 total
[1mSnapshots:   [22m0 total
[1mTime:[22m        2.849s
[2mRan all test suites[22m[2m.[22m
