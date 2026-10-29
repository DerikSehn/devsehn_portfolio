"use client";
// Ponte mínima entre a lógica de classe dos designs (DCLogic) e componentes React.
import { useEffect, useReducer, useRef } from "react";

type AnyObj = Record<string, any>;

export class DCLogic<P extends AnyObj = AnyObj, S extends AnyObj = AnyObj> {
  props: P = {} as P;
  state: S = {} as S;
  __tick: (() => void) | null = null;
  setState(update: Partial<S> | ((s: S, p: P) => Partial<S> | null), cb?: () => void) {
    const patch = typeof update === "function" ? update(this.state, this.props) : update;
    if (patch == null) return;
    this.state = { ...this.state, ...patch };
    this.__tick?.();
    if (cb) queueMicrotask(cb);
  }
  forceUpdate() { this.__tick?.(); }
  componentDidMount?(): void;
  componentDidUpdate?(prevProps: P): void;
  componentWillUnmount?(): void;
  renderVals(): AnyObj { return {}; }
}

export function useDC<T extends DCLogic>(Ctor: new () => T, props: AnyObj): AnyObj {
  const [, tick] = useReducer((x: number) => x + 1, 0);
  const ref = useRef<T | null>(null);
  if (!ref.current) ref.current = new Ctor();
  const inst = ref.current;
  const prevProps = inst.props;
  inst.props = props as T["props"];
  inst.__tick = tick;
  const mounted = useRef(false);
  useEffect(() => { if (mounted.current) inst.componentDidUpdate?.(prevProps); });
  useEffect(() => {
    mounted.current = true;
    inst.__tick = tick;
    inst.componentDidMount?.();
    return () => { inst.__tick = null; inst.componentWillUnmount?.(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return inst.renderVals();
}
