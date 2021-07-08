declare namespace jest {
  interface Matchers {
    toHaveStyleRule(
      property: string,
      value?: jest.Value,
      options?: jest.Options | undefined
    ): void;
  }
}
