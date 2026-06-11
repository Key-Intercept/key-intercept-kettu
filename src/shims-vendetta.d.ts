declare module "@vendetta/patcher" {
  export function before(
    methodName: string,
    target: Record<string, unknown>,
    callback: (args: unknown[]) => void,
    once?: boolean
  ): () => void;
}

declare module "@vendetta/metro" {
  export function findByProps<T = any>(...props: string[]): T;
}
