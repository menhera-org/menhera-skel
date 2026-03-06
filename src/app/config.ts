
const configElement = document.getElementById('config');

export function jsonFromScript<T>(element: unknown): T {
  if (!(element instanceof HTMLScriptElement)) {
    throw new TypeError('Not a <script> element');
  }

  const json = element.text ?? '';
  return JSON.parse(json) as T;
}

export interface Config {
  css_vars: Record<string, string>;
}

export const config: Config = jsonFromScript(configElement);
