import {describe, expect, test} from "vitest";
import {checkValidProps} from "./validate.ts";

describe("validatePercentage", () => {
  test('defaultSize가 maxSize보다 클 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '20%', maxSize: '40%', children: []});
    }).toThrow('defaultSize는 maxSize보다 클 수 없습니다.');
  });
  test('defaultSize가 minSize보다 작을 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '80%', maxSize: '100%', children: []});
    }).toThrow('defaultSize는 minSize보다 작을 수 없습니다.');
  });
  test('minSize가 maxSize보다 클 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '80%', maxSize: '40%', children: []});
    }).toThrow('minSize는 maxSize보다 클 수 없습니다.');
  });
  test('minSize가 0%보다 작을 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '-10%', maxSize: '40%', children: []});
    }).toThrow('minSize는 숫자% 형태여야 합니다.');

  });
  test('maxSize가 100%보다 클 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '20%', maxSize: '110%', children: []});
    }).toThrow('maxSize는 0% ~ 100% 사이의 값이어야 합니다.');
  });
});
