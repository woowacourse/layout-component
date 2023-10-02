import {describe, expect, test} from "vitest";
import {checkValidProps} from "./validate.ts";
import {
  ERROR_MESSAGE_CHECK_DEFAULT_SIZE_GREATER_THAN_MAX_SIZE,
  ERROR_MESSAGE_CHECK_DEFAULT_SIZE_LESS_THAN_MIN_SIZE,
  ERROR_MESSAGE_CHECK_MAX_SIZE,
  ERROR_MESSAGE_CHECK_MAX_SIZE_NUMBER_PERCENTAGE,
  ERROR_MESSAGE_CHECK_MIN_SIZE,
  ERROR_MESSAGE_CHECK_MIN_SIZE_NUMBER_PERCENTAGE
} from "./constants.ts";

describe("validatePercentage", () => {
  test('defaultSize가 maxSize보다 클 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '20%', maxSize: '40%', children: []});
    }).toThrow(ERROR_MESSAGE_CHECK_DEFAULT_SIZE_GREATER_THAN_MAX_SIZE);
  });
  test('defaultSize가 minSize보다 작을 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '80%', maxSize: '100%', children: []});
    }).toThrow(ERROR_MESSAGE_CHECK_DEFAULT_SIZE_LESS_THAN_MIN_SIZE);
  });
  test('minSize가 maxSize보다 클 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '80%', maxSize: '40%', children: []});
    }).toThrow(ERROR_MESSAGE_CHECK_DEFAULT_SIZE_LESS_THAN_MIN_SIZE);
  });
  test('minSize가 0%보다 작을 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '-10%', maxSize: '40%', children: []});
    }).toThrow(ERROR_MESSAGE_CHECK_MIN_SIZE_NUMBER_PERCENTAGE);

  });
  test('maxSize가 100%보다 클 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '20%', maxSize: '110%', children: []});
    }).toThrow(ERROR_MESSAGE_CHECK_MAX_SIZE);
  });
  test('maxSize가 0%보다 작을 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '20%', maxSize: '-10%', children: []});
    }).toThrow(ERROR_MESSAGE_CHECK_MAX_SIZE_NUMBER_PERCENTAGE);
  });
  test('minSize가 100%보다 클 경우 에러를 던진다.', () => {
    expect(() => {
      checkValidProps({defaultSize: '60%', minSize: '110%', maxSize: '100%', children: []});
    }).toThrow(ERROR_MESSAGE_CHECK_MIN_SIZE);
  });
});
