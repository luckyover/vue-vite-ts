export function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this as ThisParameterType<T>;
    clearTimeout(timeout!);
    timeout = setTimeout(() => func.apply(context, args), wait);
  } as (...args: Parameters<T>) => ReturnType<T>;
}
